import { configureStore } from '@reduxjs/toolkit';
import skills from '../features/skills/skillsSlice.js'
import projects from '../features/projects/projectsSlice.js'

export const store = configureStore({
  reducer: {
    skills:skills,
    projects:projects
  }
});
