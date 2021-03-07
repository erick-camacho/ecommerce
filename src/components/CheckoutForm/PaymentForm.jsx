import { Typography, Button } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  const stripe = useStripe();
  const elements = useElements();
  console.log(shippingData);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ 
      type: 'card', 
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { 
          firstname: shippingData.firstName, 
          lastname: shippingData.lastName, 
          email: shippingData.email 
        },
        shipping: { 
          name: "International", 
          street: shippingData.address1, 
          town_city: shippingData.city, 
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry
        },
        fulfillment: { 
          shipping_method: shippingData.shippingOption 
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      console.log(orderData);
      onCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
        <form onSubmit={handleSubmit}>
          <CardElement/>
          <br/><br/>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button variant='outlined' onClick={backStep}>Back</Button>
            <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
              Pay {checkoutToken.live.subtotal.formatted_with_symbol}
            </Button>
          </div>
        </form>
    </>
  );
}
 
export default PaymentForm;