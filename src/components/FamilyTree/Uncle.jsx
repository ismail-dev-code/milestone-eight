import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle is here</h3>
            <section className='flex'>
              <Cousin name='rafan'></Cousin>
              <Cousin name='jaid'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;