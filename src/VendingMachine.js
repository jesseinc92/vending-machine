import React from 'react';
import { Outlet } from 'react-router-dom';


const VendingMachine = () => {
    return (
        <main className='VendingMachine'>
            <h1>Vending Machine</h1>

            <Outlet />
        </main>
    );
}


export default VendingMachine;