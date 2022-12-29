import { createSlice } from "@reduxjs/toolkit";

const techs = {
    'html':{name:'HTML',logo:'https://svgshare.com/i/p2g.svg'},
    'css':{name:'CSS',logo:'https://svgshare.com/i/p2r.svg'},
    'javascript':{name:'JavaScript',logo:'https://svgshare.com/i/p3t.svg'},
    'react':{name:'React',logo:'https://svgshare.com/i/p3e.svg'},
    'redux':{name:'Redux',logo:'https://svgshare.com/i/p3E.svg'},
    'python':{name:'Python',logo:'https://svgshare.com/i/p2S.svg'},
    'flask':{name:'Flask',logo:'https://svgshare.com/i/p3X.svg'},
    'flask-sqlalchemy':{name:'flask-sqlalchemy',logo:'https://svgshare.com/i/p6D.svg'},
    'postgres':{name:'Postgres',logo:'https://svgshare.com/i/p4M.svg'},
    'git':{name:'Git',logo:'https://svgshare.com/i/p3K.svg'},
    'github':{name:'Github',logo:'https://svgshare.com/i/p54.svg'},
    'matlab':{name:'Matlab',logo:'https://svgshare.com/i/p3R.svg'},
    'docker':{name:'Docker',logo:'https://svgshare.com/i/p4t.svg'}
}

const others = ['Learning', 'Self-learning','Problem Solving', 'English', 'French','Arabic','Physics','Advanced Mathematics','Fluid Mechanics','Thermodynamics','Heat Transfer','CFD']

const skills = createSlice({
    name:'skills',
    initialState:{
        techs:techs,
        otherSkills:others
    }
})

export const selectTechs = state => state.skills.techs;
export const selectOtherSkills = state => state.skills.otherSkills;

export default skills.reducer;

