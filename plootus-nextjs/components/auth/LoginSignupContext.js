import React, { createContext, useState } from 'react';

export const LoginSignupContext = createContext({});

export const LoginSignupProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [idx, setIdx] = useState(1);

  return (
    <LoginSignupContext.Provider 
      value={{ 
        loginModal, setLoginModal, 
        signupModal, setSignupModal, 
        idx, setIdx 
      }}
    >
      {children}
    </LoginSignupContext.Provider>
  );
};
