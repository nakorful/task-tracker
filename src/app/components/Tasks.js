import PropTypes from 'prop-types';
import Task from "./Task";

function Tasks({ payload, deleteTask, toggleReminder }) {

    const tasks = payload.map(task => {
        const { id } = task;

        return (
            <Task key={id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
        )
    })

    return (
        <>
            { tasks }
        </>
    )
}

Tasks.propTypes = {
    payload: PropTypes.array.isRequired,
    deleteTask: PropTypes.func,
    toggleReminder: PropTypes.func
}

export default Tasks