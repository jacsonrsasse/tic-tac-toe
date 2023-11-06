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
      <LoginDesign>
        {/* <img id="tic-white" src="./src/assets/tic-tac-toe-white.svg" />
        <img id="tic-black" src="./src/assets/tic-tac-toe-black.svg" /> */}

        <div>
          <img id="logo" src="./src/assets/logo.svg" />

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
