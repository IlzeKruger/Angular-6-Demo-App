# Angular-6-Demo-App
First Release of my Angular 6 Demo Application - Currently has a tab component. First tab component uses Material Data table to 
display data read from a json file. The second tab show data making use of materials grid, also reading from a json file.

Instructions
1. Within Angular-6-Demo-App repository clock on 'Clone or Download' Button and download Zip.
Download the AngularDemo-v1 directory to a destination of your choosing on your local machine.
   Note this does not include the node_modules directory.
2. Unzip, if required.
3. I assume that node.js and npm is installed on your machine.
4. You should be able to open the AngularDemo-v1 directory in your code editor of choice (I normally use VsCode)
5. In your command editor within your AngularDemo-v1 structure run 'npm install'. 
    This should install the required node_modules according to my package.json file. 
    I used angular v6.1.0 and material v6.1.0 as well as rxjs 6.2.2, but this should all be installed with the npm install command.
6. Run 'npm start' to start the server.
7. Now go to your browser and open localhost:4200 to run.

What was used.
I used Angular CLI to create my app using angular version 6.1.0
Material Design
and rxjs is also included in the project.

Assumptions
I made a view assumptions since the instructions was not a 100% clear and the data and instructions did not always conform. I will list my
assumptions. I believe it is correct, if really different to what was wanted please let me know.
1. In the first tab the Warrant information is displayed. I am allowing selection and filtering on the Type field instead of the issuer field. This is because in the JSON file provided the filters given are for type and I assumed that this should be used as part of the dropdown select (See below). Also, the values for the issuer was all the same and the jpg under the task of the dropdown also show Type. I believe it does show the ability to create a dropdown select and filter the table on a specific field. 
 "filter":[  
     {  
        "type":"Barrier Index Call",
        "expiryDates":[  
           "2029-12-31T00:00:00"
        ]
     },
     {  
        "type":"Barrier Index Pull",
        "expiryDates":[  
           "2029-12-31T00:00:00"
        ]
     }
  ],

2. I formatted the $ fields on the Warrants to show min XX.XXX. So always 2 numeric and 2 decimal. 
I thought this might be the idea behind xx.000.

I used Material and rxjs. I do understand the limitation and issue around the size of the packages. Within Absa we only made use of 
Bootstrap and flexLayout for that specific reason. But I wanted to get some exposure to Material Design.
