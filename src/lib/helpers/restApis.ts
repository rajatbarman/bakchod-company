import fetchJSON from '$lib/helpers/fetchJSON.js';

export function getReceivedAmount() {
  return fetchJSON('https://855abye49e.execute-api.ap-south-1.amazonaws.com/received-amount');
}

export function createPaymentLink({ amount }) {
  return fetchJSON('https://855abye49e.execute-api.ap-south-1.amazonaws.com/payment-link', {
    method: 'POST',
    body: {
      amount
    }
  });
}

export function getPayments() {
  return fetchJSON('https://855abye49e.execute-api.ap-south-1.amazonaws.com/payments');
}
