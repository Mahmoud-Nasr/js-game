/**
 *
 */
export default class WordObj {
  /**
   *
   * @param {String} name word letters
   * @param {Number} score
   * @param {*} level
   */
  constructor(name, score, level) {
    this.Name = name;
    this.Score = score;
    this.Level = level;
    this.isAdded = false;
  }

  /**
   * @return {Number}
   */
  GetLength() {
    return this.Name.length;
  }

  /**
   * flag is added
   */
  isAddedWell() {
    this.isAdded = true;
  }
}
