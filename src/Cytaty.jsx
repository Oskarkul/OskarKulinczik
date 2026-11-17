

function Cytaty(){

    const cytaty = [
        "Fun fact: Creeper powstał przez przypadek!",   
        "Najlepszy build w grze zależy tylko od Ciebie.",   
        "Gry to świetny sposób na rozwój kreatywności.",
        "W 2011 roku Donald tusk wręczył podarunek Barackowi Obamie w postaci Gry Wiedźmin 2: Zabójcy królów w edycji kolekcjonerskiej",
        "W grach drużynowych zwycięża praca zespołu, a nie jednej osoby",
        "Pac-Man pierwotnie miał nazywać się Puck-Man.",
        "Minecraft początkowo nosił nazwę Cave Game.",
        "W GTA V można przełączać się między trzema głównymi bohaterami.",
        "Pierwsza konsola PlayStation miała premierę w 1994 roku.",
        "W Wiedźminie 3 można spędzić setki godzin, nie wykonując głównego wątku fabularnego.",
        "Dark Souls zasłynęło z wysokiego poziomu trudności.",
        "Nie każda gra potrzebuje świetnej grafiki, żeby być niezapomniana.",
        "Czasami najlepszą strategią jest po prostu nauczyć się na własnych błędach.",
        "Achievementy istnieją po to, żebyś miał kolejny powód do grania!",
        "GG oznacza Good Game i jest popularnym zwrotem używanym po zakończeniu rozgrywki."
    ];


    const RandomCytat = Math.floor(Math.random()*15)

    return(
        <>
           <h2>{cytaty[RandomCytat]}</h2> 
            
        </>
    )
}

export default Cytaty