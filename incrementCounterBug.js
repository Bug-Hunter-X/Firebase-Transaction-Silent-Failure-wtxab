function incrementCounter(userId) {
  const userRef = db.ref('users/' + userId);

  userRef.transaction(function(currentData) {
    if (currentData === null) {
      return { counter: 1 };
    }
    return { counter: currentData.counter + 1 };
  }).then(function(successTransaction) {
    console.log('Counter incremented successfully:', successTransaction.committed);
  }).catch(function(error) {
    console.error('Counter increment failed:', error);
  });
}