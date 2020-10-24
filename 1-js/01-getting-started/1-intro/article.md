# Εισαγωγή στον κόσμο της JavaScript

Ας δούμε τι είναι τόσο απίθανο στην JavaScript, τι μπορούμε να φτιάξουμε με αυτήν, και ποιες άλλες τεχνολογίες μπορούμε να χρησιμοποιήσουμε με αυτήν.

## Τι είναι η JavaScript?

Η *JavaScript* είχε φτιαχτεί για να *ζωντανέψει τις ιστοσελίδες*

Τα προγράμματα σε αυτήν τη γλώσσα λέγονται *scripts*. Μπορούν να γραφτούν κατευθείαν στην κονσόλα του browser ή στο HTML μίας ιστοσελίδας και να τρέχονται όταν φορτώνει η ιστοσελίδα.

Τα scripts τρέχονται σαν κανονικό κείμενο, δεν χρειάζεταινα τα κάνουμε compile.

Σε αυτό το σημείο, να συμπληρώσω οτι η JavaScript έχει μεγάλη διάφορα με την [Java](https://en.wikipedia.org/wiki/Java_(programming_language)).

'''smart header="Γιατί <u>Java</u>Script?"
Όταν είχε φτιαχτεί η JavaScript, είχε ένα διαφορετικό όνομά, λεγότανε "LiveScript". Αλά η Java ήταν πολύ γνωστή εκείνη την εποχή, οπότε αποφασίστηκε οτι θα βοηθούσε αν έκαναν την γλωσσά προγραμματισμού τον "μικρο αδελφό" της Java.

Αλλά καθώς εξελίχθηκε, η JavaScript έγινε μια πλήρως ανεξάρτητη γλώσσα με τη δική της προδιαγραφή που ονομάζεται [ECMAScript] (http://en.wikipedia.org/wiki/ECMAScript), και τώρα δεν έχει καμία σχέση με την Java

Σήμερα, Μπορούμε να τρέξουμε την JavaScript και στον server, και σε οποιαδήποτε συσκευή που έχει ένα δικό της πρόγραμμά που λέγετε [JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine).

Το browser έχει ένα ενσωματωμένο JavaScript engine που συνηθως λέγεται "JavaScript virtual machine".


Κάθε engine έχει δικό του "codename". Για παράδειγμά:

- [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) -- στο Chrome και Opera.
- [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey) -- στο Firefox.
- ...Υπάρχουν και άλλα codenames οπός το "Trident" και "Chakra" για διαφορετικές εκδόσεις του Internet Explorer, "ChakraCore" για το Microsoft Edge, "Nitro" και "SquirrelFish" γα το Safari, κα.

Είναι κάλο να θυμόμαστε τους παρακάτω ορούς γιατί χρησιμοποιούνται σε άρθρα προγραμματιστών στο Internet. Και θα τα χρησιμοποιήσουμε και σε αυτό το tutorial.
'''smart header="How do engines work?"

Engines are complicated. But the basics are easy.

1. The engine (embedded if it's a browser) reads ("parses") the script.
2. Then it converts ("compiles") the script to the machine language.
3. And then the machine code runs, pretty fast.

The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and applies optimizations to the machine code based on that knowledge. When it's done, scripts run quite fast.
'''

## What can in-browser JavaScript do?

Modern JavaScript is a "safe" programming language. It does not provide low-level access to memory or CPU, because it was initially created for browsers which do not require it.

JavaScript's capabilities greatly depend on the environment it's running in. For instance, [Node.js](https://wikipedia.org/wiki/Node.js) supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.

In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.

For instance, in-browser JavaScript is able to:

- Add new HTML to the page, change the existing content, modify styles.
- React to user actions, run on mouse clicks, pointer movements, key presses.
- Send requests over the network to remote servers, download and upload files (so-called [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) and [COMET](https://en.wikipedia.org/wiki/Comet_(programming)) technologies).
- Get and set cookies, ask questions to the visitor, show messages.
- Remember the data on the client-side ("local storage").

## What CAN'T in-browser JavaScript do?

JavaScript's abilities in the browser are limited for the sake of the user's safety. The aim is to prevent an evil webpage from accessing private information or harming the user's data.

Examples of such restrictions include:

- JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.

Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like "dropping" a file into a browser window or selecting it via an '<input>' tag.


There are ways to interact with camera/microphone and other devices, but they require a user's explicit permission. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the [NSA](https://en.wikipedia.org/wiki/National_Security_Agency).

- Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other if they come from different sites (from a different domain, protocol or port).

This is called the "Same Origin Policy". To work around that, *both pages* must agree for data exchange and contain a special JavaScript code that handles it. We'll cover that in the tutorial.

This limitation is, again, for the user's safety. A page from 'http://anysite.com' which a user has opened must not be able to access another browser tab with the URL 'http://gmail.com' and steal information from there.
- JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that's a safety limitation.

![](limitations.svg)

Such limits do not exist if JavaScript is used outside of the browser, for example on a server. Modern browsers also allow plugin/extensions which may ask for extended permissions.

## What makes JavaScript unique?

There are at least *three* great things about JavaScript:

'''compare
+ Full integration with HTML/CSS.
+ Simple things are done simply.
+ Support by all major browsers and enabled by default.
'''
JavaScript is the only browser technology that combines these three things.

That's what makes JavaScript unique. That's why it's the most widespread tool for creating browser interfaces.

While planning to learn a new technology, it's beneficial to check its perspectives. So let's move on to the modern trends affecting it, including new languages and browser abilities.

## Languages "over" JavaScript

The syntax of JavaScript does not suit everyone's needs. Different people want different features.

That's to be expected, because projects and requirements are different for everyone.

So recently a plethora of new languages appeared, which are *transpiled* (converted) to JavaScript before they run in the browser.

Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it "under the hood".

Examples of such languages:

- [CoffeeScript](http://coffeescript.org/) is a "syntactic sugar" for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.
- [TypeScript](http://www.typescriptlang.org/) is concentrated on adding "strict data typing" to simplify the development and support of complex systems. It is developed by Microsoft.
- [Flow](http://flow.org/) also adds data typing, but in a different way. Developed by Facebook.
- [Dart](https://www.dartlang.org/) is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.
- [Brython](https://brython.info/) is a Python transpiler to JavaScript that allow to write application in pure Python without JavaScript.

There are more. Of course, even if we use one of transpiled languages, we should also know JavaScript to really understand what we're doing.

## Summary

- JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.
- Today, JavaScript has a unique position as the most widely-adopted browser language with full integration in HTML/CSS.
- There are many languages that get "transpiled" to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.
