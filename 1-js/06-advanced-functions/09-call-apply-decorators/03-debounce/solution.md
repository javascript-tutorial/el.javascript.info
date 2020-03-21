```js demo
function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}
```

Μια κλήση στη `debounce` επιστρέφει μια συνάρτηση-κάλυμμα. Μπορεί να υπάρχουν δύο καταστάσεις:

- `isCooldown = false` -- έτοιμη να τρέξει.
- `isCooldown = true` -- περιμένοντας για το timeout.

Στη πρώτη κλήση η `isCooldown` επιστρέφει μια τιμή λάθους, οπότε η κλήση προχωράει, και η κατάσταση αλλάζει σε `true`.

Όοσ η `isCooldown` είναι αληθής, όλες οι άλλες κλήσεις μπορούν να αγνοηθούν.

Τότε η `setTimeout` την ξανακάνει `false` μετά τη δοσμένη καθυστέρηση.
