# Υπό συνθήκη χειριστές: if, '?'

Μερικές φορές, πρέπει να εκτελέσουμε διαφορετικές ενέργειες βάσει διαφορετικών συνθηκών.

Για να το κάνουμε αυτό, μπορούμε να χρησιμοποιήσουμε τη δήλωση `if` και τον τελεστή υπό όρο `?`, που ονομάζεται επίσης τελεστής "ερωτηματικού".

## Η δήλωση "if"

Η δήλωση `if(...)` αξιολογεί μια συνθήκη σε παρένθεση και, εάν το αποτέλεσμα είναι `true`, εκτελεί ένα μπλοκ κώδικα.

Για παράδειγμα:

```js run
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

*!*
if (year == 2015) alert( 'You are right!' );
*/!*
```

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

Μπορούμε επίσης να περάσουμε μια προ-αξιολογημένη τιμή boolean στο `if`, έτσι:

```js
let cond = (year == 2015); // η ισότητα αξιολογείται true ή false

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

Μερικές φορές, θα θέλαμε να δοκιμάσουμε πολλές παραλλαγές μιας κατάστασης. Η ρήτρα `else if` μας επιτρέπει να το κάνουμε αυτό.

Για παράδειγμα:

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

Στον παραπάνω κώδικα, η JavaScript ελέγχει πρώτα το `year < 2015. Εάν αυτό είναι falsy, πηγαίνει στην επόμενη συνθήκη `year > 2015`. Εάν αυτό είναι επίσης falsy, δείχνει το τελευταίο `alert`.

Μπορεί να υπάρχουν περισσότερα μπλοκ `else if`. Το τελικό `else` είναι προαιρετικό.

## Υπό συνθήκη τελεστής '?'

Μερικές φορές, πρέπει να αντιστοιχίσουμε μια μεταβλητή αναλόγως με μια συνθήκη.

Για παράδειγμα:

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

Ο ονομαζομενος τελεστής "υπό όρους" ή "ερωτηματικό" μας επιτρέπει να κάνουμε με συντομότερο και απλούστερο τρόπο.

Ο τελεστής αντιπροσωπεύεται από ένα ερωτηματικό `?`. Μερικές φορές ονομάζεται "ternary", επειδή ο τελεστής έχει τρεις τελεστές. Στην πραγματικότητα είναι ο μοναδικός τελεστής σε JavaScript που έχει τόσα πολλά.

Συντάσεται ως εξής:
```js
let result = condition ? value1 : value2;
```

Η `condition` αξιολογείται: εάν είναι αλήθεια τότε επιστρέφεται η `value1`, διαφορετικά -- `value2`

Για παράδειγμα:

```js
let accessAllowed = (age > 18) ? true : false;
```

Τεχνικά, μπορούμε να παραλείψουμε τις παρενθέσεις γύρω από την `age > 18`. Ο τελεστής ερωτηματικών έχει χαμηλή προτεραιότητα, οπότε εκτελείται μετά τη σύγκριση `>`.

Αυτό το παράδειγμα θα κάνει το ίδιο με το παραπάνω:

```js
// ο τελεστής σύγκρισης "age > 18" εκτελεί πρώτα ούτως ή άλλως
// (δεν χρειάζεται να το τυλίξουμε σε παρένθεση)
let accessAllowed = age > 18 ? true : false;
```

Ωστόσο, οι παρενθέσεις καθιστούν τον κώδικα πιο ευανάγνωστο, επομένως σας συνιστούμε να τον χρησιμοποιήσετε.

````smart
Στο παραπάνω παράδειγμα, μπορείτε να αποφύγετε τη χρήση του τελεστή ερωτηματικών επειδή επιστρέφει την ίδια την σύγκριση `true/false`:

```js
// το ίδιο
let accessAllowed = age > 18;
```
````

## Multiple '?'

Μια ακολουθία τελεστών ερωτηματικών `?` μπορεί να επιστρέψει μια τιμή που εξαρτάται από περισσότερες από μία συνθήκη.

Για παράδειγμα:
```js run
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

Μπορεί να είναι δύσκολο στην αρχή να κατανοήσουμε τι συμβαίνει. Αλλά μετά από μια πιο προσεκτική ματιά, μπορούμε να δούμε ότι είναι απλώς μια συνηθισμένη σειρά δοκιμών:

1. Το πρώτο ερωτηματικό ελέγχει εάν `age < 3`.
2. Εάν είναι true -- τότε επιστρέφει `'Hi, baby!'`. Διαφορετικά, συνεχίζει στην έκφραση μετά την άνω και κάτω τελεία `'Hi, baby!'`, ελέγχοντας `age < 18`.
3. Εάν αυτό είναι true -- επιστρέφει `'Hello!'`. Διαφορετικά, συνεχίζει στην έκφραση μετά την επόμενη άνω και κάτω τελεία '":"', ελέγχοντας `age < 100`.
4. Αν αυτό είναι true -- επιστρέφει `'Greetings!'`. Διαφορετικά, συνεχίζει στην έκφραση μετά την τελευταία άνω και κάτω τελεία '":"', επιστρέφοντας `'What an unusual age!'`.

Δείτε πώς φαίνεται αυτό `if..else`:

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

## Μη παραδοσιακή χρήση του '?'

Μερικές φορές το ερωτηματικό `?` χρησιμοποιείται ως αντικατάσταση του `if`:

```js run no-beautify
let company = prompt('Which company created JavaScript?', '');

*!*
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
*/!*
```

Ανάλογα με την κατάσταση `company == 'Netscape'`, εκτελείται είτε η πρώτη είτε η δεύτερη έκφραση μετά το `?` και εμφανίζει μια ειδοποίηση.

Δεν αποδίδουμε αποτέλεσμα σε μια μεταβλητή εδώ. Αντ 'αυτού, εκτελούμε διαφορετικό κώδικα ανάλογα με την κατάσταση.

**Δεν συνιστάται η χρήση του τελεστή ερωτηματικών με αυτόν τον τρόπο.**

Η σημειογραφία είναι μικρότερη από την αντίστοιχη δήλωση `if`, η οποία απευθύνεται σε ορισμένους προγραμματιστές. Αλλά είναι λιγότερο ευανάγνωστο.

Εδώ είναι ο ίδιος κωδικός που χρησιμοποιεί το `if` για σύγκριση:

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

Τα μάτια μας σαρώνουν τον κώδικα κάθετα. Τα μπλοκ κώδικα που καλύπτουν πολλές γραμμές είναι πιο κατανοητά από ένα μακρύ, οριζόντιο σύνολο οδηγιών.

Ο σκοπός του τελεστή ερωτηματικών `?` είναι να επιστρέψει μια τιμή ή κάτι ανάλογα με την κατάστασή της. Χρησιμοποιήστε το για ακριβώς αυτό. Χρησιμοποιήστε το `if` όταν πρέπει να εκτελέσετε διαφορετικούς κλάδους κώδικα.

