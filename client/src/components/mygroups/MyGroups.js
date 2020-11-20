import React from 'react'

export default function MyGroups() {

    const groupList = 
    <ul>
        {["Group 1", "Group 2", "Group 3"].map( (e,i) => (
            <li>{e}</li>
        ))}
    </ul>

    return (
        <div>
            {groupList}
        </div>
    )
}
