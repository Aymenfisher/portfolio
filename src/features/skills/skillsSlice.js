import { createSlice } from "@reduxjs/toolkit";

const techs = [
    {name:'HTML',logo:'https://svgshare.com/i/p2g.svg'},
    {name:'CSS',logo:'https://svgshare.com/i/p2r.svg'},
    {name:'JavaScript',logo:'https://svgshare.com/i/p3t.svg'},
    {name:'React',logo:'https://svgshare.com/i/p3e.svg'},
    {name:'Redux',logo:'https://svgshare.com/i/p3E.svg'},
    {name:'Python',logo:'https://svgshare.com/i/p2S.svg'},
    {name:'Flask',logo:'https://svgshare.com/i/p3X.svg'},
    {name:'flask-sqlalchemy',logo:'https://svgshare.com/i/p6D.svg'},
    {name:'Postgres',logo:'https://svgshare.com/i/p4M.svg'},
    {name:'Git',logo:'https://svgshare.com/i/p3K.svg'},
    {name:'Github',logo:'https://svgshare.com/i/p54.svg'},
    {name:'Matlab',logo:'https://svgshare.com/i/p3R.svg'},
    {name:'Docker',logo:'https://svgshare.com/i/p4t.svg'}
]

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

