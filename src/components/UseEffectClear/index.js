import { useState, useEffect } from "react"; 

const UseEffectClear = () => {

    const [count, setCount] = useState (0); 
    const increment = () => setCount (count +1); 

    useEffect (() => {
        const timer = window.setInterval(() => {
            console.log ('hello')
            increment()
        }, 5000)

        // fonction de retour pour nettoyer (effacer des traitements faits dans le hook, dans l'appel précédent)
        return function () {
            clearInterval(timer)
        }
    }, [count])

    return (

        <button onClick={increment}>Incrémente moi {count} </button>

    )
}

export default UseEffectClear; 