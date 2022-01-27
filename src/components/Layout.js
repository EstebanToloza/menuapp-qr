import React from 'react';
import ProductsList from './ProductsList';

const Layout = () => {

    const date = new Date().getFullYear()

    return (
        <>
            <header className='header'>
                <h1 className="text-center mt-3 mb-4">AppMenu</h1>
            </header>
            <main>
                <ProductsList />
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
