import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import ProductsList from './ProductsList';


const Layout = () => {

    const date = new Date().getFullYear()
    const { cart } = useContext(CartContext)


    return (
        <>
            <header className='header'>
                <h1 className="text-center mt-3 mb-4">AppMenu</h1>
            </header>
            <main>
                <ProductsList />
            </main>
            <footer className='footer mb-3'>
                <div>Products agregados: </div>
                <span>
                    MenuApp. Todos los derechos reservados, {date}.
                </span>
            </footer>
        </>
    );
};

export default Layout;
