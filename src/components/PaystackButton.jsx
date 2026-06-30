
import Button from './Button';

/**
 * A component that renders a button to trigger the Paystack payment popup.
 */
export default function PaystackButton({
  email = '',
  amount = 0,
  reference,
  disabled = false,
  onSuccess,
  onClose,
  children = 'Pay Now',
}) {
  const handlePay = () => {
    if (disabled || amount <= 0) return;

    const paystackKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
    if (!paystackKey) {
      console.error('Paystack public key is not set. Please set VITE_PAYSTACK_PUBLIC_KEY in your .env file.');
      alert('Payment service is currently unavailable. Please contact support.');
      return;
    }

    if (!window.PaystackPop) {
      alert('Payment gateway is not available. Please check your internet connection and try again.');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: paystackKey,
      email,
      amount: Math.round(amount) * 100,
      currency: 'NGN',
      ref: reference || ('IFY-' + Date.now()),
      callback: onSuccess || ((response) => console.log('Payment successful:', response)),
      onClose: onClose || (() => console.log('Payment popup closed.')),
    });
    handler.openIframe();
  }

  return <Button onClick={handlePay} disabled={disabled || amount <= 0}>{children}</Button>;
}
