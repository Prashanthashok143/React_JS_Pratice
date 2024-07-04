import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
  ],
};

const userSlice = createSlice({
  name: "TODO",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      const Id = state.users.length + 1;
      const userDetails = { id: Id, name: action.payload };
      state.users.push(userDetails);
    },
    deleteDetails: (state, action) => {
      let Index = state.users.findIndex((user) => user.id === action.payload);
      state.users.splice(Index, 1);
    },
    updateDetails: (state, action) => {
      let Index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users[Index] = action.payload;
    },
  },
});

export const { addDetails, deleteDetails, updateDetails } = userSlice.actions;
export const store = configureStore({
  reducer: {
    Todo: userSlice.reducer,
  },
});
