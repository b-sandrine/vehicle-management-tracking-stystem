import "./Login.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <div className="login--container">
      <img src={logo} alt="App logo" />
      <h5>Log into Your Account</h5>
      <div className="form">
        <input placeholder="Enter your email"></input>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your password"
          style={{ marginRight: "10px" }}
        />

        <input type="submit" name="" id="" value="Log In" />
      </div>
    </div>
  );
}

export default Login;
