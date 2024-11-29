import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  isHiddenSidebar: boolean;
  isHiddenDialogSidebar: boolean;
}

const initialState: SidebarState = {
  isHiddenSidebar: false,
  isHiddenDialogSidebar: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setHidden: (state, action) => {
      state.isHiddenSidebar = action.payload;
    },
    toggleSidebar: (state, action) => {
      state.isHiddenDialogSidebar = action.payload;
    },
  },
});

export const { setHidden, toggleSidebar } = sidebarSlice.actions;
export const selectHiddenSidebar = (state: { sidebar: SidebarState }) => state.sidebar.isHiddenSidebar;
export const selectHiddenDialogSidebar = (state: { sidebar: SidebarState }) => state.sidebar.isHiddenDialogSidebar;

export default sidebarSlice.reducer;
