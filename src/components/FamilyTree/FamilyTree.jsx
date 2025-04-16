import React from 'react';
import Grandpa from './Grandpa';
import Dad from './Dad';
import Uncle from './Uncle';

const FamilyTree = () => {
    return (
        <div className='family-tree'>
            <h3>Family Tree</h3>
            <Grandpa></Grandpa>
            
        </div>
    );
};

export default FamilyTree;