Η λύση:

```js run demo
function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(alert, 1000);

f1000("test"); // shows "test" after 1000ms
```
Παρατήρησε πώς μια συνάρτηση-arrow χρησιμοποιείται εδώ. Όπως γνωρίζουμε, οι συναρτήσεις arrow δεν έχουν δικό τους `this`και `arguments`, οπότε το `f.apply(this, arguments)`παίρνει το `this` και τα `arguments` από τη συνάρτηση-κάλυμμα.

Αν περάσουμε μια απλή συνάρτηση, η `setTimeout` θα το καλέσει χωρίς ορίσματα και θα ισχύει `this=window` (εφόσον είμαστε στον δρομολογήτη).

Μπορούμε να περάσουμε το σωστό `this` χρησιμοποιώντας μια ενδιάμεση μεταβλητή, αλλά αυτή η τεχνική είναι λίγο πιο "δυσκίνητη":

```js
function delay(f, ms) {

  return function(...args) {
    let savedThis = this; // κράτησε αυτό σε μια ενδιάμεση μεταβλητή
    setTimeout(function() {
      f.apply(savedThis, args); // χρησιμοποίησε το εδώ
    }, ms);
  };

}
```
