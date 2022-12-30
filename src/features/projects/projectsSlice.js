import { createSlice } from "@reduxjs/toolkit";

const initialProjects = [{
    title:'Countries App',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/countries-app/master/src/design/desktop-design-detail-dark.jpg',
    githubLink:'https://github.com/Aymenfisher/countries-app',
    liveLink:'https://countriesappaymen.netlify.app/countries',
    techs:['react','redux','css','git','github'],
    description:'A Frontend App with Theme switcher, filters, and search that fetches countries from a REST API. It displays all countries in Cards, And each country has its own route where more informations about that country are shown.'
},
{
    title:'Todo App',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/todo-app/master/src/screenshots/screenshot-2.png',
    githubLink:'https://github.com/Aymenfisher/todo-app',
    liveLink:'https://todoappaymen.netlify.app/',
    techs:['react','redux','css','git','github'],
    description:'A Frontend Todo App with Theme switcher and filters. you can create todos, delete a todo , set a todo as completed, filter todos by active/completion, see the remaining todos, and clear all completed todos with one click.'
},
{
    title:'Inspirational Homepage',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/inspirational-homepage/master/screenshots/screenshot.png',
    githubLink:'https://github.com/Aymenfisher/inspirational-homepage',
    liveLink:'https://inspirationalhomepageaymen.netlify.app',
    techs:['react','redux','css','git','github'],
    description:'A mini-todo App That uses APIs to fetch and displays weather according to the visitor\'s IP address, a background image carousel, and random quotes. '
},
{
    title:'Flashcards',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/flashcards-react-redux/master/src/screenshots/screen-2.png',
    githubLink:'https://github.com/Aymenfisher/flashcards-react-redux',
    liveLink:'https://flashcards-react-redux.netlify.app',
    techs:['react','redux','css','git','github'],
    description:'My first React App,A simple Flash cards App, you can create Topics, Create Quizzes and Cards for Quizzes.'
},
{
    title:'Calculator App',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/calculator-app/master/screenshots/desktop-2.png',
    githubLink:'https://github.com/Aymenfisher/calculator-app',
    liveLink:'https://calculatorappaymen.netlify.app/',
    techs:['html','css','javascript','git','github'],
    description:'A Calculator App with 3 themes, Implemented with HTML5, CSS3 , and Vanilla JS.'
},
{
    title:'Interactive Card Details Form',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/interactive-card-details-form/master/screenshots/web-1.png',
    githubLink:'https://github.com/Aymenfisher/interactive-card-details-form',
    liveLink:'https://aymenfisher.github.io/interactive-card-details-form/',
    techs:['html','css','javascript','git','github'],
    description:'A credit card form with nice preview,form validation, and a responsive design. I created it from scratsh using HTML5, CSS3, and Vanilla JS.'
},
{
    title:'Intro Section With Dropdown Navigation',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/intro-section-with-dropdown-navigation/master/screenshots/desktop-2.PNG',
    githubLink:'https://github.com/Aymenfisher/intro-section-with-dropdown-navigation',
    liveLink:'https://aymenfisher.github.io/intro-section-with-dropdown-navigation/',
    techs:['html','css','javascript','git','github'],
    description:'A Static Page with dropdown navigation, and mobile design, Created with HTML5,CSS3, and Vanilla JS.'
},
{
    title:'IP Address Tracker',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/ip-adress-tracker/master/screenshots/desktop-1.png',
    githubLink:'https://github.com/Aymenfisher/ip-adress-tracker',
    liveLink:'https://aymenfisher.github.io/ip-adress-tracker/',
    techs:['html','css','javascript','git','github'],
    description:'An IP Address tracker with maps view.You can track both domains and IP addresses, and see the location on maps. Created with HTML5,CSS3,Vanilla Js, used some APIs, and Leaflet Maps.'
},
{
    title:'Expenses Chart Component',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/expenses-chart-component/master/screenshots/desktop-1.png',
    githubLink:'https://github.com/Aymenfisher/expenses-chart-component',
    liveLink:'https://aymenfisher.github.io/expenses-chart-component/',
    techs:['html','css','javascript','git','github'],
    description:'A Simple Expenses Chart with hover State. Created with HTML5,CSS3, and Vanilla JS.'
},
{
    title:'Fyyur',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/fyyur/master/screenshots/fyyur.png',
    githubLink:'https://github.com/Aymenfisher/fyyur',
    techs:['python','flask','flask-sqlalchemy','postgres','git','github'],
    description:'Fyyur is a musical venue and artist booking site, I worked on the backend side where i completed the routes with flask, and created the database tables using sqlalchemy ORM  on a Postgres DB.'
},
{
    title:'Trivia',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/trivia/master/screenshots/trivia-4.png',
    githubLink:'https://github.com/Aymenfisher/trivia',
    techs:['python','flask','flask-sqlalchemy','git','github'],
    description:'This project is a question/answer game. I implemented the REST API with Flask, used Flask-SQLAlchemy ORM, Implemented tests with Python unittest library, and created documentation of that app!'
},
{
    title:'Casting Agency',
    githubLink:'https://github.com/Aymenfisher/Casting-Agency',
    techs:['python','flask','flask-sqlalchemy','postgres','git','github'],
    description:'The Casting Agency is a REST API that is responsible for creating movies and managing and assigning actors to those movies. I implemented the API from scratch, created tests, IAM with JWT,documentation, and deployed it on heroku (using gunicorn).'
}
]

const projects = createSlice({
    name:'projects',
    initialState:initialProjects
})

export const selectProjects = state => state.projects;

export default projects.reducer