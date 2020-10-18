```js demo
function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

```

Μια κλήση στη `debounce` επιστρέφει μια συνάρτηση-κάλυμμα. Μπορεί να υπάρχουν δύο καταστάσεις:

- `isCooldown = false` -- έτοιμη να τρέξει.
- `isCooldown = true` -- περιμένοντας για το timeout.

Στη πρώτη κλήση η `isCooldown` επιστρέφει μια τιμή λάθους, οπότε η κλήση προχωράει, και η κατάσταση αλλάζει σε `true`.

Όοσ η `isCooldown` είναι αληθής, όλες οι άλλες κλήσεις μπορούν να αγνοηθούν.

Τότε η `setTimeout` την ξανακάνει `false` μετά τη δοσμένη καθυστέρηση.


```

A call to `debounce` returns a wrapper. When called, it schedules the original function call after given `ms` and cancels the previous such timeout.

