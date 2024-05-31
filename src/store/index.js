import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "./answerSlice";
const quizStore = configureStore({
  reducer: {
    answer: answerSlice.reducer,
  },
});

export default quizStore;
