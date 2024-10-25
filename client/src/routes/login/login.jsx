import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("")
  const [IsLoading, setIsLoading] = useState(false)

  const {updateUser} = useContext(AuthContext); //func to update the current user in localstorage when the another user logs in
  const navigate =  useNavigate()

  const handleSubmit  = async(e)=>{
    e.preventDefault()
    setIsLoading(true);
    setError("")
    const formData = new FormData(e.target);  //this makes an obj capable of accessing target form's input field values
    const username = formData.get("username")
    const password = formData.get("password")

    
    //console.log(username, email, password);
    try{
      const res = await apiRequest.post("/auth/login",{
      username, password}
    )
    updateUser(res.data);
    //console.log(res); //- gives user created successfully
    //localStorage.setItem("user", JSON.stringify(res.data))  //storing the user data we got frm server after login, in client-side browser local storage( not needed as we have update func)
    navigate('/')
    }catch(err){
      setError(err.response.data.message)
    }finally{
      setIsLoading(false);
    }
    
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" type="password" required placeholder="Password" />
          <button disabled={IsLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;