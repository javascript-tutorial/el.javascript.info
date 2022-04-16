Λύση με χρήση `if`:

```js
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```

Λύση με τελεστή ερωτηματικού σήματος `'?'`:

```js
function min(a, b) {
  return a < b ? a : b;
}
```

Υ.Γ. Στην περίπτωση μιας ισότητας 'a = = b' δεν έχει σημασία τι να επιστρέψει.