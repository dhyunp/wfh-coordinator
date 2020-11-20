import React, {useState} from 'react'

export default function CreateEvent() {
    const [eventName, seteventName] = useState('')

    const handleChange = (e) => {
        seteventName(e.target.value)
    }

    return (
        <div className='createEvent'>
            <form>
                <label>
                    Event Name:
                    <input type='text' value={eventName} onChange={handleChange}/>
                </label>
                <input type="submit" value="Create Event"></input>
            </form>
        </div>
    )
}
