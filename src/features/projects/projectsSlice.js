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
    description:'A mini-todo App That uses APIs to fetch and displays weather according to the visitor\'s IP address, a background image carousel, and random quotes '
},
{
    title:'Flashcards',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/flashcards-react-redux/master/src/screenshots/screen-2.png',
    githubLink:'https://github.com/Aymenfisher/flashcards-react-redux',
    liveLink:'https://flashcards-react-redux.netlify.app',
    techs:['react','redux','css','git','github'],
    description:'My first React App,A simple Flash cards App, you can create Topics, Create Quizzes and Cards for Quizzes '
},
{
    title:'Calculator App',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/calculator-app/master/screenshots/desktop-2.png',
    githubLink:'https://github.com/Aymenfisher/calculator-app',
    liveLink:'https://calculatorappaymen.netlify.app/',
    techs:['html','css','javascript','git','github'],
    description:'A Calculator App with 3 themes, Implemented with HTML5, CSS3 , and Vanilla JS'
},
{
    title:'fyyur',
    screenshot:'https://raw.githubusercontent.com/Aymenfisher/calculator-app/master/screenshots/desktop-2.png',
    githubLink:'https://github.com/Aymenfisher/fyyur/tree/master/projects/01_fyyur/starter_code',
    techs:['python','flask','flask-sqlalchemy','postgres','git','github'],
    description:'Fyyur is a musical venue and artist booking site, I worked on the backend side where i implemented the routes with flask, and created the database tables using sqlalchemy ORM  on a Postgres DB.'
}
]

const projects = createSlice({
    name:'projects',
    initialState:initialProjects
})

export const selectProjects = state => state.projects;

export default projects.reducer