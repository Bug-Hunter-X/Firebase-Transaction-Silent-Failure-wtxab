# Firebase Transaction Silent Failure

This repository demonstrates a bug where Firebase transactions sometimes fail silently, without triggering the `.catch` block.  This can lead to incorrect data in your application.

The `incrementCounterBug.js` file shows the problematic code. The `incrementCounterSolution.js` file presents a solution that includes improved error handling and data validation.