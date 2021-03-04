import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElements, ElementConsumer } from '@stripe/react-stripe-js';
import { loadStrip } from '@stripe/stripe-js';
import Review from './Review';

const PaymentForm = () => {
  return (
    <>
      <Review/>
    </>
  );
}
 
export default PaymentForm;