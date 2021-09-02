import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import firebase, { auth, db } from "../firebase/config";
import { addDocument } from "../firebase/services";
import "./style.scss";

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const handleFbLogin = async () => {
    const { user, additionalUserInfo } = await auth.signInWithPopup(fbProvider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
      });
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="login-left">
          <div className="login-left__name">OnionDev</div>
          <div className="login-left__description">
            OnionApp giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </div>
        </div>
        <div className="login-right">
          <div className="login-right__button">
            <div>
              <Button type="primary" onClick={handleFbLogin}>
                Đăng Nhập Bằng Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
