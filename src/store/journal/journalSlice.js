
import { SatelliteAltOutlined } from '@mui/icons-material';
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
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state,action) => {
      state.isSaving= false;
      state.notes= state.notes.map( (note) => {
        if(action.payload.id == note.id) return action.payload;
        return note;
      });

      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },
    deleteNoteById: (state,action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmtyNote,setActiveNote,setNotes,setSaving,updateNote,deleteNoteById, savingNewNote } = journalSlice.actions;