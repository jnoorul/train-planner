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
                                            "connectedStations": ["Sengkang"],
                                            "lines": ["purple"]
                            }, {

                                            "name": "Sengkang",
                                            "passengers": 40,
                                            "connectedStations": ["Punggol","Serangoon"],
                                            "lines": ["purple"]
                            }, {

                                            "name": "Serangoon",
                                            "passengers": 40,
                                            "connectedStations": ["Sengkang", "LittleIndia", "PayaLebar", "Bishan"],
                                            "lines": ["purple", "circle"]
                            },{

                                            "name": "LittleIndia",
                                            "passengers": 40,
                                            "connectedStations": ["Serangoon","DhobyGhaut"],
                                            "lines": ["purple"]
                            },{

                                            "name": "DhobyGhaut",
                                            "passengers": 20,
                                            "connectedStations": ["LittleIndia", "HarbourFront", "MarinaBay", "Orchard", "Esplanade"],
                                            "lines": ["purple", "red", "circle"]

                            },{

                                            "name": "HarbourFront",
                                            "passengers": 90,
                                            "connectedStations": ["DhobyGhaut"],
                                            "lines": ["purple"]

                            },{
                                            "name": "Orchard",
                                            "passengers": 30,
                                            "connectedStations": ["DhobyGhaut", "Somerset"],
                                            "lines": ["red"]

                            },{
                                            "name": "Somerset",
                                            "passengers": 0,
                                            "connectedStations": ["Orchard", "Novena"],
                                            "lines": ["red"]

                            },{
                                            "name": "Novena",
                                            "passengers": 10,
                                            "connectedStations": ["Somerset", "Bishan"],
                                            "lines": ["red"]

                            },{
                                            "name": "Bishan",
                                            "passengers": 20,
                                            "connectedStations": ["Woodlands", "Novena", "Serangoon"],
                                            "lines": ["red","circle"]

                            },{
                                            "name": "Woodlands",
                                            "passengers": 40,
                                            "connectedStations": ["Bishan"],
                                            "lines": ["red"]

                            },{
                                            "name": "MarinaBay",
                                            "passengers": 100,
                                            "connectedStations": ["DhobyGhaut"],
                                            "lines": ["red"]
                            },{
                                            "name": "Esplanade",
                                            "passengers": 0,
                                            "connectedStations": ["DhobyGhaut","PayaLebar"],
                                            "lines": ["circle"]
                            },{
                                            "name": "PayaLebar",
                                            "passengers": 75,
                                            "connectedStations": ["Esplanade","Serangoon"],
                                            "lines": ["circle"]
                            }
            ]
}

## Sample Output:

{

            "line": "purple",
            "totalNumOfPassengers": 260,
            "reachingVia": "LittleIndia"             
}

## Endpoint Details

Please implement your solution by creating a new endpoint https://xxxx.com/trainPlanner 