import { useState } from 'react';
import PropTypes from 'prop-types';

function AddTask({ addTask }) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add a Task');

            return;
        }

        addTask({text, day, reminder});
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Add Task' value={text}
                       onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder='Add Day & Time'
                       value={day}
                       onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox"
                       checked={reminder}
                       value={reminder}
                       onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value='Save Task' className='btn btn-block'/>
        </form>
    )
}

AddTask.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default AddTask