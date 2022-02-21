# Μηδενικός τελεστής συγχώνευσης '??'

[recent browser="new"]

<<<<<<< HEAD
Ο μηδενικός τελεστής συγχώνευσης `??` παρέχει μια σύντομη σύνταξη για την επιλογή μιας πρώτης `καθορισμένης` μεταβλητής από τη λίστα.

Το αποτέλεσμα της `a ?? b` είναι:
- `a` εάν δεν είναι `null` ή `undefined`,
- `b`, αλλίως.

Ετσι είναι `x = a ?? b` ισοδύναμο με:

```js
result = (a !== null && a !== undefined) ? a : b;```

Εδώ είναι ένα μεγαλύτερο παράδειγμα.
=======
The nullish coalescing operator is written as two question marks `??`.

As it treats `null` and `undefined` similarly, we'll use a special term here, in this article. We'll say that an expression is "defined" when it's neither `null` nor `undefined`.

The result of `a ?? b` is:
- if `a` is defined, then `a`,
- if `a` isn't defined, then `b`.

In other words, `??` returns the first argument if it's not `null/undefined`. Otherwise, the second one.

The nullish coalescing operator isn't anything completely new. It's just a nice syntax to get the first "defined" value of the two.

We can rewrite `result = a ?? b` using the operators that we already know, like this:
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Φανταστείτε, έχουμε έναν χρήστη και υπάρχουν μεταβλητές `firstName`, `lastName` ή `nickName` για το όνομα, το επώνυμο και το ψευδώνυμό τους. Όλα αυτά μπορεί να είναι ακαθόριστα, εάν ο χρήστης αποφασίσει να μην εισαγάγει καμία τιμή.

<<<<<<< HEAD
Θα θέλαμε να εμφανίσουμε το όνομα χρήστη: μία από αυτές τις τρεις μεταβλητές ή να δείξουμε "Anonymous" εάν δεν έχει οριστεί τίποτα.

Ας χρησιμοποιήσουμε τον τελεστή `??` για να επιλέξουμε τον πρώτο καθορισμένο:
=======
Now it should be absolutely clear what `??` does. Let's see where it helps.

The common use case for `??` is to provide a default value for a potentially undefined variable.

For example, here we show `user` if defined, otherwise `Anonymous`:
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

```js run
let user;

alert(user ?? "Anonymous"); // Anonymous (user not defined)
```

<<<<<<< HEAD
Φυσικά, εάν ο `user` είχε κάποια τιμή εκτός από το `null/undefined`, τότε θα το δούμε:
=======
Here's the example with `user` assigned to a name:
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

```js run
let user = "John";

alert(user ?? "Anonymous"); // John (user defined)
```

Μπορούμε επίσης να χρησιμοποιήσουμε μια ακολουθία του `??` για να επιλέξουμε την πρώτη τιμή από μια λίστα που δεν είναι `null/undefined`.

<<<<<<< HEAD
Ας υποθέσουμε ότι έχουμε δεδομένα του χρήστη σε μεταβλητές `firstName`, `lastName` ή `nickName`. Όλα αυτά μπορεί να είναι undefined, εάν ο χρήστης αποφασίσει να μην εισαγάγει μια τιμή.

Θα θέλαμε να εμφανίσουμε το όνομα χρήστη χρησιμοποιώντας μία από αυτές τις μεταβλητές ή να δείξουμε "Anonymous"  εάν όλες είναι undefined.
=======
Let's say we have a user's data in variables `firstName`, `lastName` or `nickName`. All of them may be not defined, if the user decided not to enter a value.

We'd like to display the user name using one of these variables, or show "Anonymous" if all of them aren't defined.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Ας χρησιμοποιήσουμε τον τελεστή `??`  για αυτό:

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// εμφάνιση της πρώτης μη μηδενικής / μη καθορισμένης τιμής

*!*
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
*/!*
```

## Σύγκριση με ||

Ο τελεστής OR `||` μπορεί να χρησιμοποιηθεί με τον ίδιο τρόπο όπως `??`. Στην πραγματικότητα, μπορούμε να αντικαταστήσουμε το `??` με το `||` στον παραπάνω κώδικα και να πάρουμε το ίδιο αποτέλεσμα, όπως περιγράφηκε στο [προηγούμενο κεφάλαιο](info:logical-operators#or-finds-the-first-truthy-value)

Οι σημαντικές διαφορές είναι:
- `||` επιστρέφει την πρώτη *truthy* τιμή.
- `??` επιστρέφει την πρώτη *defined* τιμή.
Αυτό έχει μεγάλη σημασία όταν θα θέλαμε να αντιμετωπίσουμε το `null/undefined` διαφορετικά από το `0`.

Για παράδειγμα, δείτε αυτό:

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
*!*
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
*/!*
```

<<<<<<< HEAD
Αυτό ορίζει το `height` σε `100` εάν δεν έχει οριστεί.
=======
Historically, the OR `||` operator was there first. It exists since the beginning of JavaScript, so developers were using it for such purposes for a long time.

On the other hand, the nullish coalescing operator `??` was added to JavaScript only recently, and the reason for that was that people weren't quite happy with `||`.

The important difference between them is that:
- `||` returns the first *truthy* value.
- `??` returns the first *defined* value.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Ας συκγρίνουμε το `||`:

```js run
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

<<<<<<< HEAD
Εδώ, `height || 100` αντιμετωπίζει το μηδέν ύψος ως μη ορισμένο, όπως το `null`, το `undefined` ή οποιαδήποτε άλλη τιμή falsy.
Έτσι το αποτέλεσμα είναι `100`.
Το `height ?? 100` επιστρέφει το `100` μόνο εάν το `height` είναι `null` ή `undefined`. Έτσι, το `alert` δείχνει την τιμή ύψους `0` "ως έχει".

Ποια συμπεριφορά είναι καλύτερη εξαρτάται από μια συγκεκριμένη περίπτωση χρήσης. Όταν το μηδέν ύψος είναι μια έγκυρη τιμή, τότε το `??` είναι προτιμότερο.

## Προτεραιότητα
=======
- The `height || 100` checks `height` for being a falsy value, and it's `0`, falsy indeed.
    - so the result of `||` is the second argument, `100`.
- The `height ?? 100` checks `height` for being `null/undefined`, and it's not,
    - so the result is `height` "as is", that is `0`.

In practice, the zero height is often a valid value, that shouldn't be replaced with the default. So `??` does just the right thing.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Η προτεραιότητα του τελεστή `??` είναι μάλλον χαμηλή: `5` στο
[πίνακα MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).

<<<<<<< HEAD
<<<<<<< HEAD
Για αυτό το `??` αξιολογείται μετά τις υπόλοιπες λειτουργίες, αλλά πριν από το `=` και το `?`.
=======
The precedence of the `??` operator is about the same as `||`, just a bit lower. It equals `5` in the [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table), while `||` is `6`.
=======
The precedence of the `??` operator is the same as `||`. They both equal `4` in the [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60

That means that, just like `||`, the nullish coalescing operator `??` is evaluated before `=` and `?`, but after most other operations, such as `+`, `*`.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Εάν χρεαστούμε να επιλέξουμε μια τιμή με `??` σε μια σύνθετη έκφραση, τότε να λαμβάνεται υπ όψιν να προσθέσετε παρενθέσεις:

```js run
let height = null;
let width = null;

// Προσοχή: χρησιμοποιηστε παρενθέσεις
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```
Διαφορετικά, εάν παραλείψουμε παρενθέσεις, το `*` έχει την υψηλότερη προτεραιότητα από το `??` και θα τρέξει πρώτα.

Αυτό θα λειτουργούσε ακριβώς το ίδιο με:

```js
// μάλλον δεν είναι σωστό
let area = height ?? (100 * width) ?? 50;
```

Υπάρχει επίσης ένας σχετικός περιορισμός σε επίπεδο γλώσσας.

**Για λόγους ασφαλείας, απαγορεύεται η χρήση του τελεστή `??` με `&&` και `||`.**


```js
// without parentheses
let area = height ?? 100 * width ?? 50;

// ...works the same as this (probably not what we want):
let area = height ?? (100 * width) ?? 50;
```

Ο παρακάτω κώδικας ενεργοποιεί ένα σφάλμα σύνταξης:

```js run
let x = 1 && 2 ?? 3; // Syntax error
```
Ο περιορισμός είναι σίγουρα συζητήσιμος, αλλά προστέθηκε στις προδιαγραφές γλώσσας με σκοπό να αποφευχθούν λάθη προγραμματισμού, καθώς οι άνθρωποι αρχίζουν να αλλάζουν σε `??` από `||`.

<<<<<<< HEAD
Χρησιμοποιήστε ρητές παρενθέσεις για να το επιλύσετε:
=======
The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from `||` to `??`.

Use explicit parentheses to work around it:
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

```js run
*!*
let x = (1 && 2) ?? 3; // Λειτουργεί
*/!*

alert(x); // 2
```

## Περίληψη

- Ο μηδενικός τελεστής συγχώνευσης `??` παρέχει έναν σύντομο τρόπο για να επιλέξετε μια "defined" τιμή από τη λίστα.


    Χρησιμοποιείται για την ανάθεση προεπιλεγμένων τιμών σε μεταβλητές:

    ```js
    // set height=100, εαν height είναι null ή undefined
    height = height ?? 100;
    ```

- Ο τελεστής `??` έχει πολύ χαμηλή προτεραιότητα, λίγο υψηλότερος από το `?` και το `=`.
- Απαγορεύεται η χρήση του με `||`" ή `&&` χωρίς ρητές παρενθέσεις.