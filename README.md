# Find the busiest Train Route 

## Problem Description:
   Singapore's Land Transport Authority needs your help to come up with an application which will help them to find the busiest train route during special events like National Day, New Year Eve and Singapore Air show, etc.



## Input:

 
1) Route map with list of stations and their connections (similar to MRT/MTR map)

2) Destination where the event is happening

3) Number of people waiting in each station to participate in the event.


## Assumption:
 
From source to destination, if there are more than one route to choose, passenger will always choose the shortest route (in terms of number of stations in between) and there will always be only one shortest route to reach the destination.

## Output:

Your application should find the busiest train route and output the below

1) Train Line (red or purple or circle)

2) Direction (reaching the destination via. i.e the previous station before the destination)

3) Total number of passengers travelled in the above line and direction.
    

## Sample Input:

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

{

            "line": "purple",
            "totalNumOfPassengers": 260,
            "reachingVia": "LittleIndia"             
}


## Explanation
![Alt text](public/images/MrtMap.jpg?raw=true "Title")


## Endpoint Details

Please implement your solution by creating a new endpoint https://xxxx.com/trainPlanner 

