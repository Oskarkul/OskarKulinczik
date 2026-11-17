

function Card({nazwa, opis}){
    return (
        <div className="card m-3">
            <div className="card-body">
                <h2 className="card-title">{nazwa}</h2>
                <p className="card-text">{opis}</p>
            </div>
        </div>
    )
}

export default Card