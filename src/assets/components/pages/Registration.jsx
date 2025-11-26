 import React, { useState } from 'react'

const Registration = ({regData}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getData = (e) => {
        e.preventDefault();
        alert("Hii " + name + " Your Email is " + email + " Your Password is " + password);
        const data = {
            name,
            email,
            password
        }
        regData(data);
    }
    
    return (
      <>
        <div>Registration</div>
        <form>
          <div class="mb-3">
            <label for="exampleInputName1" class="form-label">
              Name
            </label>
                    <input
                        onChange={(e)=>setName(e.target.value)}
              type="text"
              class="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
            />
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
                    <input
                    onChange={(e)=>setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
                    <input
                        onChange={(e)=>setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button onClick={getData} type="button" class="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
}

export default Registration