import React from "react";
import { AuthProvider, useAuth } from "react-oidc-context";
import './App.css';

const oidcConfig = {
};

const LoginButton = () => {
  const auth = useAuth();
  if (auth.isLoading) return <p>Loading...</p>;
  if (auth.error) return <p>Error: {auth.error.message}</p>;
  if (auth.user)
    return (
      <div>
        <p>Welcome, {auth.user.profile.name}</p>
        <button onClick={() => auth.signoutRedirect()}>Logout</button>
      </div>
    );

  return (
    <button
      onClick={() => auth.signinRedirect()}
      className="login-button"
    >
      Login
    </button>
  );
};


const App = () => (
  <AuthProvider {...oidcConfig}>
    <LoginButton />
  </AuthProvider>
);

export default App; 
