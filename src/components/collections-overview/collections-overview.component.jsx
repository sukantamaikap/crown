import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsPreview } from '../../redux/shop/shop.selector'
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collectons-overview'>
    {
        collections.map(({id, ...collectionProps}) => (
             <CollectionPreview key={id} {...collectionProps} />
            ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);