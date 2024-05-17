import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("We have sent you a reset password email. Check your inbox.");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email]
  );
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Forgot password</h1>
      <form
        className="flex flex-col gap-4 mt-8"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 bg-gray-100 roundend-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          type="submit"
          value="Send reset password email"
          className="p-4 bg-pink-400 rounded-md"
        />
        <Link to="/sign-in">Back to sign in</Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
