# Find the busiest Train Route 

## Problem Description:
   Singapore's Land Transport Authority needs your help to come up with an application which will help them to find the busiest train route during special events like National Day, New Year Eve and Singapore Air show, etc.


## Input:

 
1) Route map with list of stations and their connections (similar to MRT/MTR map)

2) Destination where the event is happening

3) Number of passengers waiting in each station to participate in the event happening at the destination.


## Assumption:
 
From source to destination, if there are more than one route to choose, passenger will always choose the shortest route (in terms of number of stations in between) and there will always be only one shortest route to reach the destination.

## Output:

Your application should find the busiest train route and output the below

1) Train Line (red or purple or orange)

2) Direction (reaching the destination via. i.e the previous station before the destination)

3) Total number of passengers travelled in the above line and direction.
    
## Endpoint

Please implement your solution by creating a new POST endpoint https://xxxx.com/trainPlanner.
For evaluation we will hit your endpoint once for every test case.


## Sample Input:

The HTTP POST request will come with a body of Content-Type: application/json.

**Limits**

 * Number Of Passengers will be between 0 to 1000 (inclusive)
 * Total number of stations will be between 2 and 50 (inclusive)
 * HTTP request timeout: 5s  


{

	"destination": "DhobyGhaut",
	"stations": [{
			"name": "Punggol",
			"passengers": 80,
			"connections": [{
					"station": "Sengkang",
					"line": "purple"
				}
			]

		}, {

			"name": "Sengkang",
			"passengers": 40,
			"connections": [{
					"station": "Punggol",
					"line": "purple"
				}, {
					"station": "Serangoon",
					"line": "purple"
				}
			]

		}, {

			"name": "Serangoon",
			"passengers": 40,
			"connections": [{
					"station": "LittleIndia",
					"line": "purple"
				}, {
					"station": "Sengkang",
					"line": "purple"
				}, {
					"station": "PayaLebar",
					"line": "orange"
				}, {
					"station": "Bishan",
					"line": "orange"
				}
			]
		}, {

			"name": "LittleIndia",
			"passengers": 40,
			"connections": [{
					"station": "Serangoon",
					"line": "purple"
				}, {
					"station": "DhobyGhaut",
					"line": "purple"
				},
			]
		}, {

			"name": "DhobyGhaut",
			"passengers": 20,
			"connections": [{
					"station": "LittleIndia",
					"line": "purple"
				}, {
					"station": "HarbourFront",
					"line": "purple"
				}, {
					"station": "Somerset",
					"line": "red"
				}, {
					"station": "MarinaBay",
					"line": "red"
				}, {
					"station": "Esplanade",
					"line": "orange"
				}
			]

		}, {

			"name": "HarbourFront",
			"passengers": 90,
			"connections": [{
					"station": "DhobyGhaut",
					"line": "purple"
				}
			]

		}, {
			"name": "Somerset",
			"passengers": 0,
			"connections": [{
					"station": "DhobyGhaut",
					"line": "red"
				}, {
					"station": "Orchard",
					"line": "red"
				}
			]

		}, {
			"name": "Orchard",
			"passengers": 30,
			"connections": [{
					"station": "Somerset",
					"line": "red"
				}, {
					"station": "Novena",
					"line": "red"
				}
			]

		}, {
			"name": "Novena",
			"passengers": 10,
			"connections": [{
					"station": "Orchard",
					"line": "red"
				}, {
					"station": "Bishan",
					"line": "red"
				}
			]

		}, {
			"name": "Bishan",
			"passengers": 20,
			"connections": [{
					"station": "Novena",
					"line": "red"
				}, {
					"station": "Woodlands",
					"line": "red"
				}, {
					"station": "Serangoon",
					"line": "orange"
				}
			]

		}, {
			"name": "Woodlands",
			"passengers": 40,
			"connections": [{
					"station": "Bishan",
					"line": "red"
				}
			]

		}, {
			"name": "MarinaBay",
			"passengers": 100,
			"connections": [{
					"station": "DhobyGhaut",
					"line": "red"
				}
			]
		}, {
			"name": "Esplanade",
			"passengers": 0,
			"connections": [{
					"station": "DhobyGhaut",
					"line": "orange"
				}, {
					"station": "PayaLebar",
					"line": "orange"
				}
			]
		}, {
			"name": "PayaLebar",
			"passengers": 75,
			"connections": [{
					"station": "Esplanade",
					"line": "orange"
				}, {
					"station": "Serangoon",
					"line": "orange"
				}
			]
		}
	]
}


## Sample Output:
The expected HTTP response should come with a body of Content-Type: application/json  

{

            "line": "purple",
            "totalNumOfPassengers": 260,
            "reachingVia": "LittleIndia"             
}


## Explanation

Visual representation of the above sample Input:

![Alt text](public/images/MrtMap.jpg?raw=true "Title")

For the sample input, the destination is given as "Dhoby Ghaut". All the passengers waiting in each station will travel to the Dhoby Ghaut using the shortest path.

Passenger will reach Dhoby Ghaut using one of the below routes,

* via LittleIndia using Purple line
* via HarbourFront using Purple line
* via Esplanade using  using Orange line
* via Somerset using Red line
* via MarinaBay using Red line

For each of the above option, you need to find the total number of passengers and the route which carries the maximum number of passengers should be your final output.

For the given sample input, purple line reaching Dhoby Ghaut via LittleIndia station will carry maximum number of passengers. 
Total of 260 passengers will be reaching Dhoby Ghaut via Little India using purple line.  


**Punggol (80)  -> Sengkang (40) ->**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Serangoon (40) -> LittleIndia (40) -> Dhoby Ghaut**  
**Woodlands(40) -> Bishan (20)   ->**  
 










