import { configureStore } from '@reduxjs/toolkit';
import skills from '../features/skills/skillsSlice.js'

export const store = configureStore({
  reducer: {
    skills:skills
  }
});
