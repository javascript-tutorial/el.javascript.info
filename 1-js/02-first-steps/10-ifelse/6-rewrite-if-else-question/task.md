importance: 5

---

# Ξαναγράψτε 'if..else' μέσα στο '?'

Ξαναγράψτε `if..else` χρησιμοποιώντας πολλαπλούς ternary τελεστές `'?'`.

Για αναγνωσιμότητα, συνιστάται να χωρίσετε τον κώδικα σε πολλές γραμμές.

```js
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
```
