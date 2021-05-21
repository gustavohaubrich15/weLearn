import React from 'react';
import {Switch,Route, Redirect } from 'react-router-dom'
import {HomeScreen, LoginScreen} from '../pages/index'

export const  Routes : React.FC = () => {

return (
     <Switch>
        <Route path={'/'} component={LoginScreen} exact/>
        <Route path={'/home'} component={HomeScreen} exact/>
        <Route path={'*'} component={() =>  <Redirect to='/'/> } />
    </Switch>
)}