import React, {useState} from 'react'

export default function CreageGroup() {
    const [eventName, seteventName] = useState('')

    const handleChange = (e) => {
        seteventName(e.target.value)
    }

    return (
        <div className='createGroup'>
            <form>
                <label>
                    Group Name:
                    <input type='text' value={eventName} onChange={handleChange}/>
                </label>
                <input type="submit" value="Create Group"></input>
            </form>
        </div>
    )
}