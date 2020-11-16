import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './Main.css'

import Mainview from './mainview/Mainview'
import Sidebar from './sidebar/Sidebar'
import CreateGroup from './create/CreateGroup'
import CreateEvent from './create/CreateEvent'
import MyGroups from './mygroups/MyGroups'


export default function Main() {
    return (
        <div className='main_cont'>

            <div className='left_cont'>
                <Sidebar/>
            </div>
            
            <div className='right_cont'>
                <Switch>
                    <Route exact path='/'>
                        <Mainview/>
                    </Route>
                    <Route path='/mygroups'>
                        <MyGroups/>
                    </Route>
                    <Route path='/creategroup'>
                        <CreateGroup/>
                    </Route>
                    <Route path='/createevent'>
                        <CreateEvent/>
                    </Route>
                    {/* 
                    TODO: create this stuff
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/logout'>
                        <Logout/>
                    </Route> 
                    */}
                </Switch>
            </div>
        </div>
    )
}
