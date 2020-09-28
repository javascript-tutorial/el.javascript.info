# Μηδενικός τελεστής συγχώνευσης '??'

[recent browser="new"]

<<<<<<< HEAD
Ο μηδενικός τελεστής συγχώνευσης `??` παρέχει μια σύντομη σύνταξη για την επιλογή μιας πρώτης `καθορισμένης` μεταβλητής από τη λίστα.

Το αποτέλεσμα της `a ?? b` είναι:
- `a` εάν δεν είναι `null` ή `undefined`,
- `b`, αλλίως.

Ετσι είναι `x = a ?? b` ισοδύναμο με:
=======
Here, in this article, we'll say that an expression is "defined" when it's neither `null` nor `undefined`.

The nullish coalescing operator is written as two question marks `??`.

The result of `a ?? b` is:
- if `a` is defined, then `a`,
- if `a` isn't defined, then `b`.


In other words, `??` returns the first argument if it's defined. Otherwise, the second one.

The nullish coalescing operator isn't anything completely new. It's just a nice syntax to get the first "defined" value of the two.

We can rewrite `result = a ?? b` using the operators that we already know, like this:
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

```js
result = (a !== null && a !== undefined) ? a : b;
```

The common use case for `??` is to provide a default value for a potentially undefined variable.

For example, here we show `Anonymous` if `user` isn't defined:

```js run
let user;

alert(user ?? "Anonymous"); // Anonymous
```

<<<<<<< HEAD
Εδώ είναι ένα μεγαλύτερο παράδειγμα.

Φανταστείτε, έχουμε έναν χρήστη και υπάρχουν μεταβλητές `firstName`, `lastName` ή `nickName` για το όνομα, το επώνυμο και το ψευδώνυμό τους. Όλα αυτά μπορεί να είναι ακαθόριστα, εάν ο χρήστης αποφασίσει να μην εισαγάγει καμία τιμή.

Θα θέλαμε να εμφανίσουμε το όνομα χρήστη: μία από αυτές τις τρεις μεταβλητές ή να δείξουμε "Anonymous" εάν δεν έχει οριστεί τίποτα.

Ας χρησιμοποιήσουμε τον τελεστή `??` για να επιλέξουμε τον πρώτο καθορισμένο:
=======
Of course, if `user` had any value except `null/undefined`, then we would see it instead:

```js run
let user = "John";

alert(user ?? "Anonymous"); // John
```

We can also use a sequence of `??` to select the first defined value from a list.

Let's say we have a user's data in variables `firstName`, `lastName` or `nickName`. All of them may be undefined, if the user decided not to enter a value.

We'd like to display the user name using one of these variables, or show "Anonymous" if all of them are undefined.

Let's use the `??` operator for that:
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

<<<<<<< HEAD
// εμφάνιση της πρώτης μη μηδενικής / μη καθορισμένης τιμής
=======
// shows the first defined value:
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d
*!*
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
*/!*
```

## Σύγκριση με ||

<<<<<<< HEAD
Ο τελεστής OR `||` μπορεί να χρησιμοποιηθεί με τον ίδιο τρόπο όπως `??`. Στην πραγματικότητα, μπορούμε να αντικαταστήσουμε το `??` με το `||` στον παραπάνω κώδικα και να πάρουμε το ίδιο αποτέλεσμα, όπως περιγράφηκε στο [προηγούμενο κεφάλαιο](info:logical-operators#or-finds-the-first-truthy-value)


Οι σημαντικές διαφορές είναι:
- `||` επιστρέφει την πρώτη *truthy* τιμή.
- `??` επιστρέφει την πρώτη *defined* τιμή.
Αυτό έχει μεγάλη σημασία όταν θα θέλαμε να αντιμετωπίσουμε το `null/undefined` διαφορετικά από το `0`.

Για παράδειγμα, δείτε αυτό:
=======
The OR `||` operator can be used in the same way as `??`, as it was described in the [previous chapter](info:logical-operators#or-finds-the-first-truthy-value).

For example, in the code above we could replace `??` with `||` and still get the same result:

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

// shows the first truthy value:
*!*
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
*/!*
```

<<<<<<< HEAD
Αυτό ορίζει το `height` σε `100` εάν δεν έχει οριστεί.

Ας συκγρίνουμε το `||`:
=======
The OR `||` operator exists since the beginning of JavaScript, so developers were using it for such purposes for a long time.

On the other hand, the nullish coalescing operator `??` was added only recently, and the reason for that was that people weren't quite happy with `||`.

The subtle, yet important difference is that:
- `||` returns the first *truthy* value.
- `??` returns the first *defined* value.

In other words, `||` doesn't distinguish between `false`, `0`, an empty string `""` and `null/undefined`. They are all the same -- falsy values. If any of these is the first argument of `||`, then we'll get the second argument as the result.

In practice though, we may want to use default value only when the variable is `null/undefined`. That is, when the value is really unknown/not set.

For example, consider this:
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

```js run
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

<<<<<<< HEAD
Εδώ, `height || 100` αντιμετωπίζει το μηδέν ύψος ως μη ορισμένο, όπως το `null`, το `undefined` ή οποιαδήποτε άλλη τιμή falsy.
Έτσι το αποτέλεσμα είναι `100`.
=======
Here, we have a zero height.
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

- The `height || 100` checks `height` for being a falsy value, and it really is.
    - so the result is the second argument, `100`.
- The `height ?? 100` checks `height` for being `null/undefined`, and it's not,
    - so the result is `height` "as is", that is `0`.

<<<<<<< HEAD
Το `height ?? 100` επιστρέφει το `100` μόνο εάν το `height` είναι `null` ή `undefined`. Έτσι, το `alert` δείχνει την τιμή ύψους `0` "ως έχει".
=======
If we assume that zero height is a valid value, that shouldn't be replaced with the default, then `??` does just the right thing.
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

Ποια συμπεριφορά είναι καλύτερη εξαρτάται από μια συγκεκριμένη περίπτωση χρήσης. Όταν το μηδέν ύψος είναι μια έγκυρη τιμή, τότε το `??` είναι προτιμότερο.

<<<<<<< HEAD
## Προτεραιότητα

Η προτεραιότητα του τελεστή `??` είναι μάλλον χαμηλή: `5` στο
[πίνακα MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).

Για αυτό το `??` αξιολογείται μετά τις υπόλοιπες λειτουργίες, αλλά πριν από το `=` και το `?`.

Εάν χρεαστούμε να επιλέξουμε μια τιμή με `??` σε μια σύνθετη έκφραση, τότε να λαμβάνεται υπ όψιν να προσθέσετε παρενθέσεις:
=======
The precedence of the `??` operator is rather low: `5` in the [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table). So `??` is evaluated before `=` and `?`, but after most other operations, such as `+`, `*`.

So if we'd like to choose a value with `??` in an expression with other operators, consider adding parentheses:
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

```js run
let height = null;
let width = null;

// Προσοχή: χρησιμοποιηστε παρενθέσεις
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```
Διαφορετικά, εάν παραλείψουμε παρενθέσεις, το `*` έχει την υψηλότερη προτεραιότητα από το `??` και θα τρέξει πρώτα.

<<<<<<< HEAD
Αυτό θα λειτουργούσε ακριβώς το ίδιο με:

```js
// μάλλον δεν είναι σωστό
let area = height ?? (100 * width) ?? 50;
```

Υπάρχει επίσης ένας σχετικός περιορισμός σε επίπεδο γλώσσας.

**Για λόγους ασφαλείας, απαγορεύεται η χρήση του τελεστή `??` με `&&` και `||`.**
=======
Otherwise, if we omit parentheses, then as `*` has the higher precedence than `??`, it would execute first, leading to incorrect results.

```js
// without parentheses
let area = height ?? 100 * width ?? 50;

// ...works the same as this (probably not what we want):
let area = height ?? (100 * width) ?? 50;
```

### Using ?? with && or ||

Due to safety reasons, JavaScript forbids using `??` together with `&&` and `||` operators, unless the precedence is explicitly specified with parentheses.
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

Ο παρακάτω κώδικας ενεργοποιεί ένα σφάλμα σύνταξης:

```js run
let x = 1 && 2 ?? 3; // Syntax error
```
Ο περιορισμός είναι σίγουρα συζητήσιμος, αλλά προστέθηκε στις προδιαγραφές γλώσσας με σκοπό να αποφευχθούν λάθη προγραμματισμού, καθώς οι άνθρωποι αρχίζουν να αλλάζουν σε `??` από `||`.

<<<<<<< HEAD
Χρησιμοποιήστε ρητές παρενθέσεις για να το επιλύσετε:
=======
The limitation is surely debatable, but it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch to `??` from `||`.

Use explicit parentheses to work around it:
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

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

<<<<<<< HEAD
- Ο τελεστής `??` έχει πολύ χαμηλή προτεραιότητα, λίγο υψηλότερος από το `?` και το `=`.
- Απαγορεύεται η χρήση του με `||`" ή `&&` χωρίς ρητές παρενθέσεις.
=======
- The operator `??` has a very low precedence, a bit higher than `?` and `=`, so consider adding parentheses when using it in an expression.
- It's forbidden to use it with `||` or `&&` without explicit parentheses.
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d
