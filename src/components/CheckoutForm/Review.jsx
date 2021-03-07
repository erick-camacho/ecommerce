import { Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Review = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>Order Summary</Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map(product => (
          <ListItem style={{ padding: '10px 0'}} key={product.name}>
            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
            <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
      <Divider/>
      <Elements stripe={stripePromise}>
        <PaymentForm checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout}/>
      </Elements>
    </>
  );
}
 
export default Review;