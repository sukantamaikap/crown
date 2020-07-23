import React from 'react';

import CollectionOverview  from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';

const Shop = ({ collections }) => (
    <div className='shop-page'>
        <CollectionOverview collections={collections}/>
    </div>
);

export default Shop;