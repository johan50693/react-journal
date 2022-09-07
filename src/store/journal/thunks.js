import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmtyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";


export const startNewNote = () => {
  return async (dispatch,getState) => {

    dispatch(savingNewNote());

    const {uid} = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    const setDocResp = await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    dispatch(addNewEmtyNote(newNote));
    dispatch(setActiveNote(newNote));
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
  
    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  }
}