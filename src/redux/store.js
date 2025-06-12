import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import educationReducer from './slices/educationSlice';
import skillsReducer from './slices/skillsSlice';
import projectsReducer from './slices/projectsSlice';
import socialReducer from './slices/socialSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    social: socialReducer,
  }
});
