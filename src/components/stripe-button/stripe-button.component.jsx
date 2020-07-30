import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment successful!!');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HAZeiK9Erb3qmaOWkIFxo55G6UmFg0RXmp6QI6cxq0pyqx1iUppOuqLrUCKSnplxvWjbaiwqYVtrI21YxFzkWSj00TKj0PXsB';

    return (
        <StripeCheckout 
            label= 'Pay Now'
            name= 'CRWN Pay'
            billingAddress
            shippingAddress
            image= ''
            description= {`Your total is $${price}`}
            amount={ priceForStripe }
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
        />
    );
}


export default StripeCheckoutButton;