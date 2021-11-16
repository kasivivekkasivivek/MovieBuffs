
import { Component } from "react";
import logo from '../../assets/movieBuffs.png';
import "./signup.css"

// password validator 
var passwordValidator = require('password-validator');
class SignUP extends Component{

    state={
        firstName:'',
        lastname:'',
        username:'',
        emailId:'',
        password:'',
        question:'What is your Pet Name?',
        answer:'',
        errorMessage:''
    }

    onClickSubmit = (event)=>{
        event.preventDefault();
        alert("hello")
    }

    onClickSignUp = ()=>{
        const {history} = this.props;
        history.replace('/signup');
    }

    onClickLogin = ()=>{
        const {history} = this.props;
        history.replace('/login');
    }

    // store the values into state from user input 
    onChangeFirstName = (event)=>{
        this.setState({firstName:event.target.value})
    }

    onChangeLastName = (event)=>{
        this.setState({lastname:event.target.value})
    }

    onChangeUserName = (event)=>{
        this.setState({username:event.target.value})
    }

    onChangeEmailId = (event)=>{
        this.setState({emailId:event.target.value})
    }

    onChangePassword = (event)=>{
        this.setState({password:event.target.value})
    }

    onChangeQuestion = (event)=>{
        this.setState({question:event.target.value})
    }

    OnChangeAnswer = (event)=>{
        this.setState({answer:event.target.value})
    }

    render(){
        const {firstName,lastname,username,emailId,password,question,answer,errorMessage}=this.state
        const userDetails = {firstName,lastname,emailId,username,password,question,answer,errorMessage}
        console.log(userDetails)
        return(
            <div className="login_page_container">
                <div className="login_page_subcontainer">
                    <div className="welcome_container1">
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
                        <p className="welcome_para"> You are just 1 Minute away from watching your favourite movies</p>
                        <button className="signup_button" onClick={this.onClickSignUp}>Sign Up</button>
                        <button className="login_button" onClick={this.onClickLogin}>Login</button>
                    </div>
                    <div className="login_page_content_container">
                        <form className="form_container" onSubmit={this.onClickSubmit}>
                            <h1 className="Login_heading"> 
                            <span className="logo_title_1">S</span>
                            <span className="logo_title_2">I</span>
                            <span className="logo_title_3">G</span>
                            <span className="logo_title_4">N</span>
                            <span className="logo_title_">-</span>
                            <span className="logo_title_5">U</span>
                            <span className="logo_title_6">P</span>
                            </h1>
                            {/**first name  */}
                            <div className="form-group">
                                <label className="label_name">FIRST NAME</label>
                                <input type="text" className="form-control" placeholder="Enter your First" value={firstName}
                                required onChange={this.onChangeFirstName}/>
                            </div>

                            {/** Enter your last name  */}
                            <div className="form-group">
                                <label className="label_name">LAST NAME</label>
                                <input type="text" className="form-control" placeholder="Enter your Lastname" required
                                onChange={this.onChangeLastName} value={lastname}/>
                            </div>

                            {/**Login input username  */}
                            <div className="form-group">
                                <label className="label_name">USERNAME</label>
                                <input type="text" className="form-control" placeholder="Enter your username" required
                                onChange={this.onChangeUserName} value={username}/>
                            </div>

                            {/** Email Address */}

                            <div className="form-group">
                                <label className="label_name">Email Id</label>
                                <input type="email" className="form-control" placeholder="Enter your email" required
                                onChange={this.onChangeEmailId} value={emailId}/>
                            </div>


                            {/* Login Password input container */}
                            <div className="form-group">
                                <label className="label_name">PASSWORD</label>
                                <input type="password" className="form-control" placeholder="Enter password" required
                                onChange={this.onChangePassword} value={password}/>
                            </div>

                            <div className="form-group">
                                <label className="label_name"> Security Question </label>
                                    <select className="form-control style_select" defaultValue={question}
                                    onChange={this.onChangeQuestion} required>
                                        <option disabled>Please select your Security Question</option>
                                        <option value="What is your Birthdate?">What is your Birthdate?</option>
                                        <option value="What is Your old Phone Number">What is Your old Phone Number</option>
                                        <option value="What is your Pet Name?">What is your Pet Name?</option>
                                    </select>   
                            </div>

                            <div className="form-group">
                                <label className="label_name">Answer </label>
                                <input type="text" className="form-control" placeholder="Enter Your Answer" 
                                onChange={this.OnChangeAnswer}required/>
                            </div>
                            {/** Submit Button  */}
                            <button type="submit" className="btn btn-primary btn-block submit_button">
                                SignUp
                            </button>     

                            {/*  Error messagfeg text */}
                            {errorMessage===''?<p className="error_message">{errorMessage}</p> : null}
                            {/** sign up button  */}
                            <p className="create_account_para"> Already have Your Account ?
                            <button type="button" className="signup_button_bottom" onClick={this.onClickLogin}> Login </button> </p>
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}

export default SignUP