import React from 'react';
import { PayPalScriptProvider, PayPalButtons, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';

const PayPalButtonComponent: React.FC = () => {
  const initialOptions: ReactPayPalScriptOptions = {
    currency: 'EUR',
    intent: 'capture',
    clientId: 'AeSawgGZ-7GqEETxE6wZRLL9au4jEFMvMnR_WIFVQB2NQ5ssaV401mMBGlCQ2kqsyoca-OWwyOJMFZ2w'
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(_data, actions) => {
          if (!actions.order) {
            throw new Error('Order action is undefined');
          }
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'EUR',
                value: '10.00'
              }
            }],
            intent: 'CAPTURE'
          });
        }}
        onApprove={(_data, actions) => {
          if (!actions.order) {
            throw new Error('Order action is undefined');
          }
          return actions.order.capture().then((details) => {
            if (!details.payer || !details.payer.name) {
              throw new Error('Payer details are undefined');
            }
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Call your server to save the transaction
          });
        }}
        onError={(err) => {
          console.error("PayPal Checkout onError", err);
          // Handle error scenario
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButtonComponent;
