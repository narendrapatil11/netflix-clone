import { db } from "../../firebase";
import { loadStripe } from "@stripe/stripe-js/pure";

async function subscribePlan(uid, priceId) {
  const docRef = await db
    .collection('customers')
    .doc(uid)
    .collection('checkout_sessions')
    .add({
      price: priceId, // One-time price created in Stripe
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

  // Wait for the CheckoutSession to get attached by the extension
  docRef.onSnapshot((snap) => {
    const { error, url } = snap.data();
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${ error.message }`);
    }
    if (url) {
      // We have a Stripe Checkout URL, let's redirect.
      window.location.assign(url);
      loadStripe("pk_test_51KzcuzSDfAhllOh0WEi50qTEnSOGTdKsdfJT9ZcA0u5MgGXwxR0FV9d38AtAWbQJoyFVv0GjzUqMEebyOia55DuF00JGOl3F1a")
        .then((ss) => {
          ss.redirectToCheckout(url);
        })
    }
  });
}

export default subscribePlan;