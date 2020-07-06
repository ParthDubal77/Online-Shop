import React from "react";

function Signup() {
    return (
        <div>
            <div class="bgImage">
                <div class="overlay">
                    <div id="particles-js"></div>
                    <div class="container" >
                        <div class="d-flex justify-content-center h-100">
                            <div class="card ">
                                <div class="card-header">
                                    <h3>Sign Up</h3>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-user"></i></span>
                                            </div>
                                            <input type="text" name="username" class="form-control" placeholder="UserName"  required minlength="10" pattern="^[a-zA-Z0-9\_]+" />
                                        </div>

                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                                            </div>
                                            <input type="email" name="email" class="form-control" placeholder="Email" required email />
                                        </div>

                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-key"></i></span>
                                            </div>
                                            <input type="password" name="password" class="form-control" placeholder="password" required minlength="6" />
                                        </div>

                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-key"></i></span>
                                            </div>
                                            <input type="password" name="passwordConfirm" class="form-control" placeholder="Confirm Password" required minlength="6" />
                                        </div>

                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-phone"></i></span>
                                            </div>
                                            <input type="text" name="phone" class="form-control" placeholder="phone Number" required minlength="11" maxlength="11" pattern="^[0-9]+[0-9]*" />
                                        </div>

                                        <div class="form-group">
                                            <input type="submit" value="Sign Up" class="btn float-right login_btn" />
                                        </div>

                                        <div class="card-footer">
                                            <div class="d-flex justify-content-center links">
                                                Do have an account? <a href="/login">Sign In</a>
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
export default Signup;