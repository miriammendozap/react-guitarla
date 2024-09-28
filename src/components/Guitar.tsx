import type { Libreria } from '../types'

type LibreriaProps = {
    libreria : Libreria, 
    addToCart : (item: Libreria) => void
}

export default function Guitar({libreria, addToCart} : LibreriaProps) {

    const { name, image, description, price } = libreria

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.png`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">S/{price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(libreria)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
