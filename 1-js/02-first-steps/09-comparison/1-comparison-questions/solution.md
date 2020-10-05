

```js no-beautify
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
```

Μερικοί από τους λόγους:

<<<<<<< HEAD
1. Προφανώς true.
2. Λεξική σύγκριση, άρα ψευδής. `"a"` είναι μικρότερο από `"p"`.
3. Πάλι, λεξική σύγκριση, ο πρώτος χαρακτήρας του `"2"` είναι μεγαλύτερος από τον πρώτο χαρακτήρα του `"1"`.
4. Οι τιμές `null` και `undefined` είναι μόνο ίσες μεταξύ τους.
5. Η αυστηρή ισότητα είναι αυστηρή. Διαφορετικοί τύποι και από τις δύο πλευρές οδηγούν σε false.
6. Παρόμοια με το `(4)`, το `null` ισούται μόνο με `undefined`.
7. Αυστηρή ισότητα διαφορετικών τύπων.
=======
1. Obviously, true.
2. Dictionary comparison, hence false. `"a"` is smaller than `"p"`.
3. Again, dictionary comparison, first char `"2"` is greater than the first char `"1"`.
4. Values `null` and `undefined` equal each other only.
5. Strict equality is strict. Different types from both sides lead to false.
6. Similar to `(4)`, `null` only equals `undefined`.
7. Strict equality of different types.
>>>>>>> 181cc781ab6c55fe8c43887a0c060db7f93fb0ca
