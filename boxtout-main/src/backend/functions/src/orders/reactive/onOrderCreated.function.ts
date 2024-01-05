import * as functions from 'firebase-functions';

exports.onOrderCreated = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snapshot, context) => {
    console.log(`Order created | orderId:${snapshot.id}`);
  });
