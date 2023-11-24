<img width="1280" alt="Screenshot 2023-11-24 at 10 55 35" src="https://github.com/markmcgrory/navigate_app/assets/136241504/31f302b8-0b38-4fa1-b95c-21133afa7cc6">

# Navigate_app
Hello and thank you for checking out Navigate; an application created by Mark, Ibrahim, Matthew, and Emma during the CodeClan intensive professional software development course.

**What is Navigate?**
Navigate is an internal, location-data and management application for the social services. We wanted to create an app that could store service users and support services data, allowing the user to add, update and assign users to services around Glasgow.

One of the main features of Navigate is the ArcGIS map rendered on the services page. Using dynamically loaded, coordinate data from different social-care and support services around the city of Glasgow - The user is able to select a service and render it's position on the map via a graphics point (a pop-up). This alongside the create, read, update and delete functionality of a list service-users provides the user with an intuitive management application. The MongoDb database stores all the relevant personal information of the current service-users in care at the present time - the app allows the user to update and add additional information when necessary. The application also allows the user to see the current vacancies amongst services by keeping track of the bedstates of each service.

This application is currently in its version 1 as we would love to take some additional time to add additional features.

Navigate was born from Matthew’s experiences in the Social Care Services sector in Glasgow, where system did not communicate with each other. Additionally, most applications the services are using are marketing-based applications that don’t fully meet the organisation’s needs.

**How to start up Navigate locally?**
After cloning the repo or downloading the application as a .zip file and extracting its contents, please follow the steps below;
1.	Open the Navigate application within Visual Studio Code (VSC)
2.	Open the server folder and run the code below in the terminal;
  a.	npm install
3.	Seed the database with example data by running the code below in the same terminal;
  a.	npm run seeds
4.	To run the server with database, run the code below in the same terminal;
  a.	npm start
5.	Open the src folder in the terminal and run the code below in the terminal;
  a.	npm install
6.	To run the application in your local browser run the code below in the terminal;
  a.	npm start

**MVP**

- To create a full-stack application the allowed a user to add a service user, a service and perform CRUD functionality
- To display a list of all the homelessness and addiction services around the city of Glasgow
- To display a list of service users with relevant personal details: name, age, date of birth, address, contact and more

**Ext**

- To use ArcGIS to render a map showing the whole city of Glasgow
- To allow the user to select a service and render a popup on the map of where this service is located
- To allow the user to assign service users to different services

**Technologies, Frameworks * Languages**

- ArcGIS
- React
- MongoDb
- Express
- JavaScript
- HTML/CSS
- Insomnia



