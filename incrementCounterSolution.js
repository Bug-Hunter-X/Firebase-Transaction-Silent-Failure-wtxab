function incrementCounter(userId) {
  const userRef = db.ref('users/' + userId);
  return userRef.transaction(function(currentData) {
    if (currentData === null) {
      return { counter: 1 };
    } else if (typeof currentData.counter !== 'number') {
      console.error('Invalid counter data type:', currentData);
      return
    }
    return { counter: currentData.counter + 1 };
  }).then(function(successTransaction) {
    if (!successTransaction.committed) {
        console.error('Transaction failed to commit for user:', userId);
        //Add logic to handle this such as retrying
    }
    console.log('Counter incremented successfully:', successTransaction.committed);
    return successTransaction.committed;
  }).catch(function(error) {
    console.error('Counter increment failed:', error);
    return false;
  });
} 