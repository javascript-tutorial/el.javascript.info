# Υπό συνθήκη χειριστές: if, '?'

Μερικές φορές, πρέπει να εκτελέσουμε διαφορετικές ενέργειες βάσει διαφορετικών συνθηκών.

Για να το κάνουμε αυτό, μπορούμε να χρησιμοποιήσουμε τη δήλωση `if` και τον τελεστή υπό όρο `?`, που ονομάζεται επίσης τελεστής "ερωτηματικού".

## Η δήλωση "if"

Η δήλωση `if(...)` αξιολογεί μια συνθήκη σε παρένθεση και, εάν το αποτέλεσμα είναι `true`, εκτελεί ένα μπλοκ κώδικα.

Για παράδειγμα:

```js run
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

*!*
if (year == 2015) alert( 'You are right!' );
*/!*
```

In the example above, the condition is a simple equality check (`year == 2015`), but it can be much more complex.

Στο παραπάνω παράδειγμα, η συνθήκη είναι ένας απλός έλεγχος ισότητας (`year == 2015`), αλλά μπορεί να είναι πολύ πιο περίπλοκος.

Εάν θέλουμε να εκτελέσουμε περισσότερες από μία δηλώσεις, πρέπει να τυλίξουμε το μπλοκ κώδικα μας μέσα σε άγκιστρα:

```js
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
```

Σας συνιστούμε να τυλίγετε το μπλοκ κώδικα με άγκιστρα `{}` κάθε φορά που χρησιμοποιείτε μια δήλωση `if`, ακόμη και αν υπάρχει μόνο μία δήλωση για εκτέλεση. Αυτό βελτιώνει την αναγνωσιμότητα.

## Μετατροπή σε Boolean

Η δήλωση `if (…)` αξιολογεί την έκφραση στις παρενθέσεις και μετατρέπει το αποτέλεσμα σε δυαδικό.

Ας θυμηθούμε τους κανόνες μετατροπής από το κεφάλαιο <info:type-conversions>:

- Ένας αριθμός `0`, μια κενή συμβολοσειρά `""`, `null`, `undefined` και `NaN` όλα γίνονται `false`. Εξαιτίας αυτού, ονομάζονται "falsy" τιμές.
- Άλλες τιμές γίνονται `true`, επομένως ονομάζονται "truthy".

Έτσι, ο κώδικας υπό αυτήν την κατάσταση δεν θα εκτελεστεί ποτέ:

```js
if (0) { // 0 είναι falsy
  ...
}
```

...και μέσα σε αυτήν την κατάσταση - θα είναι πάντα:

```js
if (1) { // 1 είναι truthy
  ...
}
```

Μπορούμε επίσης να περάσουμε μια προ-αξιολογημένη τιμή boolean στο `if`, έτσι:

```js
let cond = (year == 2015); // η ισότητα αξιολογείται true ή false

if (cond) {
  ...
}
```

## Η ρήτρα "else"

Η δήλωση `if` μπορεί να περιέχει ένα προαιρετικό μπλοκ "else". Εκτελείται όταν η συνθήκη είναι λανθασμένη.

Για παράδειγμα:
```js run
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // οποιαδήποτε τιμή εκτός 2015
}
```

## Διάφορες συνθήκες: "else if"

Μερικές φορές, θα θέλαμε να δοκιμάσουμε πολλές παραλλαγές μιας κατάστασης. Η ρήτρα `else if` μας επιτρέπει να το κάνουμε αυτό.

Για παράδειγμα:

```js run
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

Στον παραπάνω κώδικα, η JavaScript ελέγχει πρώτα το `year < 2015. Εάν αυτό είναι falsy, πηγαίνει στην επόμενη συνθήκη `year > 2015`. Εάν αυτό είναι επίσης falsy, δείχνει το τελευταίο `alert`.

Μπορεί να υπάρχουν περισσότερα μπλοκ `else if`. Το τελικό `else` είναι προαιρετικό.

## Conditional operator '?'

Sometimes, we need to assign a variable depending on a condition.

For instance:

```js run no-beautify
let accessAllowed;
let age = prompt('How old are you?', '');

*!*
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
*/!*

alert(accessAllowed);
```

The so-called "conditional" or "question mark" operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark `?`. Sometimes it's called "ternary", because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:
```js
let result = condition ? value1 : value2;
```

The `condition` is evaluated: if it's truthy then `value1` is returned, otherwise -- `value2`.

For example:

```js
let accessAllowed = (age > 18) ? true : false;
```

Technically, we can omit the parentheses around `age > 18`. The question mark operator has a low precedence, so it executes after the comparison `>`.

This example will do the same thing as the previous one:

```js
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;
```

But parentheses make the code more readable, so we recommend using them.

````smart
In the example above, you can avoid using the question mark operator because the comparison itself returns `true/false`:

```js
// the same
let accessAllowed = age > 18;
```
````

## Multiple '?'

A sequence of question mark operators `?` can return a value that depends on more than one condition.

For instance:
```js run
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

It may be difficult at first to grasp what's going on. But after a closer look, we can see that it's just an ordinary sequence of tests:

1. The first question mark checks whether `age < 3`.
2. If true -- it returns `'Hi, baby!'`. Otherwise, it continues to the expression after the colon '":"', checking `age < 18`.
3. If that's true -- it returns `'Hello!'`. Otherwise, it continues to the expression after the next colon '":"', checking `age < 100`.
4. If that's true -- it returns `'Greetings!'`. Otherwise, it continues to the expression after the last colon '":"', returning `'What an unusual age!'`.

Here's how this looks using `if..else`:

```js
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
```

## Non-traditional use of '?'

Sometimes the question mark `?` is used as a replacement for `if`:

```js run no-beautify
let company = prompt('Which company created JavaScript?', '');

*!*
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
*/!*
```

Depending on the condition `company == 'Netscape'`, either the first or the second expression after the `?` gets executed and shows an alert.

We don't assign a result to a variable here. Instead, we execute different code depending on the condition.

**It's not recommended to use the question mark operator in this way.**

The notation is shorter than the equivalent `if` statement, which appeals to some programmers. But it is less readable.

Here is the same code using `if` for comparison:

```js run no-beautify
let company = prompt('Which company created JavaScript?', '');

*!*
if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
*/!*
```

Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

The purpose of the question mark operator `?` is to return one value or another depending on its condition. Please use it for exactly that. Use `if` when you need to execute different branches of code.
