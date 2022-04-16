Χρήση ερωτηματικού χειριστή `'?'`:

```js
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
```

Χρήση OR `||` (η συντομότερη παραλλαγή):

```js
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
```

Σημειώστε ότι οι παρενθέσεις γύρω από την `age > 18` δεν απαιτούνται εδώ. Υπάρχουν για καλύτερη αναγνωσιμότητα.