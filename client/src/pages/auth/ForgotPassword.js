import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ForgotPassword = ({ history }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      const config = {
        url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
        handleCodeInApp: true,
      };
  
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          setEmail("");
          setLoading(false);
          toast.success("Check your email for password reset");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
          //console.log("ERROR MSG IN FORGOT PASSWORD", error);
        });
    };
  
    return (
      <div>
        {loading ? (
          <h4>Loading</h4>
        ) : (
          <h4>Forgot Password</h4>
        )}
  
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <br />
          <button disabled={!email}>
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default ForgotPassword;