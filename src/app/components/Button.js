import PropTypes from 'prop-types';

function Button({ color, text, handleClick }) {
    return (
        <button className='btn'
                style={{background: color}}
                onClick={handleClick}>
            {text}
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    color: '#000',
    text: 'Hello'
}

export default Button
