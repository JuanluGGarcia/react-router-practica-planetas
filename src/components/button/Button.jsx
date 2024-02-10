import { useState } from "react";
import { StyledButton } from "./style";


const Button = ({ backgroundColor, activeButton, setActiveButton }) => {

    const [activeButton, setActiveButton] = useState(0);
    return (
        <StyledButton onClick={() => handleButton()}
        
        ></StyledButton>
    )
};

export default Button;