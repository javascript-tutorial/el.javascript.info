importance: 5

---

# Ξαναγράψτε το "switch" σε "if"

Γράψτε τον κώδικα χρησιμοποιώντας το `if..else` που αντιστοιχεί στον ακόλουθο `switch`:

```js
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```

