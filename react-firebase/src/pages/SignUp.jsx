import React, { useCallback, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("you have sign up");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password]
  );
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Create new account</h1>
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
        <input
          type="submit"
          className="p-4 bg-green-300 rounded-md text-orange-500 text-bold text-2xl"
        />
      </form>
    </div>
  );
}

export default SignUp;
