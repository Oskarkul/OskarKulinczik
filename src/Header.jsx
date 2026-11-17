import { useEffect, useState } from 'react';
import ButtonMsg from './ButtonMsg.jsx';
import './App.css';
import Cytaty from './Cytaty.jsx';

function Header(){
    const [bgColor, setBgColor] = useState('rgb(255, 255, 255)');

    useEffect(() => {
        const randomColor = 'rgb(' + Math.floor(Math.random() * 256) +', '+ Math.floor(Math.random() * 256) + ', '+ Math.floor(Math.random() * 256) + ')';
        setBgColor(randomColor);
    },[]);

    return(
    <div className='Baner' style={{backgroundColor: bgColor, textAlign: 'center'}}>
        <h1>Portal o grach komputerowych</h1>
        <ButtonMsg/>
        <Cytaty/>
    </div>
)
}


export default Header