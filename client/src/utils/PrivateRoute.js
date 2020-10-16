import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => {
    // const Component = component
    // const token = window.localStorage.getItem('token')
    return(
        <Route {...rest} render ={(props) =>
            
            localStorage.getItem('token') ? (<Component {...props} />) :( <Redirect to="/" /> ) 
            // if(token) {
            //     console.log("token true")
            //     //return component
            //     return <Component {...props}/>
            // } else {
            //     console.log("token false")
            //     //redirect to /login
            //     return <Redirect to="/" />
            // }
        }/>
        
    )
}

export default PrivateRoute