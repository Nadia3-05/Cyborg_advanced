// export function replaceBadWords(string) {
//     let badWords = ["fuck", "shit"];
//     badWords.concat(badWords)
//         .forEach((el) => (string = string
//             .replaceAll(el, "*"
//                 .repeat(el.length)))
//         );
//     return string;
// }

export function dividedByThree (word) {
    const wordAll = word.toLowerCase().replaceAll(" ", "");
    const newWordThree = wordAll.match(/.{1,3}/gi);
      return newWordThree;
  }