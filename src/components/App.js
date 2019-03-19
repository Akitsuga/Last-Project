import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import cookies from 'universal-cookie'

import {keepLogin} from '../actions'

import Home from './Home'
import Header from './Header'
import Login from './Login'
import Register from './Register'

const cookie = new cookies()

class App extends Component {

    componentDidMount(){
        var userCookie = cookie.get('masihLogin')
        if(userCookie !== undefined){
            console.log("cookie ada");
            this.props.keepLogin(userCookie)       
        }
    }

    render () {
        return (                
                <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={Home}/> 
                    <Route path="/login" component={Login}/> 
                    <Route path="/register" component={Register}/> 
                </div>
                </BrowserRouter>
        )
    }
}

export default connect (null,{keepLogin})(App)