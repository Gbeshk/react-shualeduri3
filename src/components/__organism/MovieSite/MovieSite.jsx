import React, { useState } from "react";
import Login from "../../__molecules/Login/Login";
import SignUp from "../../__molecules/SignUp/SignUp";
import Menu from "../../__molecules/Menu/Menu";
function MovieSite() {
  const [loginVisible, setLoginVisible] = useState(true);
  const [signUpVisible, setSignUpVisible] = useState(false);

  return (
    <>
      {loginVisible && (
        <Login
          setLoginVisible={setLoginVisible}
          setSignUpVisible={setSignUpVisible}
        />
      )}
      {signUpVisible && (
        <SignUp
          setLoginVisible={setLoginVisible}
          setSignUpVisible={setSignUpVisible}
        />
      )}
      {!loginVisible && !signUpVisible && (
        <div>
          <Menu />
        </div>
      )}
    </>
  );
}
export default MovieSite;
