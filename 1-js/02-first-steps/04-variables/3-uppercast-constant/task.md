importance: 4

---

# Const με κεφαλαία?

Εξέτασε τον παρακάτω κώδικα:

```js
const birthday = '18.04.1982';

const age = someCode(birthday);
```

<<<<<<< HEAD
Εδώ έχουμε μια σταθερή ημερομηνία "birthday" και η "age" υπολογίζεται από "birthday" με τη βοήθεια κάποιου κωδικού (δεν παρέχεται για βραχύτητα και επειδή οι λεπτομέρειες δεν έχουν σημασία εδώ).
=======
Here we have a constant `birthday` for the date, and also the `age` constant.

The `age` is calculated from `birthday` using `someCode()`, which means a function call that we didn't explain yet (we will soon!), but the details don't matter here, the point is that `age` is calculated somehow based on the `birthday`.
>>>>>>> ff4ef57c8c2fd20f4a6aa9032ad37ddac93aa3c4

Θα ήταν σωστό να χρησιμοποιήσετε κεφαλαία γράμματα για τα `birthday`; Για `age`; Ή ακόμα και για τα δύο;

```js
<<<<<<< HEAD
const BIRTHDAY = '18.04.1982'; // Με κεφαλαία?

const AGE = someCode(BIRTHDAY); // Με κεφαλαία?
=======
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?
>>>>>>> ff4ef57c8c2fd20f4a6aa9032ad37ddac93aa3c4
```
