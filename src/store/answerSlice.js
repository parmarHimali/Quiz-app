import { createSlice } from "@reduxjs/toolkit";

const INITIAL = {
  totalCorrect: 0,
  totalIncorrect: 0,
  currQue: 0,
  correct: null,
  selectedOptionIdx: null,
  skipAns: [],
};
const answerSlice = createSlice({
  name: "answer",
  initialState: INITIAL,
  reducers: {
    setIsCorrect: (state, action) => {
      state.correct = action.payload;
    },
    incrementTotal: (state) => {
      state.totalCorrect += 1;
    },
    decrementTotal: (state) => {
      state.totalIncorrect += 1;
    },
    incrementCurrQue: (state) => {
      state.currQue += 1;
    },
    setSelectedOptionIdx: (state, action) => {
      state.selectedOptionIdx = action.payload;
    },
    resetIsCorrect: (state) => {
      state.correct = null;
    },
    resetSelectedOptionIdx: (state) => {
      state.selectedOptionIdx = null;
    },
    setSkippedAns: (state, action) => {
      state.skipAns = [...state.skipAns, action.payload];
    },
  },
});

export const answerActions = answerSlice.actions;
export default answerSlice;
