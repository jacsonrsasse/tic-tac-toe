import WebSocketService from "../../shared/services/web-socket.service";
import Base from "../Base";
import LoginDesign from "./Login.style";

function Login() {
  const onClickTest = () => {
    const service = new WebSocketService();
    service.connect();
  };

  return (
    <Base>
      <LoginDesign className="login-area">
        <div className="logo">
          <img src="/Logo.png" />
        </div>

        <div className="center"></div>

        <div className="form">
          <img src="/tic-tac-toe.png" />
          <input
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Enter you nickname"
          />
          <button onClick={onClickTest}>Login</button>
        </div>
      </LoginDesign>
    </Base>
  );
}

export default Login;
