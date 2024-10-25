import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("")
  const [IsLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit  = async(e)=>{
    e.preventDefault()
    setIsLoading(true);
    setError("")

    const formData = new FormData(e.target);  //this makes an obj capable of accessing target form's input field values
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    
    //console.log(username, email, password);
    try{
      const res = await apiRequest.post("/auth/register",{
      username, email, password}
    )
    //console.log(res.data); - gives user created successfully
    navigate('/login') //after new user registration redirects back to login page
    }catch(err){
      setError(err.response.data.message)
    }finally{
      setIsLoading(false);
    }
    

  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={IsLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;