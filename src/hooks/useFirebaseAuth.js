import { useState, useEffect } from 'react';
import firebase from 'firebase';

const useFirebaseAuth = () => {
  const [{ loaded, loggedIn }, setState] = useState({
    loaded: false,
    loggedIn: false,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (!user)
        setState((prevState) => ({
          ...prevState,
          loaded: true,
          loggedIn: false,
        }));
      else
        setState((prevState) => ({
          ...prevState,
          loaded: true,
          loggedIn: true,
        }));
    });
  }, []);

  return [loaded, loggedIn];
};

export default useFirebaseAuth;
