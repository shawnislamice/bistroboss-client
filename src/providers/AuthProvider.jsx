import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  // Providers
  const googleProvider = new GoogleAuthProvider();
  // Providers
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      //   Token
      const userInfo = { email: currentUser?.email };
      if (currentUser) {
        setUser(currentUser);
        const { data } = await axiosPublic.post("/jwt", userInfo);
        console.log(data);
        if (data.token) {
          localStorage.setItem("access-token", data.token);
        }
      } else {
        localStorage.removeItem("access-token");
      }
      //   Token
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const values = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    setUser,
    updateUserProfile,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
