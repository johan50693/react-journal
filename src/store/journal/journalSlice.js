
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving= true;
    },
    addNewEmtyNote: (state, action ) => {
      state.notes.push(action.payload);
      state.isSaving= false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {

    },
    setSaving: (state) => {

    },
    updateNote: (state,action) => {

    },
    deleteNoteById: (state,action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmtyNote,setActiveNote,setNotes,setSaving,updateNote,deleteNoteById, savingNewNote } = journalSlice.actions;