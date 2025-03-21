# Μεταβλητές

Τις περισσότερες φορές, μια εφαρμογή της JavaScript πρέπει να λειτουργεί με πληροφορίες. Ακολουθούν δύο παραδείγματα:
1. Ένα ηλεκτρονικό κατάστημα - οι πληροφορίες που περιλαμβάνουν είναι τα εμπορεύματα που πωλούνται και καλάθι αγορών.
2. Μια εφαρμογή συνομιλίας - οι πληροφορίες που περιλαμβάνουν είναι χρήστες, μηνύματα και πολλά άλλα.

Οι μεταβλητές χρησιμοποιούνται για την αποθήκευση αυτών των πληροφοριών.

## Η μεταβλητή

Η [μεταβλητή](https://en.wikipedia.org/wiki/Variable_(computer_science)) είναι ένα "όνομα αποθήκευσης" για δεδομένα. Μπορούμε να χρησιμοποιήσουμε μεταβλητές για να αποθηκεύσουμε καλούδια, επισκέπτες και άλλα δεδομένα.

Για να δημιουργήσετε μια μεταβλητή στην JavaScript, χρησιμοποιήστε τη λέξη «let».

Η παρακάτω δήλωση δημιουργεί (με άλλα λόγια: * δηλώνει *) μια μεταβλητή με το όνομα "message":

```js
let message;
```

Τώρα, μπορούμε να βάλουμε ορισμένα δεδομένα μέσα σε αυτό χρησιμοποιώντας τον χειριστή ανάθεσης `=`:

```js
let message;


message = 'Hello'; // αποθήκευσης μιας συμβολοσειράς
*/!*
```

Η συμβολοσειρά αποθηκεύεται τώρα στην περιοχή μνήμης που σχετίζεται με τη μεταβλητή. Μπορούμε να έχουμε πρόσβαση χρησιμοποιώντας το όνομα της μεταβλητής:

```js run
let message;
message = 'Hello!';

*!*
alert(message); // δείξε το περιεχόμενο της μεταβλητής
*/!*
```

Για να είμαστε συνοπτικοί, μπορούμε να συνδυάσουμε τη δήλωση και την ανάθεση μιας μεταβλητής σε μία γραμμή:

```js run
let message = 'Hello!'; // δήλωση μεταβλητής και ανάθεση μιας τιμής σε αυτήν

alert(message); // Hello!
```

Επίσης μπορούμε να δηλώσουμε πολλές μεταβλητές σε μία γραμμή:

```js no-beautify
let user = 'John', age = 25, message = 'Hello';
```

Αυτό μπορεί να φαίνεται συντομότερος, αλλά δεν το προτείνουμε. Για καλύτερη αναγνωσιμότητα, χρησιμοποιήστε μία γραμμή ανά μεταβλητή.

Η παραλλαγή πολλαπλών γραμμών είναι λίγο μεγαλύτερη, αλλά πιο ευανάγνωστη:

```js
let user = 'John';
let age = 25;
let message = 'Hello';
```

<<<<<<< HEAD
Μερικά άτομα ορίζουν επίσης πολλές μεταβλητές με στυλ πολλαπλών γραμμών:
=======
Some people also define multiple variables in this multiline style:

>>>>>>> 30a5d5e2a7c3504c9afd5028f83f4a696e60aede
```js no-beautify
let user = 'John',
  age = 25,
  message = 'Hello';
```

...Ή ακόμη και με στυλ "comma-first":

```js no-beautify
let user = 'John'
  , age = 25
  , message = 'Hello';
```

Τεχνικά, όλες αυτές οι παραλλαγές κάνουν το ίδιο πράγμα. Άρα, είναι θέμα προσωπικής προτίμησης και αισθητικής.


````smart header=" 
`var` αντί `let` "
Σε παλαιότερα script, μπορείτε επίσης να βρείτε μια άλλη λέξη-κλειδί: `var` αντί `let`:

```js
*!*var*/!* message = 'Hello';
```

<<<<<<< HEAD
Η λέξη-κλειδί `var` είναι * σχεδόν * ίδια με την `let`. Δηλώνει επίσης μια μεταβλητή, αλλά με έναν ελαφρώς διαφορετικό, "παλιό  τρόπο".

Υπάρχουν λεπτές διαφορές μεταξύ της `let` και της `var`, αλλά δεν έχουν σημασία αυτή τη στιγμή. Θα τα καλύψουμε λεπτομερώς στο κεφάλαιο <info:var>.
=======
The `var` keyword is *almost* the same as `let`. It also declares a variable but in a slightly different, "old-school" way.

There are subtle differences between `let` and `var`, but they do not matter to us yet. We'll cover them in detail in the chapter <info:var>.
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3
````

## Η αναλογία της πραγματικότητας

Μπορούμε εύκολα να κατανοήσουμε την έννοια μιας `μεταβλητής` αν τη φανταζόμαστε ως `κουτί` για δεδομένα, μια ετικέτα με μοναδικό όνομα.

<<<<<<< HEAD
Για παράδειγμα, η μεταβλητή `message` μπορεί να φανταστεί ως ένα κουτί με την ένδειξη `message` με την τιμή `Hello!`:
=======
For instance, the variable `message` can be imagined as a box labelled `"message"` with the value `"Hello!"` in it:
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

![](variable.svg)

Μπορούμε να βάλουμε οποιαδήποτε τιμή στο κουτί.

<<<<<<< HEAD
Μπορούμε επίσης να το αλλάξουμε όσες φορές θέλουμε:
=======
We can also change it as many times as we want:

>>>>>>> 30a5d5e2a7c3504c9afd5028f83f4a696e60aede
```js run
let message;

message = 'Hello!';

message = 'World!'; // αλλαγή τιμής

alert(message);
```

Όταν αλλάξει η τιμή, τα παλιά δεδομένα αφαιρούνται από τη μεταβλητή:

![](variable-change.svg)

Μπορούμε επίσης να δηλώσουμε δύο μεταβλητές και να αντιγράψουμε δεδομένα από τη μία στην άλλη.

```js run
let hello = 'Hello world!';

let message;

*!*
// αντιγραφή 'Hello world' από hello στο message
message = hello;
*/!*

// τώρα δύο μεταβλητές διατηρούν τα ίδια δεδομένα
alert(hello); // Hello world!
alert(message); // Hello world!
```

````warn header="Declaring twice triggers an error"
Μια μεταβλητή πρέπει να δηλώνεται μόνο μία φορά.

Η επαναλαμβανόμενη δήλωση της ίδιας μεταβλητής είναι σφάλμα:

```js run
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
```
Επομένως, πρέπει να δηλώσουμε μια μεταβλητή μία φορά και στη συνέχεια να την αναφέρουμε χωρίς το `let`.
````

```smart header="Functional languages"
<<<<<<< HEAD
<<<<<<< HEAD
Είναι ενδιαφέρον να σημειωθεί ότι υπάρχουν [functional](https://en.wikipedia.org/wiki/Functional_programming) γλώσσες προγραμματισμού, όπως [Scala](http://www.scala-lang.org/) ή [Erlang](http://www.erlang.org/) που απαγορεύουν την αλλαγή τιμής στις μεταβλητές.
=======
It's interesting to note that there exist [functional](https://en.wikipedia.org/wiki/Functional_programming) programming languages, like [Scala](https://www.scala-lang.org/) or [Erlang](https://www.erlang.org/) that forbid changing variable values.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
=======
It's interesting to note that there exist so-called [pure functional](https://en.wikipedia.org/wiki/Purely_functional_programming) programming languages, such as [Haskell](https://en.wikipedia.org/wiki/Haskell), that forbid changing variable values.
>>>>>>> 1ce5644a15ee141fbe78c0fb79c8f40d870d7043

Σε τέτοιες γλώσσες, όταν η τιμή αποθηκευτεί "στο κουτί", είναι εκεί για πάντα. Εάν χρειαστεί να αποθηκεύσουμε κάτι άλλο, η γλώσσα μας αναγκάζει να δημιουργήσουμε ένα νέο πλαίσιο (δηλώστε μια νέα μεταβλητή). Δεν μπορούμε να επαναχρησιμοποιήσουμε το παλιό.

<<<<<<< HEAD
Αν και μπορεί να φαίνεται λίγο περίεργο με την πρώτη ματιά, αυτές οι γλώσσες είναι αρκετά ικανές για σοβαρή ανάπτυξη. Επιπλέον, υπάρχουν περιοχές όπως οι παράλληλοι υπολογισμοί, όπου αυτός ο περιορισμός παρέχει ορισμένα οφέλη. Η μελέτη μιας τέτοιας γλώσσας (ακόμα κι αν δεν σκοπεύετε να τη χρησιμοποιήσετε σύντομα) συνιστάται να διευρύνετε το μυαλό.
=======
Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits.
>>>>>>> 1ce5644a15ee141fbe78c0fb79c8f40d870d7043
```

## Ονομασία μεταβλητής [#variable-naming]

Υπάρχουν δύο περιορισμοί στα ονόματα μεταβλητών στην JavaScript:

1. Η ονομασία πρέπει να περιέχει μόνο γράμματα, ψηφία ή τα σύμβολα "$" και `_`.
2. Ο πρώτος χαρακτήρας δεν πρέπει να είναι ψηφίο.

Παραδείγματα έγκυρων ονομασίων:

```js
let userName;
let test123;
```

Όταν το όνομα περιέχει πολλές λέξεις, [γραφή με ενδιάμεσα κεφαλαία](https://en.wikipedia.org/wiki/CamelCase) χρησιμοποιείται συνήθως. Αυτό είναι: οι λέξεις πηγαίνουν το ένα μετά το άλλο, κάθε λέξη εκτός από την πρώτη ξεκινώντας με ένα κεφαλαίο γράμμα: `myVeryLongName`.

Το ενδιαφέρον είναι οτι - το σύμβολο δολαρίου "$" και η υπογράμμιση "_" μπορούν επίσης να χρησιμοποιηθούν σε ονόματα. Είναι κανονικά σύμβολα, όπως τα γράμματα, χωρίς ιδιαίτερο νόημα.

Αυτές οι ονόμασίες είναι έγκυρες:

```js run untrusted
let $ = 1; // δήλωση μεταβλητής με ονομασία "$"
let _ = 2; // και τώρα με ονομασία "_"

alert($ + _); // 3
```

Παραδείγματα λανθασμένων ονομάσίων μεταβλητών:

```js no-beautify
let 1a; // δε μπορεί να αρχίσει με αριθμό

let my-name; // παύλες '-' απαγορεύονται
```

```smart header="Case matters"
<<<<<<< HEAD
Μεταβλητές `apple` και `AppLE` είναι δύο διαφορετικές μεταβλητές.
=======
Variables named `apple` and `APPLE` are two different variables.
>>>>>>> 206485fc3a5465f961608b6e7303fae2e1a0e0b5
```

````smart header="Non-Latin letters are allowed, but not recommended"
<<<<<<< HEAD
<<<<<<< HEAD
Είναι δυνατή η χρήση οποιασδήποτε γλώσσας, συμπεριλαμβανομένων κυριλλικών γραμμάτων ή ακόμη και ιερογλυφικών, όπως αυτή:
=======
It is possible to use any language, including cyrillic letters, Chinese logograms and so on, like this:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
=======
It is possible to use any language, including Cyrillic letters, Chinese logograms and so on, like this:
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

```js
let имя = '...';
let 我 = '...';
```

<<<<<<< HEAD
Από τεχνικής άποψης, δεν υπάρχει σφάλμα εδώ, τέτοια ονόματα επιτρέπονται, αλλά υπάρχει μια διεθνής παράδοση για τη χρήση μεταβλητών ονόματων στα αγγλικά. Ακόμα κι αν γράφουμε ένα μικρό script, μπορεί να έχει μεγάλη διάρκεια ζωής. Άνθρωποι από άλλες χώρες μπορεί να χρειαστεί να το διαβάσουν κάποια στιγμή.
=======
Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we're writing a small script, it may have a long life ahead. People from other countries may need to read it sometime.
````
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

````warn header="Reserved names"
Υπάρχει μια [λίστα δεσμευμένων λέξεων](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), τα οποία δεν μπορούν να χρησιμοποιηθούν ως ονόματα μεταβλητών επειδή χρησιμοποιούνται από την ίδια τη γλώσσα.

Για παραδείγμα: `let`, `class`, `return`, and `function` είναι δεσμευμένα.

Ο παρακάτω κώδικας δίνει σφάλμα σύνταξης:

```js run no-beautify
let let = 5; // δεν μπορούμε να ονομάσουμε μια μεταβλητή "let", σφάλμα!
let return = 5; // επίσης δεν μπορούμε ονομάσουμε "return", σφάλμα!
```
````

```warn header="Μια ανάθεση χωρίς `use strict`"

Κανονικά, πρέπει να ορίσουμε μια μεταβλητή πριν τη χρησιμοποιήσουμε. Αλλά στα παλιά χρόνια, ήταν τεχνικά δυνατό να δημιουργηθεί μια μεταβλητή με μια απλή ανάθεση της τιμής χωρίς τη χρήση του `let`. Αυτό εξακολουθεί να λειτουργεί σήμερα εάν δεν βάζουμε το "use strict" στα script μας για να διατηρήσουμε τη συμβατότητα με τα παλιά script.

```js run no-strict
// Σημείωση: χωρίς το "use strict" σε αυτό το παραδείγμα

num = 5; // η μεταβλητή "num" έχει δημιουργηθεί εφόσσν δεν υπάρχει

alert(num); // 5
```

Αυτή είναι μια κακή πρακτική και θα προκαλούσε σφάλμα στην strict mode:

```js
"use strict";

*!*
num = 5; // σφαλμα: η num δεω έχει δηλώθει
*/!*
```
````

## Σταθερή μεταβλητή (Constants) 

Για να δηλώσετε μια constant (αμετάβλητη) μεταβλητή, χρησιμοποιήστε το `const` αντί του `let`:

```js
const myBirthday = '18.04.1982';
```

Οι μεταβλητές που δηλώνονται με τη χρήση `const` ονομάζονται `constants`. Δεν μπορείτε να τα ξανα αναθέσετε. Μια τέτοια απόπειρα θα προκαλούσε σφάλμα:

```js run
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // σφάλμα, δεν ξανα αναθέτουμε!
```

<<<<<<< HEAD
Όταν ένας προγραμματιστής είναι σίγουρος ότι μια μεταβλητή δεν θα αλλάξει ποτέ, μπορούν να την δηλώσουν με την `const` για να σιγουρευτούν και να κοινοποιήσουν το γεγονός σε όλους.

<<<<<<< HEAD
=======
When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and communicate that fact to everyone.
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

### Σταθερές μεταβλητές με κεφαλαία
=======
### Uppercase constants
>>>>>>> 30a5d5e2a7c3504c9afd5028f83f4a696e60aede

<<<<<<< HEAD
Υπάρχει μια ευρέως διαδεδομένη πρακτική να χρησιμοποιείτε σταθερές ως ψευδώνυμα για τιμές που είναι  δύσκολα στη απομνημονευση πριν από την εκτέλεση.
=======
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

Αυτές τις μεταβλητές τις δηλώσουμε με κεφαλαία γράμματα και κάτω παύλες.

Για παράδειγμα, ας φτιάξουμε σταθερές για χρώματα, επονομαζόμενa "web" (δεκαεξαδική) μορφή:

```js run
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...όταν πρέπει να διαλέξουμε ένα χρώμα
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

Οφέλη:

- `COLOR_ORANGE` είναι πολύ πιο εύκολο να το θυμάστε παρά `"#FF7F00"`.
- Είναι πολύ πιο εύκολο να το πληκτρολογήσετε λάθασμενα `"#FF7F00"` παρά `COLOR_ORANGE`.
- Διαβάζοντας το `COLOR_ORANGE` έχει περισσότερο νόημα παρά `#FF7F00`.

Πότε πρέπει να χρησιμοποιούμε κεφαλαία για μια σταθερά και πότε πρέπει να το ονομάσουμε κανονικά; Ας το ξεκαθαρίσουμε.

<<<<<<< HEAD
Το να είσαι `constant` σημαίνει απλώς ότι η τιμή μιας μεταβλητής δεν αλλάζει ποτέ. Υπάρχουν όμως σταθερές που είναι γνωστές πριν από την εκτέλεση (όπως μια δεκαεξαδική τιμή για το κόκκινο) και υπάρχουν σταθερές που * υπολογίζονται * στο χρόνο εκτέλεσης, κατά τη διάρκεια της εκτέλεσης, αλλά δεν αλλάζουν μετά την αρχική τους ανάθεση.
=======
Being a "constant" just means that a variable's value never changes. But some constants are known before execution (like a hexadecimal value for red) and some constants are *calculated* in run-time, during the execution, but do not change after their initial assignment.
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

<<<<<<< HEAD
Για παραδείγμα:
=======
For instance:

>>>>>>> 30a5d5e2a7c3504c9afd5028f83f4a696e60aede
```js
const pageLoadTime = /* ο χρόνος που χρειάζεται για να φορτώση η σέλιδα */;
```

<<<<<<< HEAD
Η τιμή του "pageLoadTime" δεν είναι γνωστή πριν από τη φόρτωση της σελίδας, επομένως έχει κανονική ονομασία. Αλλά εξακολουθεί να είναι σταθερή επειδή δεν αλλάζει μετά την ανάθεση.
=======
The value of `pageLoadTime` is not known before the page load, so it's named normally. But it's still a constant because it doesn't change after the assignment.
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

<<<<<<< HEAD
Με άλλα λόγια, οι σταθερές με κεφαλαία ονομασία χρησιμοποιούνται μόνο ως ψευδώνυμα για  "hard-coded" τιμές.  
=======
In other words, capital-named constants are only used as aliases for "hard-coded" values.
>>>>>>> 206485fc3a5465f961608b6e7303fae2e1a0e0b5

## Να λεμε τα πράγματα με το ονομά τους 

Μιλώντας για μεταβλητές, υπάρχει ένα ακόμη πολύ σημαντικό γεγονός.

Ένα όνομα μεταβλητής πρέπει να έχει καθαρό, με προφανές νόημα, που περιγράφει τα δεδομένα που αποθηκεύει.

<<<<<<< HEAD
Η ονομασία μεταβλητών είναι μια από τις πιο σημαντικές και πολύπλοκες δεξιότητες στον προγραμματισμό. Μια γρήγορη ματιά στην ονομασία μεταβλητών μπορεί να αποκαλύψει ποιος κωδικός γράφτηκε από έναν αρχάριο έναντι ενός έμπειρου προγραμματιστή.

Σε ένα πραγματικό έργο, ο περισσότερος χρόνος αφιερώνεται τροποποιώντας και επεκτείνοντας μια υπάρχουσα βάση κώδικα και όχι γράφοντας κάτι εντελώς ξεχωριστό από το μηδέν. Όταν επιστρέψουμε σε κάποιον κώδικα αφού κάνουμε κάτι άλλο για λίγο, είναι πολύ πιο εύκολο να βρείτε πληροφορίες που έχουν καλή σήμανση. Ή, με άλλα λόγια, όταν οι μεταβλητές έχουν σωστή ονομασία.
=======
Variable naming is one of the most important and complex skills in programming. A glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it's much easier to find information that is well-labelled. Or, in other words, when the variables have good names.
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

Αφιερώστε χρόνο για να σκεφτείτε το σωστό όνομα για μια μεταβλητή προτού την δηλώσετε. Κάτι τέτοιο θα σας αποζημιώσει πολύ.

Μερικοί κανόνες που πρέπει να ακολουθήσετε είναι:

<<<<<<< HEAD
- Χρησιμοποιήστε ευκολά αναγνώσιμα ονόματα, όπως `userName` ή `shoppingCart`.
- Μείνετε μακριά από συντομογραφίες ή σύντομα ονόματα όπως "a`," b "," c`, εκτός εάν γνωρίζετε πραγματικά τι κάνετε.
- Κάντε ονόματα με μέγιστο περιγραφικό και συνοπτικό τρόπο. Παραδείγματα κακών ονομάτων είναι `δεδομένα` και `τιμή`. Τέτοια ονόματα δεν λένε τίποτα. Είναι να τα χρησιμοποιείτε σωστά, μόνο εάν το περιεχόμενο του κώδικα το καθιστά εξαιρετικά προφανές σε ποια δεδομένα ή αξία αναφέρεται η μεταβλητή.
- Συμφωνείτε με όρους εντός της ομάδας σας και στο μυαλό σας. Εάν ένας επισκέπτης ιστότοπου ονομάζεται "χρήστης", θα πρέπει να ονομάσουμε σχετικές μεταβλητές "currentUser" ή "newUser" αντί για "currentVisitor" ή "newManInTown".
=======
- Use human-readable names like `userName` or `shoppingCart`.
- Stay away from abbreviations or short names like `a`, `b`, and `c`, unless you know what you're doing.
- Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It's only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your mind. If a site visitor is called a "user" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`.
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

Ακούγεται απλό; Πράγματι είναι, αλλά η δημιουργία περιγραφικών και συνοπτικών ονομασίων μεταβλητών στην πράξη δεν είναι. Κάντε το.

```smart header="Επαναχρησιμοποιηση ή δημιουργία?"
Και η τελευταία νότα. Υπάρχουν μερικοί τεμπέληδες προγραμματιστές που, αντί να δηλώνουν νέες μεταβλητές, τείνουν να επαναχρησιμοποιούν τις υπάρχουσες.

Ως αποτέλεσμα, οι μεταβλητές τους είναι σαν κουτιά στα οποία οι άνθρωποι ρίχνουν διαφορετικά πράγματα χωρίς να αλλάζουν τα αυτοκόλλητά τους. Τι υπάρχει μέσα στο κουτί τώρα; Ποιός ξέρει? Πρέπει να έρθουμε πιο κοντά και να ελέγξουμε.

Τέτοιοι προγραμματιστές εξοικονομούν λίγο στη δηλώση της μεταβλητής, και χάνουν δέκα φορές περισσότερο κατά τον εντοπισμό σφαλμάτων.

Μια επιπλέον μεταβλητή είναι καλή, όχι κακή.

Οι minifiers της JavaScript και τα προγράμματα περιήγησης βελτιστοποιούν τον κώδικα αρκετά καλά, ώστε να μην δημιουργούν προβλήματα απόδοσης. Η χρήση διαφορετικών μεταβλητών για διαφορετικές τιμές μπορεί ακόμη και να βοηθήσει τη engine να βελτιστοποιήσει τον κώδικά σας.
```

## Σύνοψη

Μπορούμε να δηλώσουμε μεταβλητές για αποθήκευση δεδομένων χρησιμοποιώντας τις λέξεις-κλειδιά `var`, `let` ή `const`.

- `let` -- είναι ο σύνγχρονος τρόπος δήλωση.
- `var` -- είναι παλιός τρόπος δήλωση της μεταβλητής. Κανονικά δεν το χρησιμοποιούμε καθόλου, αλλά θα καλύψουμε τις λεπτές διαφορές από το `let` στο κεφάλαιο <info:var>, σε περίπτωση που τα χρειάζεστε.
- `const` --είναι όπως η `let`, αλλά η τιμή της δεν αλλάζει.

Οι μεταβλητές πρέπει να ονομάζονται με τέτοιο τρόπο ώστε να μας επιτρέπει να κατανοήσουμε εύκολα τι υπάρχει μέσα τους.
