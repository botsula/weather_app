
import weatherApiKey from '../keys/api_keys';

const Button = (props) => {
    
    const handleClick = () => {
        console.log(props.city, weatherApiKey);

        if (props.city !== ''){
            props.onButton();
        }
      };


    return (
        <button className="search-button" onClick={handleClick}>
        Search
      </button>
    );
};

export default Button;