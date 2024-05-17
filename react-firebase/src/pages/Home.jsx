import React, { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Home() {
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Home;
