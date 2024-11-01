import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: {
    data:
      localStorage.getItem("data") == null
        ? []
        : JSON.parse(localStorage.getItem("data")),
  dataFilter : null
  },
  reducers: {
    add(state, action) {
      state.data.push({
        title: action.payload.title,
        description: action.payload.description,
        status: 0,
      });
      window.localStorage.setItem("data", JSON.stringify(state.data));
    },
    check(state, action) {
      state.data[action.payload].status = 1;
      window.localStorage.setItem("data", JSON.stringify(state.data));
    },
    setFilter(state , action){
      state.dataFilter=action.payload
    }
  },
});
const store = configureStore({
  reducer: {
    tasks: slice.reducer,
  },
});
export const countFunc = (state) => {
  const data = state.tasks.data ;
  const all = data.length;
  const completed = data.filter((e) => e.status == 1).length;
  return {
    all: all,
    completed: completed,
    pendding: all - completed,
  };
};
export const actions = slice.actions;
export default store;
