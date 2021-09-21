import React from 'react';

function Register(){
    return(

        <div className='container pt-5 d-flex justify-content-center'>
             <form  className="needs-validation w-75 shadow p-5 text-center form-log" novalidate>
                <h3>Register Now</h3>
                <div className="form-group"> 
                <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <div className="form-group mt-5">
                <input type="email" class="form-control" id="mail" placeholder="Enter e-mail" name="mail" required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <div className="form-group mt-5">
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                
                <button type="submit" className="btn btn-warning text-white pr-5 pl-5 mt-5 btn-block">Register</button>
            </form>
        </div>

    );

}

export default Register;