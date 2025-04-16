import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset}) => {
    const newAsset = useContext(AssetContext);
    console.log(newAsset);
    return (
        <div>
            <h3>special {name}</h3>
            <h3>asset: {asset}</h3>
            <h3>New asset: {newAsset}</h3>

        </div>
    );
};

export default Special;