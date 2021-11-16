
import { Component } from "react";
import logo from '../../assets/movieBuffs.png';
import LoginSignUpHeader from "../LoginSignUp-Header";
import "./index.css"

class LoginPage extends Component{

    state={
        username:'',
        password:''
    }

    onClickSignUp = ()=>{
        const {history} = this.props;
        history.replace('/signup');
    }

    onClickLogin = ()=>{
        const {history} = this.props;
        history.replace('/login');
    }

    onClickSubmitButton = (event)=>{
        event.preventDefault()
        alert(
            <button>Login</button>
        )
    }
    onChangeUserName = (event)=>{
        this.setState({username:event.target.value})
    }

    onChangePassword = (event)=>{
        this.setState({password:event.target.value})
    }

    render(){
        const {username,password} = this.state;
        const userDetails = {username,password}
        console.log(userDetails)
        return(
            <div className="login_page_container">
                <div className="login_page_subcontainer">
                    <div className="welcome_container">
                        <img className="logo_image" src={logo}/>
                        <h1>
                        <span className="logo_title_1">M</span>
                        <span className="logo_title_2">o</span>
                        <span className="logo_title_3">v</span>
                        <span className="logo_title_4">i</span>
                        <span className="logo_title_5">e</span>
                        <span className="logo_title_6">B</span>
                        <span className="logo_title_7">u</span>
                        <span className="logo_title_8">f</span>
                        <span className="logo_title_9">f</span>
                        <span className="logo_title_10">s</span></h1>
                        <p className="welcome_para"> You are just 30 sec away from watching your favourite movies</p>
                        <button className="signup_button" onClick={this.onClickSignUp}>Sign Up</button>
                        <button className="login_button" onClick={this.onClickLogin}>Login</button>
                    </div>
                    <div className="login_page_content_container1">
                        <form className="form_container" onSubmit={this.onClickSubmitButton}>
                            <h1 className="Login_heading"> 
                            <span className="logo_title_1">L</span>
                            <span className="logo_title_2">O</span>
                            <span className="logo_title_3">G</span>
                            <span className="logo_title_4">I</span>
                            <span className="logo_title_5">N</span>
                            </h1>
                            {/**Login input username  */}
                            <div className="form-group">
                                <label className="label_name">USERNAME</label>
                                <input type="text" className="form-control" placeholder="Enter your username" required
                                onChange={this.onChangeUserName} value={username}/>
                            </div>

                            {/* Login Password input container */}
                            <div className="form-group">
                                <label className="label_name">PASSWORD</label>
                                <input type="password" className="form-control" placeholder="Enter password" required
                                onChange={this.onChangePassword} value={password}/>
                            </div>
                            {/** Submit Button  */}
                            <button type="submit" className="btn btn-primary btn-block submit_button">
                                Login
                            </button>     

                            {/** sign up button  */}
                            <p className="create_account_para"> Create Your Account Here !
                            <button type="button" className="signup_button_bottom" onClick={this.onClickSignUp}> Sign Up </button> </p>
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}

export default LoginPage