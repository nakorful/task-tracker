import PropTypes from 'prop-types';
import Button from "./Button";

function Header({ title, showAddTask, showAdd }) {
    const handleClick = () => {
        showAddTask();
    }

    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}
            handleClick={handleClick} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    showAddTask: PropTypes.func.isRequired,
    showAdd: PropTypes.bool
}

Header.defaultProps = {
    title: 'Task Tracker'
}
export default Header
