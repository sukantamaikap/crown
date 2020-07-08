import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartItemCount = createSelector([selectCartItems], 
    cartItems => 
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0 )
    );

export const selectIsCartHidden = createSelector(
    [selectCart], 
    cart => cart.hidden
    );

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0 )
);