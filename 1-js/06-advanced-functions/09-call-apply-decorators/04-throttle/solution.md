```js demo
function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
```

Μια κλήση στη `throttle(func, ms)` επιστρέφει το `wrapper`.

1. Κατά τη διάρκεια της πρώτης κλήσης, η `wrapper` απλά τρέχει τη `func` και θέτει τη κατάσταση παγώματος (`isThrottled = true`).
2. Στη κατάσταση αυτή όλες οι κλήσεις αποθηκεύονται στις `savedArgs/savedThis`. Παρακαλώ παρατήρησε ότι και το πλαίσιο και τα ορίσματα είναι το ίδιο σημαντικά και πρέπει να αποθηκευτούν. Τα θέλουμε ταυτόχρονα για να ξανακάνουμε τη κλήση.
3. Μετά από `ms` δέκατα του δευτερολέπτου, η `setTimeout` τρέχει. Η περίοδος παγώματος αφαιρείται (`isThrottled = false`) και, αν είχαμε αγνοημένες κλήσεις, η `wrapper` εκτελείται με τα τελευταία  αποθηκευμένα ορίσματα και πλαίσιο.

Το 3ο βήμα τρέχει όχι τη `func`, αλλά τη `wrapper`, γιατί δεν θέλουμε μόνο να εκτελέσουμε τη `func`, αλλά για άλλη μια φορά να μπούμε στη κατάσταση παγώματος και να θέσουμε το timeout για να το επαναφέρει.
