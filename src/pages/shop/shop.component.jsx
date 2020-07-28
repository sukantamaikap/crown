import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollectionOverview  from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';

const Shop = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        {/* :categoryId lets you dynamically set the route. Whatever you typle after 
        match.path will be assigned to :categoryId. To pass it on to the child access 
        it as: match.params.categoryId */}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);

export default Shop;