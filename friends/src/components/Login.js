import React from 'react';
import axios from 'axios';

import '../style/Login.css'


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

  

    isLoading = e => {
        e.preventDefault();
        axios.post("localhost:5000/api/login", this.state.credentials).
        then(res => {
            localStorage.setItem("token", res.data.payload);
        })
        .catch(err => console.log(err));
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
    render() {
        return (
            <div>
                <form
                className="login-form"
                onSubmit={this.isLoading}
                >
                    
                    <input className="user-name"
                    type="text" 
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <input className="pass-word"
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button className="buttonloading">
                        <i className="fa fa-refresh fa-spin"></i>Loading
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;