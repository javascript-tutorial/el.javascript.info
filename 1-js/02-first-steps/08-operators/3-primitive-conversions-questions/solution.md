
```js no-beautify
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
```

<<<<<<< HEAD
1. Η πρόσθεση με μια συμβολοσειρά όπως π.χ. `"" + 1`, μετατρέπει το `1` σε μια συμβολοσειρά: `"" + 1 = "1"`, και τότε έχουμε `"1" + 0`, όπου ο ίδιος κανόνας εφαρμόζεται.
2. Η αφαίρεση `-` (όπως στις περισσότερες Μαθηματικές πράξεις) λειτουργεί μόνο με αριθμούς, και μετατρέπει μια άδεια συμβολοσειρά `""` σε `0`.
3. Η πρόσθεση με μια συμβολοσειρά, τοποθετεί τον αριθμό `5` στη συμβολοσειρά (επιπλέον παράδειγμα: `5 +"9" = "59"`).
4. Η αφαίρεση μετατρέπει τις τιμές πάντα σε αριθμούς, επομένως εδώ μετατρέπει το `"  -9  "` στον αριθμό `-9` (αγνοώντας τα κενά γύρω του).
5. Η `null` γίνεται `0` μετά την αριθμητική μετατροπή.
6. Η `undefined` γίνεται `NaN` μετά την αριθμητική μετατροπή.
=======
1. The addition with a string `"" + 1` converts `1` to a string: `"" + 1 = "1"`, and then we have `"1" + 0`, the same rule is applied.
2. The subtraction `-` (like most math operations) only works with numbers, it converts an empty string `""` to `0`.
3. The addition with a string appends the number `5` to the string.
4. The subtraction always converts to numbers, so it makes `"  -9  "` a number `-9` (ignoring spaces around it).
5. `null` becomes `0` after the numeric conversion.
6. `undefined` becomes `NaN` after the numeric conversion.
7. Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as `\t`, `\n` and a "regular" space between them. So, similarly to an empty string, it becomes `0`.
>>>>>>> a0bfa924a17cad8e7fee213904b27dbf57c2dbac
