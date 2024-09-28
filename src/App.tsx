import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useCart } from './hooks/useCart'

function App() {

  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart()

  return (
    <>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestros productos</h2>

          <div className="row mt-5">
              {data.map((guitar) => (
                  <Guitar 
                    key={guitar.id}
                    libreria={guitar}
                    addToCart={addToCart}
                  />
              ))}
              
          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">LibreriaLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App
