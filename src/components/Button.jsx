import classNames from 'classnames';

const Button = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={classNames('button', className)}>
             {children}
        </button>
    );
};

export default Button;