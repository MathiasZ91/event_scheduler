import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Checking if user is signed in when page refreshes
  useEffect(() => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    fetch('http://localhost:3001/api/auth/profile', fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return alert(data.error);
        }
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const signIn = (userCredentials) => {
    fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return alert(data.error);
        }
        localStorage.setItem('token', data.token);
        setUser(data.user);
      })
      .catch((err) => console.log(err));
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const values = {
    user,
    signIn,
    signOut,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };