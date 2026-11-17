import { useState } from "react"


function ButtonMsg(){
    const [imie, setImie] = useState(localStorage.getItem('imie') || '')

    function UstawImie(){
        const noweImie = prompt("Jak masz na imię");
        setImie(noweImie);
        localStorage.setItem('imie', noweImie);
    }
    
    return(
        <>
            <h3>Witaj ponownie, {imie}!</h3>
            <br></br>
            <button className='btn btn-primary' onClick={UstawImie}>Przedstaw się</button>
        
        </>


    )

}

export default ButtonMsg
