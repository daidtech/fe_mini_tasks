import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  isHiddenSidebar: boolean;
}

const initialState: SidebarState = {
  isHiddenSidebar: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setHidden: (state, action) => {
      state.isHiddenSidebar = action.payload;
    },
  },
});

export const { setHidden } = sidebarSlice.actions;
export const selectHiddenSidebar = (state: { sidebar: SidebarState }) => state.sidebar.isHiddenSidebar;

export default sidebarSlice.reducer;
