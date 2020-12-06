Για να ταιριάζει ακριβώς με τη λειτουργικότητα του `switch`, το `if` πρέπει να χρησιμοποιεί μια αυστηρή σύγκριση `'==='`.

For given strings though, a simple  works too
Ωστόσο, για δεδομένες συμβολοσειρές, λειτουργεί ένα απλό `'=='`.

```js no-beautify
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
```

ΣΗΜΕΙΩΣΗ: το construct `browser == 'Chrome' || browser == 'Firefox' …` χωρίζεται σε πολλές γραμμές για καλύτερη αναγνωσιμότητα.

Αλλά η κατασκευή `switch` είναι ακόμα πιο καθαρή και πιο περιγραφική.
