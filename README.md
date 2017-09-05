# Find the busiest Train Route 

## Problem Description:
   Singapore's Land Transport Authority needs your help to come up with an application which will help them to plan and schedule optimal number of trains to operate during special events like National Day, New Year Eve and Singapore Air show, etc.



## Input:

 
1) Route map with list of stations and their connections (similar to MRT/MTR map)

2) Destination where the event is happening

3) Number of people waiting in each station to participate in the event.


## Output:
    The busiest route which will carry maximum number of passengers.
    
## Assumption:
 
From source to destination, if there are more than one route to choose, passenger will always choose the shortest route (in terms of number of stations in between) and there will always be only one shortest route to reach the destination.

## Sample Input:

{

                destination: 'DhobyGhaut',
                
                stations: [{
                
                                                name: 'Punggol',
                                                passengers: 80,
                                                connectedStations: ['Sengkang'],
                                                lines: ['purple']
                                }, {
                                
                                                name: 'Sengkang',
                                                passengers: 40,
                                                connectedStations: ['Punggol'],
                                                lines: ['purple']
                                }, {
                                
                                                name: 'Serangoon',
                                                passengers: 40,
                                                connectedStations: ['Sengkang', 'DhobyGhaut', 'PayaLebar', 'Bishan'],
                                                lines: ['purple', 'circle']
                                } {
                                
                                                name: 'DhobyGhaut',
                                                passengers: 20,
                                                connectedStations: ['Serangoon', 'HarbourFront', 'MarinaBay', 'Orchard', 'PayaLebar'],
                                                lines: ['purple', 'red', 'circle']
                                                
                                }, {
                                
                                                name: 'HarbourFront',
                                                passengers: 90,
                                                connectedStations: ['DhobyGhaut'],
                                                lines: ['purple']
                                                
                                }, {
                                                name: 'Orchard',
                                                passengers: 30,
                                                connectedStations: ['DhobyGhaut', 'Novena'],
                                                lines: ['red']
                                                
                                },{
                                                name: 'Novena',
                                                passengers: 10,
                                                connectedStations: ['Orchard', 'Bishan'],
                                                lines: ['red']
                                                
                                }
                                {
                                                name: 'Bishan',
                                                passengers: 20,
                                                connectedStations: ['Woodlands', 'Novena', 'Serangoon'],
                                                lines: ['red','circle']
                                                
                                }
                                {
                                                name: 'Woodlands',
                                                passengers: 40,
                                                connectedStations: ['Bishan'],
                                                lines: ['red']
                                                
                                }, {
                                                name: 'MarinaBay',
                                                passengers: 100,
                                                connectedStations: ['DhobyGhaut'],
                                                lines: ['red']
                                },
                                {
                                                name: 'PayaLebar',
                                                passengers: 75,
                                                connectedStations: ['DhobyGhaut','Serangoon'],
                                                lines: ['circle']
                                }
                ]
}

## Sample Output:

{

                line: 'purple',
                totalNumOfPassengers: 220,
                reachingVia: 'Serangoon'             
                
}