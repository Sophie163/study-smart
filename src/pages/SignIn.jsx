import React from 'react';
import { Button } from 'react-bootstrap';

function SignIn() {     
    return (     
        <>
        <div class="container my-5"></div>
        <div class="container my-4 p-4">
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-4 bg-black m-0 p-0">
                    <img src={require('../assets/students.jpg')} width="100%"/>
                </div>
                <div class="col-sm-4 bg-white p-4">
                <form action="/action_page.php">
                    <div class="m-4 text-start">
                        <label for="username" class="form-label px-2 my-0"><h4>Username:</h4></label>
                        <input type="username" class="form-control" id="username" placeholder="Enter username" name="username"/>
                    </div>
                    <div class="m-4 text-start pb-2">
                        <label for="pwd" class="form-label px-2 my-0"><h4>Password:</h4></label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                    </div>
                    <button type="submit" class="custom-primary"><a class="nav-link" href="/Home">Submit</a></button>
                    </form>
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>
        </>    
    ); 
} 

export default SignIn;