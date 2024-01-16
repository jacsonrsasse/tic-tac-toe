// import WebSocketService from "../../shared/services/web-socket.service";
import Base from "../Base-old";
import LoginDesign from "./Login.style";

function Login() {
  const onClickTest = () => {
    // const service = new WebSocketService();
    // service.connect();
  };

  return (
    <Base>
      <LoginDesign className="login-area">
        <div className="title">
          <img className="image" src="/title.png" />
        </div>

        <div className="line"></div>

        <div className="logo">
          <img className="image" src="/tic-tac-toe.png" />
        </div>

        <div className="form">
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
