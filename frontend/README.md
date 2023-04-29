# Data Platform Frontend

This project uses [VueJS 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/).
For form validation [Vuelidate](https://vuelidate-next.netlify.app/) is used.

## Project setup

    npm install

### Before startup
You need to either have a local backend running and or use a cloud deployed backend.

Setup a .env file with following variables, e.g.:

    VITE_ROOT_API=http://localhost:3000

VITE_ROOT_API is the URL for the backend API, either on localhost or in the cloud.
### Compiles and hot-reloads for development

    npm run dev

## Group 20 - SPRINT 2 

## Login information for the application:

username = "editor" and password = "Test" (capital 'T') for the editor account.
username = "viewer" and password = "Test" (capital 'T') for the editor account.

If you are logged in as a user, you can view the dashboard. The dashboard displays the events, their dates and the number of attendees. If you scroll down, there will be a bar chart that will connect to the api to display the events and their attendess. A pie chart can be found below it dispaying clients by zip code. 
As a viewer, in the navigation pile. you will also have the option to find a client and find an event. At the top where the user is welcomed, you can also logout of that account.

If you are logged in as an editor, it opens the path to far more options. 
At the top of the navigation panel the user will be welcomed and the default page viewed will be the application's dashboard. 
Beneath the dashboard, the editor will find the options of the Client Intake Form, Create Event, Find Client, Find Event, Add Services and Edit Services.
The client intake form will take the personal and address details of a client and add to the Client list on the backend, and the client info can be retrieved on the find client page by either the client name or phone number. These are the required fields on the client intake form. This does not work as of sprint 2. 

Similar functionality should be used for the Create Event and Find Event pages. The information can be retrieved using specific criteria that is required when the user inputs the information into the form. 

We implemented CRUD functionality by utiliziaing the add and edit services page. On the add services page, you can create a new service. It will automatically show up as an active service. 
For the Edit Services page, we made sure we could update and utilize soft deletion for the services. An example of this could be that by entering a service's title it can be edited to something else entirely. And below that a list of active and inactive services will be generated which can be updated with the activate and deactivate buttons. These buttons will update the service list that can be added to as well. 