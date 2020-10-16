import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => {
    // const Component = component
    const token = window.localStorage.getItem('token')
    return(
        <Route {...rest} render ={(props)=>{
            if(token) {
                //return component
                return <Component {...props}/>
            } else {
                //redirect to /login
                return <Redirect to="/" />
            }
        }}/>
        
    )
}

export default PrivateRoute