
import weatherApiKey from '../keys/api_keys';

const Button = (props) => {
    
    const handleClick = () => {
        console.log(props.city, weatherApiKey);
        props.onButton({text: 'hiiiiiii'});
      };


    return (
        <button onClick={handleClick}>
        Click me
      </button>
    );
};

export default Button;