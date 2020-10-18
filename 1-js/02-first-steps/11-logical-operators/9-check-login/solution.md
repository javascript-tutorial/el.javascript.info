

```js run demo
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
```

Σημειώστε τις κάθετες εσοχές μέσα στο μπλοκ `if`. Δεν απαιτούνται τεχνικά, αλλά κάνουν τον κώδικα πιο ευανάγνωστο.
