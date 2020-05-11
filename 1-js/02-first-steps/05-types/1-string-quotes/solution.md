
Τα backticks ενσωματώνουν την έκφραση μέσα στο `$ {...}`στη συμβολοσειρά.

```js run
let name = "Ilya";

// η έκφραση μας δίνει το νούμερο 1
alert( `hello ${1}` ); // hello 1

// η έκφραση μας δίνει την συμβολοσειρά "name"
alert( `hello ${"name"}` ); // hello name

// η έκφραση είναι μια ενσωματώμενη μεταβλητή
alert( `hello ${name}` ); // hello Ilya
```
