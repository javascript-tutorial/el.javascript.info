# Η δήλωση "switch"

Η δήλωση "switch" μπορεί να αντικαταστήσει πολλαπλά `if`.

Δίνει έναν πιο περιγραφικό τρόπο σύγκρισης μιας τιμής με πολλαπλές παραλλαγές.

## Η σύνταξη

Η `switch` έχει ένα ή περισσότερα μπλοκ `case` και μια προαιρετική προεπιλογή (default).

Φαίνεται κάπως έτσι:

```js no-beautify
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

- Η τιμή του `x` ελέγχεται με αυστηρή ισότητα με την πρώτη τιμή του `case` (δηλαδή `value1`) και στη συνέχεια τη δεύτερη (`value2`) και ούτω καθεξής.
- Εάν βρεθεί η ισότητα, η `switch` αρχίζει να εκτελεί τον κωδικό ξεκινώντας από το αντίστοιχο `case`, μέχρι το πλησιέστερο `break` (ή μέχρι το τέλος του `switch`).
- Εάν η περίπτωση δεν ταιριάζει, εκτελείται το `default`κωδικός (εάν υπάρχει).

## Για παράδειγμα

Ένα παράδειγμα `switch` (επισημαίνεται ο εκτελεσμένος κώδικας):

```js run
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
*!*
  case 4:
    alert( 'Exactly!' );
    break;
*/!*
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
```

Εδώ η `switch` αρχίζει να συγκρίνει το `a` από την πρώτη παραλλαγή `case` που είναι `3`. Το ταίριασμα αποτυγχάνει.

Τότε `4`. Αυτό είναι ένα ταίριασμα, οπότε η εκτέλεση ξεκινά από την `case 4` έως το πλησιέστερο `break`.

**Εάν δεν υπάρχει `break` τότε η εκτέλεση συνεχίζεται στo επόμενo `case` χωρίς ελέγχους.**

'Ενα παράδειγμα χωρίς το `break`:

```js run
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
*!*
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
*/!*
}
```

Στο παραπάνω παράδειγμα θα δούμε διαδοχική εκτέλεση τριών`alert`s:

```js
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );
```

````smart header="Οποιαδήποτε έκφραση μπορεί να είναι ένα όρισμα `switch/case`"
Τόσο το `switch` όσο και το `case` επιτρέπουν αυθαίρετες εκφράσεις.

Για παράδειγμα:

```js run
let a = "1";
let b = 0;

switch (+a) {
*!*
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;
*/!*

  default:
    alert("this doesn't run");
}
```
Εδώ το `+a` δίνει `1`, συγκρίνεται με το `b + 1` στην `case` και εκτελείται ο αντίστοιχος κώδικας.
````

## Ομαδοποίηση του "case"

Μπορούν να ομαδοποιηθούν πολλές παραλλαγές του `case` που μοιράζονται τον ίδιο κωδικό.

Για παράδειγμα, εάν θέλουμε να τρέξει ο ίδιος κωδικός για το `case 3` και `case 5`:

```js run no-beautify
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

*!*
  case 3: // (*) Ομαδοποίηση των δύων cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
*/!*

  default:
    alert('The result is strange. Really.');
}
```

Τώρα και τα δύο `3` και `5` εμφανίζουν το ίδιο μήνυμα.

<<<<<<< HEAD
Η ικανότητα "ομαδοποίησης" περιπτώσεων είναι μια παρενέργεια του τρόπου λειτουργίας του `switch/case` χωρίς το `break`. Εδώ η εκτέλεση του `case 3` ξεκινά από τη γραμμή `(*)` και περνάει από το `case 5`, επειδή δεν υπάρχει `break`.
=======
The ability to "group" cases is a side effect of how `switch/case` works without `break`. Here the execution of `case 3` starts from the line `(*)` and goes through `case 5`, because there's no `break`.
>>>>>>> 206485fc3a5465f961608b6e7303fae2e1a0e0b5

## Η σημασία του τύπου

Ας υπογραμμίσουμε ότι ο έλεγχος της ισότητας είναι πάντα αυστηρός. Οι τιμές πρέπει να είναι του ίδιου τύπου για να ταιριάζουν.

Για παράδειγμα, ας εξετάσουμε τον κώδικα:

```js run
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
```

1. Για τα `0`, `1`, το πρώτο `alert` εκτελείται.
2. Για το `2` το δεύτερο `alert` εκτελείται.
3. Αλλά για το `3`, το αποτέλεσμα της `prompt` είναι μια συμβολοσειρά `"3"`, η οποία δεν είναι αυστηρά ίση `===` με τον αριθμό `3`. Έχουμε λοιπόν έναν νεκρό κώδικα στην περίπτωση 3! Η εκδοχή `default` θα εκτελεστεί.
