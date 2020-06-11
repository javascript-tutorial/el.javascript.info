# Αλληλεπίδραση: alert, prompt, confirm

<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
Σε αυτό το μέρος του σεμιναρίου, καλύπτουμε τη γλώσσα JavaScript "ως έχει", χωρίς τροποποιήσεις του environment-specific.

Αλλά θα συνεχίσουμε να χρησιμοποιούμε το πρόγραμμα περιήγησης ως περιβάλλον επίδειξης, οπότε θα πρέπει να γνωρίζουμε τουλάχιστον μερικές από τις λειτουργίες διεπαφής χρήστη. Σε αυτό το κεφάλαιο, θα εξοικειωθούμε με τις λειτουργίες του προγράμματος περιήγησης `alert`, `prompt` και `confirm`.


## alert

Syntax:

```js
alert(message);
```

Αυτό εμφανίζει ένα μήνυμα και διακόπτει την εκτέλεση του script μέχρι να πατήσει ο χρήστης "OK".
=======
As we'll be using the browser as our demo environment, let's see a couple of functions to interact with the user: `alert`, `prompt` and `confirm`.

## alert

This one we've seen already. It shows a message and waits for the user to presses "OK".
>>>>>>> 6167f3aad2afec389b05f45f0c7b665cd0079afb:1-js/02-first-steps/06-alert-prompt-confirm/article.md

Για παράδειγμα:

```js run
alert("Hello");
```
<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
Το μίνι παράθυρο με το μήνυμα ονομάζεται *modal παράθυρο*. Η λέξη "modal" σημαίνει ότι ο επισκέπτης δεν μπορεί να αλληλεπιδράσει με την υπόλοιπη σελίδα, να πατήσει άλλα κουμπιά κ.λπ. μέχρι να αλληλεπιδράσει με το παράθυρο. Σε αυτήν την περίπτωση - έως ότου πατήσουν "OK".
=======

The mini-window with the message is called a *modal window*. The word "modal" means that the visitor can't interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case -- until they press "OK".
>>>>>>> 6167f3aad2afec389b05f45f0c7b665cd0079afb:1-js/02-first-steps/06-alert-prompt-confirm/article.md

## prompt

Η function `prompt` δέχεται δύο arguments:

```js no-beautify
result = prompt(title, [default]);
```

Εμφανίζει ένα modal παράθυρο με ένα μήνυμα κειμένου, ένα πεδίο εισαγωγής για τον επισκέπτη και τα κουμπιά OK/Cancel.

`title`
: Το κείμενο που θα δείξει στον επισκέπτη.

`default`
: Μια προαιρετική δεύτερη παράμετρος, η αρχική τιμή για το πεδίο εισαγωγής.

<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
Ο επισκέπτης μπορεί να πληκτρολογήσει κάτι στο πεδίο εισαγωγής prompt και να πατήσει OK. Ή μπορούν να ακυρώσουν την είσοδο πατώντας Cancel ή πατώντας το `key:Esc` πλήκτρο.
=======
```smart header="The square brackets in syntax `[...]`"
The square brackets around `default` in the syntax above denote that the parameter as optional, not required.
```

The visitor can type something in the prompt input field and press OK. Then we get that text in the `result`. Or they can cancel the input by pressing Cancel or hitting the `key:Esc` key, then we get `null` as the `result`.
>>>>>>> 6167f3aad2afec389b05f45f0c7b665cd0079afb:1-js/02-first-steps/06-alert-prompt-confirm/article.md

Η κλήση στο `prompt` επιστρέφει το κείμενο από το πεδίο εισαγωγής ή `null` εάν η είσοδος ακυρώθηκε.

Για παράδειγμα:

```js run
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // Είσαι 100 χρονών!
```

````warn header="In IE: always supply a `default`"
Η δεύτερη παράμετρος είναι προαιρετική, αλλά εάν δεν την παρέχουμε, ο Internet Explorer θα εισαγάγει το κείμενο `"undefined"` στην prompt.

Εκτελέστε αυτόν τον κωδικό στον Internet Explorer για να το δείτε:

```js run
let test = prompt("Test");
```

Έτσι, για να φανούν οι prompt καλές στο IE, συνιστούμε να παρέχετε πάντα το δεύτερο argument:

```js run
let test = prompt("Test", ''); // <-- for IE
```
````

## confirm

The syntax:

```js
result = confirm(question);
```

Η συνάρτηση `confirm` εμφανίζει ένα modal παράθυρο με ένα `ερώτημα` και δύο κουμπιά: ΟΚ και Cancel.

Το αποτέλεσμα είναι `true` εάν πατηθεί OK και `false` διαφορετικά.

Για παράδειγμα:

```js run
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true εάν πατηθεί το ΟΚ
```

## Περίληψη

Καλύψαμε 3 browser-specific functions για αλληλεπίδραση με επισκέπτες:

`alert`
: δείχνει ένα μήνυμα.

`prompt`
: εμφανίζει ένα μήνυμα που ζητά από το χρήστη να εισαγάγει κείμενο. Επιστρέφει το κείμενο ή εάν πατηθεί το κουμπί Cancel ή το πλήκτρο `key:Esc`, `null`.

`confirm`
: εμφανίζει ένα μήνυμα και περιμένει ο χρήστης να πατήσει "OK" ή "Cancel". Επιστρέφει `true` για OK και `false` για Cancel/`key:Esc`.

Όλοι αυτοι οι μέθοδοι είναι modal: διακόπτουν την εκτέλεση script και δεν επιτρέπουν στον επισκέπτη να αλληλεπιδράσει με την υπόλοιπη σελίδα έως ότου το παράθυρο έχει απορριφθεί.

Υπάρχουν δύο περιορισμοί που μοιράζονται όλες οι παραπάνω μέθοδοι:

1. Η ακριβής θέση του modal παραθύρου καθορίζεται από το πρόγραμμα περιήγησης. Συνήθως, είναι στο κέντρο.
2. Η ακριβής εμφάνιση του παραθύρου εξαρτάται επίσης από το πρόγραμμα περιήγησης. Δεν μπορούμε να το τροποποιήσουμε.

Αυτή είναι η απλούστερη τιμή. Υπάρχουν άλλοι τρόποι για να δείξετε πιο όμορφα παράθυρα και πιο πλούσια αλληλεπίδραση με τον επισκέπτη, αλλά εάν τα "bells and whistles" δεν έχουν μεγάλη σημασία, αυτές οι μέθοδοι λειτουργούν σωστά.
