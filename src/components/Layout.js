import React from 'react';
import { CartContextProvider } from '../context/cartContext';
import ProductsList from './ProductsList';


const Layout = () => {

    const date = new Date().getFullYear()

    return (
        <>
            <header className='header'>
                <h1 className="text-center mt-3 mb-4">AppMenu</h1>
            </header>
            <main>
                <CartContextProvider>
                    <ProductsList />
                </CartContextProvider>
            </main>
            <footer className='footer mb-3'>
                <span>
                    MenuApp. Todos los derechos reservados, {date}.
                </span>
            </footer>
        </>
    );
};

export default Layout;
