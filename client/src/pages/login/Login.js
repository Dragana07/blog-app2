import "./login.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useCallback } from "react";
// import { useContext } from "react";
// import { Context } from "../../context/Context";
import {useDispatch, useSelector} from "react-redux";
import { login } from "../../features/user/userSlice";
import { fetchUsers } from "../../features/apiUsers/apiUsersSlice";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [fechedUsers, setFechedUsers] = useState([]);
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const navigate = useNavigate();
  // const loginErrorMsg = "Korisnik nije pronadjen u bazi";
  // const userRef = useRef();
  
  // const { dispatch, isFetching } = useContext(Context);
  const dispatch = useDispatch();
  const apiUser = useSelector((state)=>state.apiUser)
 
  useEffect(() => {
    dispatch(fetchUsers()) 
    
  },[])

  useEffect(()=>{
    if(apiUser.users.length) setFechedUsers(apiUser.users)
  },[apiUser.users])



  
let korisnik = fechedUsers.find(u=>u.username === username && u.password ===password)
  
 console.log(fechedUsers)

  const handleSubmit = (e) => {
    e.preventDefault();    

    
    if(korisnik){
    dispatch(
      login({
        id:korisnik.id,
        username:korisnik.username,
        password:korisnik.password,
        loggedIn:true
      })
    );
      setUsername("")
      setPassword("")
      navigate("/")
    } else {
      setLoginErrorMsg("Korisnik nije pronadjen u bazi")
      setUsername("")
      setPassword("")
    }
   
  };

  

  return (
    <>
    {apiUser.loading && <div>Loading...</div>}
    {!apiUser.loading && username.error? <div>Error: {apiUser.error}</div> : null}
    
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username.."
          required
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password.."
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
     {loginErrorMsg && <span>{loginErrorMsg}</span>}
    </div>
    
    </>
  );
};

export default Login;
