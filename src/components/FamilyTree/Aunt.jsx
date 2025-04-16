import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt is here</h3>
            <section className='flex'>
               <Cousin name="Tom Tom"></Cousin>
               <Cousin asset={asset} name="jojo wi"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;