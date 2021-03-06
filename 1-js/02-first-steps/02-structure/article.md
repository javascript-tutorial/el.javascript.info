# Δομή κώδικα

Το πρώτο πράγμα που θα μελετήσουμε είναι τα δομικά στοιχεία του κώδικα.

## Δηλώσεις

Οι δηλώσεις είναι δομές σύνταξης και εντολές που εκτελούν πράξεις.

Έχουμε ήδη δει μια δήλωση, `alert ('Hello, world!')`, Η οποία εμφανίζει το μήνυμα "Hello, world!".

Μπορούμε να έχουμε όσες δηλώσεις θέλουμε στον κώδικα μας. Οι δηλώσεις μπορούν να διαχωριστούν με ένα ερωτηματικό (;).

Για παράδειγμα, εδώ χωρίσαμε το "Hello World" σε δύο alert:

```js run no-beautify
alert('Hello'); alert('World');
```

Συνήθως, οι δηλώσεις γράφονται σε ξεχωριστές γραμμές για να καταστεί ο κώδικας πιο αναγνώσιμος:

```js run no-beautify
alert('Hello');
alert('World');
```

## Ερωτηματικά [#semicolon]

Ενδέχεται να παραλειφθεί ένα ερωτηματικό στις περισσότερες περιπτώσεις όταν υπάρχει διακοπή γραμμής.

Επίσης και αυτό λειτουργεί:

```js run no-beautify
alert('Hello')
alert('World')
```

Εδώ, το JavaScript ερμηνεύει την αλλαγή γραμμής ως ένα "έμμεσο" ερωτηματικό. Αυτό ονομάζεται [αυτόματη εισαγωγή γραμμής](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion).

**Στις περισσότερες περιπτώσεις, μια νέα γραμμή υποδηλώνει ένα ερωτηματικό. Αλλά "στις περισσότερες περιπτώσεις" δεν σημαίνει "πάντα"!**

Υπάρχουν περιπτώσεις όπου μια νέα γραμμή δεν σημαίνει ερωτηματικό. Ένα παράδειγμα:

```js run no-beautify
alert(3 +
1
+ 2);
```

Το αποτέλεσμα του κώδικα είναι `6` επειδή το JavaScript δεν εισάγει εδώ ερωτηματικά. Είναι ολοφάνερο ότι αν η γραμμή τελειώσει με ένα συν `` + '', τότε είναι μια "ατελής έκφραση", οπότε δεν χρειάζεται το ερωτηματικό. Και σε αυτή την περίπτωση αυτό λειτουργεί όπως είχε προβλεφθεί.


**Ωστόσο, υπάρχουν περιπτώσεις στις οποίες η JavaScript "αποτυγχάνει" να υποθέσει ένα ερωτηματικό όπου είναι πραγματικά απαραίτητο.**

Τα σφάλματα που προκύπτουν σε τέτοιες περιπτώσεις είναι αρκετά δύσκολο να βρεθούν και να διορθωθούν.

````smart header="Aν example of an error"
Αν είστε περίεργοι να δείτε ένα παράδειγμα ενός τέτοιου σφάλματος, ελέγξτε αυτόν τον κωδικό:


```js run
[1, 2].forEach(alert)
```

Δεν χρειάζεται να σκεφτούμε ακόμα την έννοια των παρενθέσεων `[]` και `forEach`. Θα τα μελετήσουμε αργότερα. Προς το παρόν, να θυμάστε μόνο το αποτέλεσμα του κώδικα: δείχνει `1` και ` 2`.

Τώρα, ας προσθέσουμε ενα  «alert» πριν από τον κώδικα και * όχι * να τελειώσει με ένα ερωτηματικό:
=======
```js run
alert("Hello");

[1, 2].forEach(alert);
```

```js run no-beautify
alert("Hello")

[1, 2].forEach(alert);
```

Τώρα, εάν εκτελέσουμε τον κώδικα, εμφανίζεται μόνο το πρώτo 'alert' και στη συνέχεια έχουμε ένα σφάλμα!

Eάν προσθέσουμε ένα ερωτηματικό μετά `alert` τότε όλα θα λειτουργούν σωστά:
```js run
alert("All fine now");


If we run this code, only the first `Hello` shows (and there's an error, you may need to open the console to see it). There are no numbers any more.

Τώρα έχουμε το μήνυμα "All fine now" που ακολουθείται από το "1" και το "2".

Το σφάλμα στην εκδοχή χωρίς ερωτηματικό εμφανίζεται επειδή η JavaScript δεν υποθέτει ένα ερωτηματικό πριν τις αγκύλες `[...]`.

Επομένως, επειδή το ερωτηματικό δεν εισάφεται αυτόματα, ο κώδικας στο παράδειγμα αντιμετωπίζεται ως μία μόνο δήλωση. Δείτε πώς το βλέπει το JavaScript engine:

```js run no-beautify
alert("Hello")[1, 2].forEach(alert);
```

Αλλά θα πρέπει να είναι δύο χωριστές δηλώσεις, όχι μία. Μια τέτοια συγχώνευση, στην περίπτωση αυτή, είναι απλώς λανθασμένη, εξ ου και το σφάλμα. Αυτό μπορεί να συμβεί και σε άλλες περιπτώσεις.

Συνιστούμε να τοποθετείτε ερωτηματικά μεταξύ δηλώσεων ακόμα και αν διαχωρίζονται από νέες γραμμές. Αυτός ο κανόνας υιοθετείται ευρέως από την κοινότητα. Ας σημειώσουμε για μια ακόμη φορά - * είναι δυνατόν * να αφήνουμε τα ερωτηματικά τις περισσότερες φορές. Αλλά είναι ασφαλέστερο - ειδικά για έναν αρχάριο - να τα χρησιμοποιήσει.

## Σχόλια

Με την πάροδο του χρόνου, τα προγράμματα γίνονται όλο και πιο περίπλοκα. Είναι απαραίτητο να προσθέσετε * σχόλια * που περιγράφουν τι κάνει ο κώδικας και γιατί.

Τα σχόλια μπορούν να τοποθετηθούν σε οποιοδήποτε σημείο ενός script. Δεν επηρεάζουν την εκτέλεσή του, επειδή το JavaScript engine απλώς τους αγνοεί.

**Τα σχόλια μιας γραμμής ξεκινούν με δύο χαρακτήρες προς τα εμπρός `//`.**

Το υπόλοιπο της γραμμής είναι ένα σχόλιο. Μπορεί να καταλάβει μια πλήρη γραμμή ή να ακολουθήσει μια δήλωση.

Like here:
```js run
// This comment occupies a line of its own
alert('Hello');

alert('World'); // This comment follows the statement
```

**Τα σχόλια πολλαπλών γραμμών ξεκινούν με μια προς τα εμπρός κάθετος <code>/&#42;</code>και έναν αστερίσκο και τελειώνουν με έναν αστερίσκο και μια μπροστινή κάθετος <code>&#42;/</code>**

Ακριβώς έτσι:

```js run
/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');
```

Το περιεχόμενο των σχολίων αγνοείται, οπότε αν βάλουμε κώδικα μέσα σε αυτό <code>/&#42; ... &#42;/</code>, δεν θα εκτελεστεί.

Μερικές φορές μπορεί να είναι χρήσιμο να απενεργοποιήσετε προσωρινά ένα μέρος του κώδικα:

```js run
/* Commenting out the code
alert('Hello');

*/
alert('World');
```

```smart header="Use hotkeys!"
Στα περισσότερα editors, μια γραμμή κώδικα μπορεί να σχολιαστεί πατώντας το πλήκτρο `key:Ctrl+/`  για σχόλιο μίας γραμμής και για τα πολλαπλά σχόλια πατώντας το πλήκτρο `key:Ctrl+Shift+/` --(επιλέξτε ένα κομμάτι κώδικα και πατήστε το πλήκτρο πρόσβασης). Για Mac, δοκιμάστε το πλήκτρο «key:Cmd» αντί για «key: Ctrl».
```

````warn header="Nested comments are not supported!"
Δεν μπορεί να υπάρχει ενα σχόλιο `/*..*/ ' μέσα σε ένα άλλο σχόλιο ` /*..*/`

Αυτός ο κώδικας θα δείξει ένα σφάλμα:

```js run no-beautify
/*
  /* nested comment ?!? */
*/
alert( 'World' );
```
````

Παρακαλώ μη διστάσετε να σχολιάσετε τον κωδικό σας.

Τα σχόλια αυξάνουν το συνολικό αποτύπωμα κώδικα, αλλά αυτό δεν είναι καθόλου πρόβλημα. Υπάρχουν πολλά εργαλεία που ελαχιστοποιούν τον κώδικα πριν από τη δημοσίευση σε έναν διακομιστή παραγωγής. Καταργούν σχόλια, επομένως δεν εμφανίζονται στα scr εργασίας. Συνεπώς, οι παρατηρήσεις δεν έχουν καθόλου αρνητικές επιπτώσεις στην παραγωγή.

Αργότερα στο σεμινάριο <info:code-quality>, θα υπάρχει ένα κεφάλαιο που εξηγεί επίσης πώς να γράψετε καλύτερα σχόλια.
