# Λογικοί τελεστές

Υπάρχουν τρεις λογικοί τελεστές στην JavaScript: `||` (OR), `&&` (AND), `!` (NOT).

Αν και ονομάζονται "logical", μπορούν να εφαρμοστούν σε οποιουδήποτε τύπου, όχι μόνο boolean. Το αποτέλεσμα τους μπορεί επίσης να είναι οποιουδήποτε τύπου.

Ας τις δούμε πιο λεπτομερειακά.

## || (OR)

Ο τελεστής "OR" αντιπροσωπεύεται με δύο σύμβολα κάθετης γραμμής:

```js
result = a || b;
```

Στον κλασικό προγραμματισμό, η λογική OR προορίζεται μόνο για χειρισμό δυαδικών τιμών. Εάν κάποιο από τα επιχειρήματά του είναι `true`, επιστρέφει `true`, διαφορετικά επιστρέφει `false`.

Στην JavaScript, ο τελεστής είναι λίγο πιο περίπλοκος και πιο ισχυρός. Αλλά πρώτα, ας δούμε τι συμβαίνει με τις δυαδικές τιμές

Υπάρχουν τέσσερις πιθανοί λογικοί συνδυασμοί:

```js run
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```

Όπως μπορούμε να δούμε, το αποτέλεσμα είναι πάντα `true` εκτός από την περίπτωση που και οι δύο τελεστές είναι `false`.

Εάν ένας τελεστής δεν είναι boolean, μετατρέπεται σε boolean για την αξιολόγηση.

Για παράδειγμα, ο αριθμός `1` αντιμετωπίζεται ως `true`, ο αριθμός `0` ως `false`:

```js run
if (1 || 0) { // λειτουργεί ακριβώς σαν ( true || false )
  alert( 'truthy!' );
}
```

Τις περισσότερες φορές, η OR `||` χρησιμοποιείται σε μια δήλωση `if` για να ελέγξει εάν *οποιαδήποτε* από τις δεδομένες συνθήκες είναι `true`.

Για παράδειγμα:

```js run
let hour = 9;

*!*
if (hour < 10 || hour > 18) {
*/!*
  alert( 'The office is closed.' );
}
```
Μπορούμε να αναθέσουμε περισσότερες προϋποθέσεις:

```js run
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}
```

## Ή OR "||" βρίσκει την πρώτη αληθινή τιμή

Η λογική που περιγράφεται παραπάνω είναι κάπως κλασική. Τώρα, ας φέρουμε τις "επιπλέον" δυνατότητες της JavaScript.

Ο εκτεταμένος αλγόριθμος λειτουργεί ως εξής.

Δεδομένα πολλαπλών τιμών OR:

```js
result = value1 || value2 || value3;
```

Ο τελεστής OR `||` κάνει τα εξής:

- Αξιολογεί τους τελεστές από αριστερά προς τα δεξιά.
- Τον κάθε τελεστή, το μετατρέπει σε boolean. Εάν το αποτέλεσμα είναι `true`, σταματά και επιστρέφει την αρχική τιμή αυτού του τελεστή.
- Εάν έχουν αξιολογηθεί όλοι οι τελεστές (δηλαδή όλα ήταν `false`), επιστρέφει τον τελευταίο τελεστή.

Η τιμή επιστρέφεται στην αρχική της μορφή, χωρίς τη μετατροπή.


Με άλλα λόγια, μια αλυσίδα OR `"||"` επιστρέφει την πρώτη αληθινή τιμή ή την τελευταία, εάν δεν βρεθεί τιμή αλήθειας.

Για παράδειγμα:

```js run
alert( 1 || 0 ); // 1 (το 1 είναι truthy)

alert( null || 1 ); // 1 (το 1 είναι η πρώτη αληθινή τιμή)
alert( null || 0 || 1 ); // 1 (η πρώτη τιμή truthy)

alert( undefined || null || 0 ); // 0 (όλα falsy, επιστρέφει την τελευταία τιμή)
```

Αυτό οδηγεί σε κάποια ενδιαφέρουσα χρήση σε σύγκριση με ένα "καθαρό, κλασικό, Boolean μόνο OR".

1. **Λήψη της πρώτης τιμής από μια λίστα μεταβλητών ή εκφράσεων.**

    Για παράδειγμα, έχουμε μεταβλητές "firstName", "lastName" και "nickName", όλες προαιρετικές.

    Ας χρησιμοποιήσουμε το OR `||` για να διαλέξουμε το ένα που έχει τα δεδομένα και να τα δείξουμε (ή "ανώνυμα" αν δεν έχει οριστεί):

    ```js run
    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";

    *!*
    alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
    */!*
    ```


    Εάν όλες οι μεταβλητές ήταν ψευδείς, θα εμφανιστεί το `Anonymous`.



2. **Παράκαμψη αξιολόγησης (`short-circuit evaluation`).**

    Ένα άλλο χαρακτηριστικό του τελεστή OR `||` είναι η λεγόμενη παράκαμψη αξιολόγησης.
				
    Σημαίνει ότι `||` επεξεργάζεται τα ορίσματά του έως ότου επιτευχθεί η πρώτη τιμή αλήθειας και, στη συνέχεια, η τιμή επιστρέφεται αμέσως, χωρίς καν να αγγίξει το άλλο επιχείρημα.

    Αυτή η σημασία αυτής της δυνατότητας γίνεται προφανής εάν ένας τελεστής δεν είναι απλώς μια τιμή, αλλά μια έκφραση με side effect, όπως μια μεταβλητή ανάθεσης ή μια κλήση συνάρτησης.

    Στο παρακάτω παράδειγμα, εκτυπώνεται μόνο το δεύτερο μήνυμα:

    ```js run no-beautify
    *!*true*/!* || alert("not printed");
    *!*false*/!* || alert("printed");
    ```

    Στην πρώτη γραμμή, ο τελεστής OR `||` σταματά την αξιολόγηση αμέσως μόλις δει το `true`, οπότε το `alert` δεν εκτελείται.

    Μερικές φορές, οι χρήστες χρησιμοποιούν αυτήν τη δυνατότητα για την εκτέλεση εντολών μόνο εάν η συνθήκη στο αριστερό μέρος είναι λανθασμένη.

## && (AND)

Ο τελεστής AND αντιπροσωπεύεται με δύο συμπλεκτικά σύμβολα `&&`:

```js
result = a && b;
```

Στον κλασικό προγραμματισμό, η AND επιστρέφει `true` εάν και οι δύο τελεστές είναι αληθινοί και διαφορετικά `false`:

```js run
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

Ένα παράδειγμα με `if`:

```js run
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
```

Όπως και με το OR, οποιαδήποτε τιμή επιτρέπεται ως τελεστής του AND:

```js run
if (1 && 0) { // αξιολογή ως true && false
  alert( "won't work, because the result is falsy" );
}
```

## Η AND "&&" βρίσκει την πρώτη τιμή falsy

Δίνοντας πολλαπλές τιμές AND:

```js
result = value1 && value2 && value3;
```

Ο τελεστής AND `&&` κάνει τα εξής:

- Αξιολογεί τελεστές από αριστερά προς τα δεξιά.
- Για κάθε τελεστή, το μετατρέπει σε boolean. Εάν το αποτέλεσμα είναι `false`, σταματά και επιστρέφει την αρχική τιμή αυτού του τελεστή.
- Εάν έχουν αξιολογηθεί όλοι οι τελεστές (δηλαδή όλοι ήταν αληθινοί), επιστρέφει τον τελευταίο τελεστή.

Με άλλα λόγια, η AND επιστρέφει την πρώτη τιμή falsy ή την τελευταία τιμή εάν δεν βρέθηκε καμία

Οι παραπάνω κανόνες είναι παρόμοιοι με το OR. Η διαφορά είναι ότι η AND επιστρέφει την πρώτη τιμή *false* ενώ το OR επιστρέφει την πρώτη τιμή *truthy*.

Παραδείγματα:

```js run
// εάν η πρώτη τιμή είναι truthy,
// η AND επιστρέφει την δεύτερη επιλογή:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// εάν η πρώτη τιμή είναι falsy,
// η AND την επιστρέφει. Η δεύτερη επιλογή αγνοέιται
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

Μπορούμε επίσης να περάσουμε πολλές τιμές στη σειρά. Δείτε πώς επιστρέφεται το πρώτο falsy:

```js run
alert( 1 && 2 && null && 3 ); // null
```

Όταν όλες οι τίμες είναι truthy, η τελευταία τίμη επιστρέφεται:

```js run
alert( 1 && 2 && 3 ); // 3, the last one
```

````smart header="Προτεραιότητα της AND `&&` σε σχέση με την OR `||`"
Η προτεραιότητα της AND `&&` σε σχέση με την OR `||`.

Έτσι, ο κωδικός `a && b || c && d` είναι ουσιαστικά το ίδιο εάν οι εκφράσεις `&&` ήταν σε παρένθεση: `(a && b) || (c && d)`.
````

````warn header="Μην αντικαταστήσετε το `if` με || ή &&"
Μερικές φορές, οι χρήστες χρησιμοποιούν τον τελεστή AND `&&` ως "συντομευση για το `if`".


Για παράδειγμα:

```js run
let x = 1;

(x > 0) && alert( 'Greater than zero!' );
```

Η εκτέλεση είναι αυτο που ξεχωριζει `&&`, θα εκτελεστεί μόνο εάν φτάσει στην αξιολόγηση. Δηλαδή, μόνο αν το `(x > 0)` είναι true.

Για αυτο βασικά εχουμε μια ανάλογια:

```js run
let x = 1;

if (x > 0) alert( 'Greater than zero!' );
```

Παρόλο που, η παραλλαγή με `&&` εμφανίζεται πιο σύντομη, `if` είναι πιο εμφανής και τείνει να είναι λίγο πιο ευανάγνωστη. Προτείνουμε λοιπόν να χρησιμοποιείτε κάθε κατασκευή για το σκοπό της: χρησιμοποιούμε το `if` εάν θέλουμε `if` και χρησιμοποιούμε το `&&` εάν θέλουμε AND.
````

## ! (NOT)

Ο τελεστής boolean NOT αντιπροσωπεύεται με ένα θαυμαστικό `!`.

Η σύνταξη του είναι πολύ απλή:

```js
result = !value;
```

Ο τελεστής αποδέχεται ένα μόνο όρισμα και κάνει τα εξής:

1. Μετατρέπει τον τελεστή σε δυαδική μορφή: `true/false`.
2. Επιστρέφει την αντίστροφη τιμή.

Για παράδειγμα:

```js run
alert( !true ); // false
alert( !0 ); // true
```

Το διπλό NOT `!!` μερικές φορές χρησιμοποιείται για τη μετατροπή μιας τιμής σε δυαδική μορφή:

```js run
alert( !!"non-empty string" ); // true
alert( !!null ); // false
```

Δηλαδή, η πρώτη NOT μετατρέπει την τιμή σε boolean και επιστρέφει το αντίστροφο, και το δεύτερο NOT το αντιστρέφει ξανά. Στο τέλος, έχουμε μια απλή μετατροπή τιμής σε boolean.

Υπάρχει λίγο περισσότερος τρόπος για να κάνετε το ίδιο πράγμα - μια built-in function `Boolean`:

```js run
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```

Η προτεραιότητα της NOT `!` είναι η υψηλότερη από όλες τις λογικές τελεστές, οπότε εκτελείται πάντα πρώτο, πριν από το `&&` ή την `||`.
