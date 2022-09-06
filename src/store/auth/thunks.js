import { registerUserWithEmailPassword, singnInWithGoogle } from "../../firebase/providers";
import { checkingCredential, login, logout } from "./authSlice";

export const checkingAuthentication = ( email, password) =>{
  return async (dispatch) => {
    dispatch( checkingCredential() );
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {  
    dispatch( checkingCredential() );
    const result = await singnInWithGoogle();
    
    if( !result.ok) return dispatch(logout(result.errorMessage));

    dispatch( login(result));
  }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    
    dispatch( checkingCredential() );

    const { ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
    if( !ok) return dispatch(logout({errorMessage}));

    dispatch( login({uid, photoURL, displayName, email}));
  }
}