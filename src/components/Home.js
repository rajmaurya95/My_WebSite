import "../App.css"
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('employee');

  const handleLogin = (e) => {
    e.preventDefault();

    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('User Type:', userType);
  };

  return (
    <div className="container-fluid p-5  row   ">
<div className='col-md-4 offset-md-4  size '>
      <h3 className="text-center text-white" > My_WebSite </h3>
      <div className="card  fg">
        <div className="card-body bgC  ">
          <h2 className="card-title text-center pb-3">LOGIN FORM</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group p-2 iC">
              <label htmlFor="username">Username:</label>
              <div className="input-lg">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              </div>
            </div>
            <div className="form-group iC p-3">
              <label htmlFor="password">Password:</label>
              <div className="input-lg">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              </div>
            </div>
            <div className="form-group p-3 iC"  >
              <label >User Type:</label>
              <div className="form-check form-check-inline mx-2  ">
                <input
                  type="radio"
                  className="form-check-input input-control "
                  id="employee"
                  name="userType"
                  value="employee"
                  checked={userType === 'employee'}
                  onChange={() => setUserType('employee')}
                />
                <label className="form-check-label fs-6 " htmlFor="employee">
                  Employee
                </label>
              </div>
              <div className="form-check form-check-inline fs-6 ">
                <input
                  type="radio"
                  className="form-check-input input-control "
                  id="admin"
                  name="userType"
                  value="admin"
                  checked={userType === 'admin'}
                  onChange={() => setUserType('admin')}
                />
                <label className="form-check-label" htmlFor="admin">
                  Admin
                </label>
              </div>
            </div>
            <div className="d-grid iC  mb-2  gap-2 col-6 mx-auto">
            <button type="submit" className="btn  btn-primary">
              Login
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
