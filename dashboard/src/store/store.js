import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";// Adjust the path based on your project structure
import forgotResetPasswordReducer from "./slices/forgotResetPasswordSlice";
import messageReducer from "./slices/messageSlice";
import timelineReducer from "./slices/timelineSlice";
import skillReducer from "./slices/skillSlice";
import softwareApplicationReducer from "./slices/softwareApplicationSlice";
import projectReducer from "./slices/projectSlice";
const isDevelopment = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = configureStore({
  reducer: {
    user: userReducer, // Use the actual reducer from the userSlice
    forgotPassword: forgotResetPasswordReducer,
    messages : messageReducer,
    timeline: timelineReducer,
    skill: skillReducer,
    project: projectReducer,
    softwareApplications: softwareApplicationReducer,
  }, isDevelopment
});
