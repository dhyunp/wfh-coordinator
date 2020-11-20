import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo-button'>
                <Link to='/'><h1>WorkFromHome<br/>Coordinator</h1></Link>
            </div>
            <div className='menu-buttons'>
                <Link to='/mygroups'><h2>My Groups</h2></Link>
                <Link to='/creategroup'><h2>Create Group</h2></Link>
                <Link to='/createevent'><h2>Create Event</h2></Link>
            </div>
        </div>
    )
}
