/**
 *
 */
export default class Level {
  /**
   *
   * @param {Number} number level number
   * @param {WordObj[]} ListOfWords list of words for this level
   * @param {Number} time tie allowed in seconds
   * @param {String[]} buttonLetters array of letters allowed
   */
  constructor(number, ListOfWords, time, buttonLetters) {
    this.number = number;
    this.ListOfWords = ListOfWords;
    this.time = time;
    this.buttonLetters = buttonLetters;
  }

  /**
   * search for word in level words
   * @param {String} word string to seach for
   * @return {String}
   */
  searchWordList(word) {
    const result = this.ListOfWords.find((myword) => {
      return myword.Name.toLowerCase() === word.toLowerCase() && myword.isAdded === false;
    });
    return result;
  }

  /**
   * change added state to true
   * @param {String} word word to change state for
   */
  changeWordAddedState(word) {
    const indexOfWord = this.ListOfWords.indexOf(word);
    this.ListOfWords[indexOfWord].isAddedWell();
  }
}
