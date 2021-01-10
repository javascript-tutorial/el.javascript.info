# Functions

Πολύ συχνά πρέπει να κάνουμε παρόμοια εργασιες σε πολλά σημεία του script.

Για παράδειγμα, πρέπει να δείξουμε ένα ωραίο μήνυμα όταν ένας επισκέπτης συνδέεται ή αποσυνδέεται σε κάποιο σημείο της εφαρμογής.

Οι functions είναι τα κύρια "building blocks" του προγράμματος. Επιτρέπουν στον κωδικό να καλείται πολλές φορές χωρίς επανάληψη.

Έχουμε ήδη δει παραδείγματα ενσωματωμένων συναρτήσεων, όπως `alert(message)`, `prompt(message, default)` καί `confirm(question)`. Μπορούμε όμως να δημιουργήσουμε και δικές μας functions.

## Function Declaration

Για να δημιουργήσουμε μια function μπορούμε να χρησιμοποιήσουμε το *function declaration*.

Υλοποιείται με αυτό το τρόπο:

```js
function showMessage() {
  alert( 'Hello everyone!' );
}
```

Η λέξη-κλειδί `function` πηγαίνει πρώτα, μετά πηγαίνει το *όνομα της function*, μετά μια λίστα *παραμέτρων* μεταξύ των παρενθέσεων (διαχωρισμένη με κόμμα, κενή στο παραπάνω παράδειγμα) και τέλος ο κωδικός της συνάρτησης, που ονομάζεται επίσης "the function body", ανάμεσα σε άγκιστρα.

```js
function name(parameters) {
  ...body...
}
```

Η νέα μας function μπορεί να κληθεί με το όνομά της: `showMessage()`.

Για παράδειγμα:

```js run
function showMessage() {
  alert( 'Hello everyone!' );
}

*!*
showMessage();
showMessage();
*/!*
```

Η κλήση `showMessage()` εκτελεί τον κωδικό της function. Εδώ θα δούμε το μήνυμα δύο φορές.

Αυτό το παράδειγμα καταδεικνύει με σαφήνεια έναν από τους κύριους σκοπούς των functions: την αποφυγή αντιγραφής του κώδικα.

Εάν κάποτε χρειαστεί να αλλάξουμε το μήνυμα ή τον τρόπο που εμφανίζεται, αρκεί να τροποποιήσουμε τον κώδικα σε ένα μέρος: τη function που το εξάγει.


## Τοπικές μεταβλητές

Μια μεταβλητή που δηλώνεται μέσα σε μια function είναι ορατή μόνο μέσα σε αυτήν.

Για παράδειγμα:

```js run
function showMessage() {
*!*
  let message = "Hello, I'm JavaScript!"; // τοπική μεταβλητή
*/!*

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! Η μεταβλητή ειναι τοπική
```

## Εξωτερικές μεταβλητές

Μια function μπορεί να έχει πρόσβαση και σε μια εξωτερική μεταβλητή, για παράδειγμα:

```js run no-beautify
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
```

Η function έχει πλήρη πρόσβαση στην εξωτερική μεταβλητή. Μπορεί επίσης να την τροποποιήσει.

Για παράδειγμα:

```js run
let *!*userName*/!* = 'John';

function showMessage() {
  *!*userName*/!* = "Bob"; // (1) τροποποιήσει της εξωτερικής μεταβλητής

  let message = 'Hello, ' + *!*userName*/!*;
  alert(message);
}

alert( userName ); // *!*John*/!* πριν την εκτέλεση της function

showMessage();

alert( userName ); // *!*Bob*/!*, η τιμή εχει τροποποιήθει απο την function
```

Η εξωτερική μεταβλητή χρησιμοποιείται μόνο εφόσον δεν υπάρχει τοπική.

Εάν μια ίδια μεταβλητή δηλώνεται μέσα στη function, τότε *σκιάζει* την εξωτερική. Για παράδειγμα, στον παρακάτω κώδικα η function χρησιμοποιεί την local `userName`. Το εξωτερικό αγνοείται:

```js run
let userName = 'John';

function showMessage() {
*!*
  let userName = "Bob"; // δήλωση τοπικής μεταβλητής
*/!*

  let message = 'Hello, ' + userName; // *!*Bob*/!*
  alert(message);
}

// η function θα δημιουργήσει και θα χρησιμοποιήσει δικό της όνομα χρήστη
showMessage();

alert( userName ); // *!*John*/!*, αμετάβλητη, η function δεν είχε πρόσβαση στην εξωτερική μεταβλητή
```

```smart header="Global variables"
Οι μεταβλητές που δηλώνονται εκτός συνάρτησης, όπως το εξωτερικό `userName` στον παραπάνω κωδικό, ονομάζονται *global*.

Global variables are visible from any function (unless shadowed by locals)
Οι global μεταβλητές είναι ορατές από οποιαδήποτε function (εκτός εάν επισκιάζονται από locals).

Είναι καλή πρακτική να ελαχιστοποιήσετε τη χρήση global μεταβλητών. Ο σύγχρονος κώδικας έχει λίγα ή καθόλου global. Οι περισσότερες μεταβλητές βρίσκονται στις συναρτήσεις τους. Μερικές φορές όμως, μπορούν να είναι χρήσιμα για την αποθήκευση δεδομένων σε project-level.
```

## Παράμετροι

Μπορούμε να μεταφέρουμε αυθαίρετα δεδομένα σε συναρτήσεις χρησιμοποιώντας παραμέτρους (επίσης λέγεται *function arguments*) .

Στο παρακάτω παράδειγμα, η συνάρτηση έχει δύο παραμέτρους: `from` και `text`.

```js run
function showMessage(*!*from, text*/!*) { // arguments: from, text
  alert(from + ': ' + text);
}

*!*
showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
*/!*
```

Όταν η συνάρτηση καλείται στις γραμμές `(*)` και `(**)`, οι δεδομένες τιμές αντιγράφονται στις τοπικές μεταβλητές `from` και `text`. Στη συνέχεια, η συνάρτηση τα χρησιμοποιεί.

Ακολουθεί ένα ακόμη παράδειγμα: έχουμε μια μεταβλητή `from` και τη μεταδίδουμε στη συνάρτηση. Παρακαλώ σημειώστε: η συνάρτηση αλλάζει `from`, αλλά η αλλαγή δεν φαίνεται έξω, επειδή μια συνάρτηση παίρνει πάντα ένα αντίγραφο της τιμής:

```js run
function showMessage(from, text) {

*!*
  from = '*' + from + '*'; // make "from" look nicer
*/!*

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// η τιμή του `from` είναι η ίδια, η συνάρτηση τροποποίησε μια τοπικη αντίγραφη
alert( from ); // Ann
```

## Default values

Εάν μια παράμετρος δεν παρέχεται, τότε η τιμή της γίνεται `undefined`.

Για παράδειγμα, η προαναφερθείσα συνάρτηση `showMessage(from, text)` μπορεί να κληθεί με ένα μόνο όρισμα:

```js
showMessage("Ann");
```

<<<<<<< HEAD
Αυτό δεν είναι λάθος. Μια τέτοια κλήση θα έδινε το `"Ann: undefined"`. Δεν υπάρχει `text`, έτσι θεωρούμαι ότι το `text === undefined`.
=======
That's not an error. Such a call would output `"*Ann*: undefined"`. There's no `text`, so it's assumed that `text === undefined`.
>>>>>>> 98e21cdc278ba9a99a42820d405ea4e9e267db0b

Αν θέλουμε να χρησιμοποιήσουμε ένα "default" `text` σε αυτήν την περίπτωση, τότε μπορούμε να το καθορίσουμε μετά το `=`:

```js run
function showMessage(from, *!*text = "no text given"*/!*) {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: δεν έχει δοθεί κείμενο
```

Τώρα, εάν η παράμετρος `text` δεν δοθεί, θα λάβει την τιμή `"no text given"`.

Εδώ `"no text given"` είναι μια συμβολοσειρά, αλλά μπορεί να είναι μια πιο περίπλοκη έκφραση, η οποία αξιολογείται και αναθέτετε μόνο εάν λείπει η παράμετρος. Αυτό είναι επίσης δυνατό:

```js run
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() εκτελείται μόνο εάν δεν δίνεται `text`
  // το αποτέλεσμα ειναι η τιμή του `text`
}
```

```smart header="Evaluation of default parameters"
Στην JavaScript, μια προεπιλεγμένη παράμετρος αξιολογείται κάθε φορά που καλείται η συνάρτηση χωρίς την αντίστοιχη παράμετρο.

Στο παραπάνω παράδειγμα, το `anotherFunction()` καλείται κάθε φορά που το `showMessage()` καλείται χωρίς την παράμετρο `text`.
```

### Εναλλακτικοί προεπιλεγμένοι παράμετροι

Μερικές φορές έχει νόημα να ορίσετε προεπιλεγμένες τιμές για παραμέτρους όχι στη δήλωση συνάρτησης, αλλά σε μεταγενέστερο στάδιο, κατά την εκτέλεση.

Για να ελέγξουμε μια παράμετρο που παραλείφθηκε, μπορούμε να τη συγκρίνουμε με το `undefined`:

```js run
function showMessage(text) {
*!*
  if (text === "undefined") {
    text = 'empty message';
  }
*/!*

  alert(text);
}

showMessage(); // empty message
```

...Ή θα μπορούσαμε να χρησιμοποιήσουμε τον τελεστή `||`:

```js
// εάν η παράμετρος παραλειφθεί ή "" περάσει, τότε θα ορίστε σε 'empty'
function showMessage(text) {
  text = text || 'empty';
  ...
}
```
Οι σύγχρονες μηχανές JavaScript υποστηρίζουν το [nullish coalescing operator](info:nullish-coalescing-operator) `??`, είναι όμως καλύτερα οι ψευδείς τιμές όπως το `0` να θεωρούνται κανονικές:

```js run
// if there's no "count" parameter, show "unknown"
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

## Επιστροφή τιμής

Μια συνάρτηση μπορεί να επιστρέψει μια τιμή στον καλούμενο κώδικα ως αποτέλεσμα.

Το απλούστερο παράδειγμα θα ήταν μια συνάρτηση που προσθέτει δύο τιμές:

```js run no-beautify
function sum(a, b) {
  *!*return*/!* a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

Η οδηγία `result` μπορεί να βρίσκεται σε οποιοδήποτε σημείο της συνάρτησης. Όταν φτάσει η εκτέλεση, η συνάρτηση σταματά και η τιμή επιστρέφεται στον καλούμενο κώδικα (αντιστοιχεί στο παραπάνω `result`).

Η `return` μπορεί να εμφανιστεί πολλες φορές σε μία μόνο συνάρτηση. Για παράδειγμα:

```js run
function checkAge(age) {
  if (age >= 18) {
*!*
    return true;
*/!*
  } else {
*!*
    return confirm('Do you have permission from your parents?');
*/!*
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
```

It is possible to use without a value. That causes the function to exit immediately
Υπάρχει περίπτωση να χρησιμοποιήσετε την `return` χωρίς τιμή. Αυτό αναγκάζει τη λειτουργία να κλείσει αμέσως.

Για παράδειγμα:

```js
function showMovie(age) {
  if ( !checkAge(age) ) {
*!*
    return;
*/!*
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
```

Στον παραπάνω κάδικα, εάν το `checkAge(age)` επιστρέφει `false`, τότε το `showMovie` δεν θα προχωρήσει στην `alert`.

````smart header="Μια συνάρτηση με ένα κενό ή χωρίς `return` θα επιστρέφει `undefined`"
Εάν μια συνάρτηση δεν επιστρέφει καμία τιμή, τοτε θα επιστρέφει `undefined`:

```js run
function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true
```

Ένα κενό `return` είναι επίσης το ίδιο με το `return undefined`:

```js run
function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
```
````

````warn header="Ποτέ μην αλλάζετε μια γραμμή μεταξύ `return` και της τιμής"
Μια έκφραση στο `return`, μπορεί να φαίνεται δελεαστικό να την τοποθετήσετε σε μια ξεχωριστή γραμμή, κάπως έτσι:

```js
return
 (some + long + expression + or + whatever * f(a) + f(b))
```
Όμως δεν λειτουργεί με αυτό τρόπο, επειδή η JavaScript παίρνει ένα ερωτηματικό μετά το `return`. Αυτό θα λειτουργήσει το ίδιο όπως:

```js
return*!*;*/!*
 (some + long + expression + or + whatever * f(a) + f(b))
```

Το αποτέλεσμα είναι μια κενή επιστροφή.

Εάν θέλουμε την επιστρώφει της επιστρεφόμενης έκφρασης σε πολλές γραμμές, θα πρέπει να την τοποθετήσουμε στην ίδια γραμμή με το `return`. Ή τουλάχιστον βάλτες στις παρενθέσεις, ως εξής:

```js
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```
Και θα λειτουργήσει όπως το περιμένουμε.
````

## Naming a function [#function-naming]

Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with `"show"` usually show something.

Function starting with...

- `"get…"` -- return a value,
- `"calc…"` -- calculate something,
- `"create…"` -- create something,
- `"check…"` -- check something and return a boolean, etc.

Examples of such names:

```js no-beautify
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
```

With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

```smart header="One function -- one action"
A function should do exactly what is suggested by its name, no more.

Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

A few examples of breaking this rule:

- `getAge` -- would be bad if it shows an `alert` with the age (should only get).
- `createForm` -- would be bad if it modifies the document, adding a form to it (should only create it and return).
- `checkPermission` -- would be bad if it displays the `access granted/denied` message (should only perform the check and return the result).

These examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they're not much different. In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions should obey the rules. And the team should share the knowledge.
```

```smart header="Ultrashort function names"
Functions that are used *very often* sometimes have ultrashort names.

For example, the [jQuery](http://jquery.com) framework defines a function with `$`. The [Lodash](http://lodash.com/) library has its core function named `_`.

These are exceptions. Generally functions names should be concise and descriptive.
```

## Functions == Comments

Functions should be short and do exactly one thing. If that thing is big, maybe it's worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it's definitely a good thing.

A separate function is not only easier to test and debug -- its very existence is a great comment!

For instance, compare the two functions `showPrimes(n)` below. Each one outputs [prime numbers](https://en.wikipedia.org/wiki/Prime_number) up to `n`.

The first variant uses a label:

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}
```

The second variant uses an additional function `isPrime(n)` to test for primality:

```js
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    *!*if (!isPrime(i)) continue;*/!*

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

The second variant is easier to understand, isn't it? Instead of the code piece we see a name of the action (`isPrime`). Sometimes people refer to such code as *self-describing*.

So, functions can be created even if we don't intend to reuse them. They structure the code and make it readable.

## Summary

A function declaration looks like this:

```js
function name(parameters, delimited, by, comma) {
  /* code */
}
```

- Values passed to a function as parameters are copied to its local variables.
- A function may access outer variables. But it works only from inside out. The code outside of the function doesn't see its local variables.
- A function can return a value. If it doesn't, then its result is `undefined`.

To make the code clean and easy to understand, it's recommended to use mainly local variables and parameters in the function, not outer variables.

It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side-effect.

Function naming:

- A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
- A function is an action, so function names are usually verbal.
- There exist many well-known function prefixes like `create…`, `show…`, `get…`, `check…` and so on. Use them to hint what a function does.

Functions are the main building blocks of scripts. Now we've covered the basics, so we actually can start creating and using them. But that's only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.
