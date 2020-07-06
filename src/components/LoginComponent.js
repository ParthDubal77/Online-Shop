import React from "react";

function Login() {
    return (
        <div>
            <div class="bgImage">
                <div class="overlay">
                    <div id="particles-js"></div>
                    <div class="container" >
                        <div class="d-flex justify-content-center h-100">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Sign In</h3>
                                </div>
                                <div class="card-body">
                                    <form >
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                            </div>
                                            <input type="text" name="email" class="form-control" placeholder="Email" required email />
                                        </div>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-key"></i></span>
                                            </div>
                                            <input type="password" name="password" class="form-control" placeholder="password" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="Login" class="btn float-right login_btn" />
                                        </div>
                                        <div class="card-footer">
                                            <div class="d-flex justify-content-center links">
                                                Don't have an account? <a href="/signup">Sign Up</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;