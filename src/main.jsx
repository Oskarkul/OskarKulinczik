import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const gry = [
    ["Minecraft", "Gra survivalowa w otwartym świecie."],
    ["Cyberpunk 2077", "RPG w klimacie sci-fi."],
    ["Undertale", "RPG, gdzie przyjaźń zwycięża walki."],
    ["GTA V", "Gra kryminalna w otwartym świecie."],
    ["Red Dead Redemption 2", "Westernowa gra przygodowa."],
    ["Metal Gear Rising: Revengence", "slasher gdzie jesteś cyborgiem"],
    ["Fortnite", "Battle Royal, w którym budujesz podczas strzelania"]
];



createRoot(document.getElementById('root')).render(


    <App gry={gry}/>

)
