import React from 'react'
import { Formik } from 'formik';
import Swal from 'sweetalert2';



const Login = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are now logged in",
      });
      res.json().then((data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
      });
    } else if (res.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Something went wrong",
      });
    }
  };
  return (
    <div>
      <h3></h3>
      <Formik initialValues={{ name:'',email : '',password :'', age : 0}}
      onSubmit={userSubmit}>
        {({values, handleChange, handleSubmit})  => (
          <form onSubmit={handleSubmit}>

            
          <label>Email</label>
          <input value={values.email} id="email" onChange={handleChange} className= 'form-control mb-3 ' />
      
          <label>Password</label>
          <input value={values.password} id="password" onChange={handleChange} type = "password" className='form-control mb-3' />
      
          <button type='submit' className='btn btn-primary mt-5'>Submit</button>
      
          </form>

        )}
        
      </Formik>
    </div>
  )
}

export default Login