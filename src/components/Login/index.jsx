import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import firebase, { auth, db } from "../firebase/config";
import { addDocument } from "../firebase/services";
import "./style.scss";

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const handleFbLogin = async  () => {
    const { user, additionalUserInfo } = await auth.signInWithPopup(fbProvider);

    if(additionalUserInfo?.isNewUser) { 
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId
      });
    }

  };

  return (
    <div>
      <div className="login">
        <div className="login__title">
          <h1>Chat OlaHub</h1>
        </div>
        <div className="login__button">
          <Button type="primary" onClick={handleFbLogin}>
            Đăng Nhập Bằng Facebook
          </Button>
          <Button type="danger">Đăng Nhập Bằng Google</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
