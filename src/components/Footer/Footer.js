import { useState } from "react";

const MyForm = () => {
    const [input, setInput] = useState("");
    
    const emailIsValid = (e) => {
        e.preventDefault();
        let regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (regEx.test(input)) {
            setInput("");
        } else {
            alert("Invalid email address");
        }
    
    };
    
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    
    return (
        <div>
            <form onBlur={emailIsValid}>
                <input
                type="mail"
                value={input}
                onChange={handleChange}
                placeholder="Entrez votre email"
                />
            </form>
        </div>
    );
};

export default MyForm;