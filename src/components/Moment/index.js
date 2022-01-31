import React, {useState} from "react";

const Moment = () => {

    const [isHappy, setIsHappy] = useState(true); 
    const toggleIsHappy= () => setIsHappy(!isHappy); 

    return (
        <div>
            <h2> conditionnal</h2>
            <button onClick={toggleIsHappy}>
            {isHappy ? 'Je suis content' : 'Je ne suis pas content' }
            </button>
            {isHappy && (<h3>coucou</h3>)}
        </div>
    );
}
export default Moment; 