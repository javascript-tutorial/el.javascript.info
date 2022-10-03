# Το μοντέρνο JavaScript Tutorial στα Ελληνικά

<<<<<<< HEAD
Αυτό το αποθετήριο φιλοξενεί τη μετάφραση <https://javascript.info> στα ελληνικά.
=======
This repository hosts the English content of the Modern JavaScript Tutorial, published at [https://javascript.info](https://javascript.info).
>>>>>>> 18b1314af4e0ead5a2b10bb4bacd24cecbb3f18e

**Πώς μπορείς να βοηθήσεις:**

- Κοίτα την [Ελληνική μετάφραση σε εξέλιξη](https://github.com/javascript-tutorial/el.javascript.info/issues/1).
- Επιλέξτε ένα μη επιλεγμένο άρθρο που θέλετε να μεταφράσετε.
- Προσθέστε ένα σχόλιο με τον τίτλο του άρθρου στο θέμα, π.χ. `An Introduction to JavaScript`.
- Το bot μας θα το επισημάνει στο issue, για να γνωρίζουν όλοι ότι το μεταφράζετε.
- Το σχόλιό σας πρέπει να περιέχει μόνο τον τίτλο.
- Πιέστε το αποθετήριο, μεταφράστε και στείλτε ένα PR όταν τελειώσετε.
- Ο τίτλος PR πρέπει να ταιριάζει με τον τίτλο του άρθρου, το bot θα γράψει τον αριθμό του στο issue.	
		
Επιτρέψτε στους συντηρητές να ελέγχουν και να συγχωνεύουν ή να ζητούν αλλαγές στη μετάφρασή σας.
   
Εάν οι συντηρητές δεν ανταποκρίνονται ή αν θέλετε να γίνετε συντηρητής, γράψτε μας στο [main repo](https://github.com/javascript-tutorial/en.javascript.info/issues/new).
    
**Ενημερώστε τους άλλους τι μεταφράζετε, σε πίνακες μηνυμάτων ή συζητήσεις στη γλώσσα σας. Προσκαλέστε τους να συμμετάσχουν!**

🎉 Σας ευχαριστώ!
Το όνομά σας και το μέγεθος της συνεισφοράς θα εμφανιστούν στη σελίδα "Σχετικά με το έργο" κατά τη δημοσίευση της μετάφρασης.

P.S. Μπορείτε να βρείτε την πλήρη λίστα γλωσσών στη διεύθυνση <https://javascript.info/translate>.


<<<<<<< HEAD
## Δόμη

Κάθε κεφάλαιο, ένα άρθρο ή μια εργασία βρίσκεται στον δικό του φάκελο.
=======
Something's wrong? A topic is missing? Explain it to people, add it as PR 👏

**You can edit the text in any editor.** The tutorial uses an enhanced "markdown" format, easy to grasp. And if you want to see how it looks on-site, there's a server to run the tutorial locally at <https://github.com/javascript-tutorial/server>.
>>>>>>> 18b1314af4e0ead5a2b10bb4bacd24cecbb3f18e

Ο φάκελος ονομάζεται `N-url`, όπου `N` - είναι ο αριθμός για ταξινόμηση (τα άρθρα που είναι στοιχισμένα) και το `url` είναι το URL-slug στον ιστότοπο.

Ο φάκελος έχει ένα από τα αρχεία:

<<<<<<< HEAD
- `index.md` είναι για την ενότητα,
- `article.md` είναι για το άρθρο,
- `task.md` για μια διατύπωση εργασιών (+`solution.md` με το κείμενο της λύσης εάν υπάρχει).

Ένα αρχείο ξεκινά με το `# Title Header` και έπειτα το κείμενο σε μορφή τύπου Markdown, επεξεργάσιμο σε ένα απλό πρόγραμμα επεξεργασίας κειμένου.
=======
Every chapter, article, or task has its folder.

The folder is named like `N-url`, where `N` is a number for the sorting purposes and `URL` is the URL part with the title of the material.
>>>>>>> 18b1314af4e0ead5a2b10bb4bacd24cecbb3f18e

Πρόσθετοι πόροι και παραδείγματα για το άρθρο ή την εργασία, βρίσκονται επίσης στον ίδιο φάκελο.


## Συμβουλές για την μετάφραση

Διατηρήστε τις αλλαγές γραμμής και τις παραγράφους "ως έχει": μην προσθέσετε νέες γραμμές και μην καταργήσετε τις υπάρχουσες. Διευκολύνει τη συγχώνευση μελλοντικών αλλαγών από την αγγλική έκδοση στη μετάφραση. 

Εάν δείτε ότι η αγγλική έκδοση μπορεί να βελτιωθεί - υπέροχα, στείλτε ένα PR σε αυτό.

### Όροι

- Ορισμένοι όροι προδιαγραφών δεν χρειάζονται μετάφραση π.χ. Η "Function Declaration" μπορεί να παραμείνει "ως έχει". 
- Για άλλους όρους όπως `resolved promise`, `slash`, `regexp` και ούτω καθεξής - αναζητήστε ένα γλωσσάριο, ελπίζουμε ότι υπάρχει ήδη για τη γλώσσα σας. Εάν όχι, αναζητήστε μεταφράσεις σε εγχειρίδια, όπως [MDN](https://developer.mozilla.org/en-US/).

### Κείμενο σε μπλοκ κώδικα

- Μεταφράστε τα σχόλια.
- Μετάφραση μηνυμάτων χρήστη και συμβολοσειρών παραδείγματος.
- Μην μεταφράζετε μεταβλητές, classes, identifiers.
- Βεβαιωθείτε ότι ο κώδικας λειτουργεί μετά τη μετάφραση :)

Παράδειγμα:

```js
// Example
const text = "Hello, world";
document.querySelector('.hello').innerHTML = text;
```

✅ Μεταφράστε (την μετάφραση σχολίων):

```js
// Ejemplo
const text = 'Hola mundo';
document.querySelector('.hello').innerHTML = text;
```

❌ Μην το μεταφράστε (το class):

```js
// Ejemplo
const text = 'Hola mundo';
// ".hello" is a class
// DO NOT TRANSLATE
document.querySelector('.hola').innerHTML = text;
```


### Εξωτερικοί σύνδεσμοι.

Εάν ένας εξωτερικός σύνδεσμος προορίζεται για τη Wikipedia, π.χ. `https://en.wikipedia.org/wiki/JavaScript`, και υπάρχει μια έκδοση αυτού του άρθρου στη γλώσσα σας που είναι καλής ποιότητας, συνδέστε την με αυτήν την έκδοση.

Παράδειγμα:

```md
[JavaScript](https://en.wikipedia.org/wiki/JavaScript) είναι μια γλώσσα προγραμματισμού.
```

✅ OK (en -> es):

```md
[JavaScript](https://es.wikipedia.org/wiki/JavaScript) es un lenguaje de programación.
```

Για συνδέσμους προς MDN, η εν μέρει μεταφρασμένη έκδοση είναι εντάξει. 

Εάν ένα συνδεδεμένο άρθρο δεν έχει μεταφρασμένη έκδοση, αφήστε τον σύνδεσμο "ως έχει".

### Metadata

Some files, usually tasks, have YAML at the top, delimited by 
Ορισμένα αρχεία, συνήθως εργασίες, έχουν YAML metadata στην κορυφή, οριοθετημένα από `---`:

```md
importance: 5


Μην μεταφράζετε το "importance" (και ολα τα metadata).

### Anchors

Μερικοί τίτλοι εχουν `[#anchor]` στο τέλος, π.χ.

```md
## Spread operator [#spread-operator]

```

Μην μεταφράζετε ή  αφαίρειτε `[#...]` part, είναι για τα URL anchors.

## Running locally

Μπορείτε να εκτελέσετε τον server τοπικά για να δείτε πώς φαίνεται η μετάφραση.


Για την εγκατάσταση του server βλεπε εδω 
<https://github.com/javascript-tutorial/server>. 

