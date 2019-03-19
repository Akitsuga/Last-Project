import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {onLogoutUser} from '../actions'

class Header extends Component {

    render () {        
        const {user} = this.props
        if(user.username === ""){ 
            return (
                <nav className="navbar navbar-expand-sm navbar-light bg-secondary mb-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Ganeptune</Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                            <ul className="navbar-nav ml-auto col-12 col-md-5">
                                <li className="nav-item mt-1">
                                    <Link className="nav-a btn btn-info" to="/" >All Product</Link>
                                </li>
                                <li className="nav-item m-1">
                                    <Link className="nav-a" to="/register"><button className="btn btn-primary">Register</button></Link>
                                </li>
                                <li className="nav-item m-1">
                                    <Link className="nav-a" to="/login"><button className="btn btn-success">Login</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        } else {
            return (
                <div>
                <nav className="navbar sticky-top navbar-expand-md navbar-light bg-secondary mb-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Ganeptune, Welcome {user.username}</Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                            <ul className="navbar-nav ml-auto col-12 col-md-5">
                                <li className="nav-item mt-2">
                                    <Link className="nav-link" to="/">All Product</Link>
                                </li>
                                <li className="nav-item dropdown mt-2">
                                    <Link to="/asd" className="nav-link dropdown-toggle" data-toggle="dropdown">Option</Link>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item">Link1</Link>
                                        <Link to="/" className="dropdown-item">Link2</Link>
                                        <button onClick={this.props.onLogoutUser} className="dropdown-item">
                                            <Link to="/">Logout</Link></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            )
        }
         
    }
}

const mapStateToProps = state => {
    return {user: state.auth}
}

export default connect (mapStateToProps,{onLogoutUser})(Header)