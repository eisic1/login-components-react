import './loginForm.css'

function LoginForm(){

    return(<div className="container-login">
        <div className="wrap-login">
            <div className="login-form-title">
                <span className="title">Sign In</span>
            </div>
            <form className="login-form">
                <div className="wrap-input">
                    <span className="label-input">Username</span>
                    <input type="text" name="username" placeholder="Enter username" required />
                    <span className="focus-input"></span>
                </div>
                <div className="wrap-input">
                    <span className="label-input">Password</span>
                    <input type="password" name="password" placeholder="Enter password" required />
                    <span className="focus-input"></span>
                </div>
                <div className="remember-forgot">
                    <div className="form-checkbox">
                        <input type="checkbox" name="remember-me" id="ckb1" />
                        <label className="label-checkbox">Remember me</label>
                    </div>
                    <div>
                        <a href="#" className="txt1"> Forgot Password? </a>
                    </div>
                </div>
                <div className="login-form-btn">
                    <button className="btn">Login</button>
                </div>
            </form>
        </div>
    </div>);
}

export default LoginForm