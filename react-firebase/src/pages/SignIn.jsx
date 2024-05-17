import React, { useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!password || !email) {
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("sign in");
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 bg-gray-100 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-4 bg-gray-100 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Link to="/forgot-password" className="ml-auto">
          Forgot password?
        </Link>
        <input
          type="submit"
          className="p-4 bg-green-300 rounded-md text-orange-500 text-bold text-2xl"
          value="Sign In"
        />
        <Link to="/sign-up">Don't have an account? Sign up</Link>
      </form>
    </div>
  );
}

export default SignIn;
