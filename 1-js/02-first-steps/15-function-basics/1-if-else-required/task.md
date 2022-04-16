importance: 4

---

# Απαιτείται "else"?

Η ακόλουθη συνάρτηση επιστρέφει `true` αν η παράμετρος `age` είναι μεγαλύτερη από '18'.

Διαφορετικά ζητά επιβεβαίωση και επιστρέφει το αποτέλεσμα:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
*!*
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
*/!*
}
```

Η συνάρτηση θα λειτουργήσει διαφορετικά αν αφαιρεθεί το `else`;

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
*!*
  // ...
  return confirm('Did parents allow you?');
*/!*
}
```
Υπάρχει διαφορά στη συμπεριφορά αυτών των δύο παραλλαγών;

