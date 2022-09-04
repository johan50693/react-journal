import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singnInWithGoogle = async () => {

  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider );
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const token = credentials.accessToken;
    // The signed-in user info.
    const { displayName, email, photoURL, uid} = result.user;
    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok:false,
      errorMessage, 
      errorCode
    }
  }
}