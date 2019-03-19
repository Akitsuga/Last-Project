import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {onRegClick} from '../actions'

class Register extends Component {
    onRegisterError = () => {
        if(this.props.error !== "") {
            return (
                <div className="alert alert-danger mt-4" >
                    {this.props.error}
                </div>
            )
        } else if (this.props.success !== "") { 
            return (
                <div className='alert alert-success mt-4'>
                    {this.props.success}
                </div>
            )
        } else {
            return null
        }
    }

    onSubmitClick = () => {
        const user = this.username.value
        const pass = this.password.value
        this.props.onRegClick(user,pass)
    }


    render () {
        return (
            <div>
                <div className="mt-5 row">
                    <div className="col-sm-3 mx-auto card bg-secondary">
                        <div className="card-body">
                            <div className="border-bottom border-dark card-title">
                                <h1>Register</h1>
                            </div>
                            <div className="card-title mt-1">
                                <h4>Username</h4>
                            </div>
                            <form className="input-group">
                                <input ref={input => {this.username = input}} className="form-control" type="text" placeholder="Username Baru" />
                            </form>
                            <div className="card-title mt-1">
                                <h4>Password</h4>
                            </div>
                            <form className="input-group">
                                <input ref={input => {this.password = input}} className="form-control" type="password" placeholder="Password" />
                            </form>
                            <button className="btn btn-info btn-block mt-5" 
                                onClick={this.onSubmitClick}>Register Now</button>
                                {this.onRegisterError()}
                            <p className="lead">Already have account ? <Link to="/Login" className="text-warning">Sign in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {error: state.auth.error, success: state.auth.success}
}

export default connect(mapStateToProps, {onRegClick})(Register)