import PropTypes from 'prop-types';

function Task({ task, deleteTask, toggleReminder }) {
    const { id, text, day, reminder } = task;

    return (
        <div className={`task ${reminder ? 'reminder' : ''}`}
             onDoubleClick={() => toggleReminder(id)}>
            <h3>{text}
            <i className="fa fa-times"
               style={{color: 'red'}}
               aria-hidden="true"
               onClick={() => deleteTask(id)}></i>
            </h3>
            <p>{day}</p>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        text: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        reminder: PropTypes.bool
    }),
    deleteTask: PropTypes.func,
    toggleReminder: PropTypes.func
}

Task.defaultProps = {
    task: {
        text: 'Eat Breakfast',
        day: 'Everyday at 9:00am',
        reminder: true
    }
}

export default Task