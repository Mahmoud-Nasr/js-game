import LEVELS from './levels.js';

/**
 * stores and manages levels
 */
export default class LevelManager {
  /**
   *
   */
  constructor() {
    if (
      !LevelManager._instance ||
      !(LevelManager._instance instanceof LevelManager)
    ) {
      this._activeLevel = null;
      this._levels = LEVELS;
      this._globalSetting = {};

      const $resetButton = document.getElementById('Resetbtn');
      $resetButton.addEventListener('click', () => this.clearBoxesAndButtons());

      LevelManager._instance = this;
    }
    return LevelManager._instance;
  }

  /**
   * counts the number of levels
   * @return {Number} number of levels
   */
  getLevelCount() {
    return this._levels.length;
  }

  /**
   * loads a level by its number
   * @param {Number} levelNumber number of level to load
   */
  loadLevel(levelNumber) {
    this._activeLevel = this._levels[levelNumber];
    this.reloadTableRows();

    const args = this._activeLevel.buttonLetters;
    this.intilizeButtons(...args);

    this.setRound();
    this._globalSetting.minutes = Math.floor(this._activeLevel.time / 60);
    this._globalSetting.seconds = this._activeLevel.time % 60;
    this._globalSetting.Level = this._activeLevel;
    this._globalSetting.LevelWordsCount = this._activeLevel.ListOfWords.length;
    this._globalSetting.completedWords = 0;
    this._countdownTimer = setInterval(() => this.timer(), 1000);
  }

  /**
   * get active level
   * @return {Number} active level number
   */
  getActiveLevel() {
    return this._activeLevel;
  }

  /**
   *
   */
  reloadTableRows() {
    const MyTable = document.getElementById('tRBody');
    // TABLE ROW.
    MyTable.innerHTML='';
    for (let i = 0; i < this._activeLevel.ListOfWords.length; i++) {
      const tr = MyTable.insertRow(-1);
      for (let x = 0; x < this._activeLevel.ListOfWords[i].GetLength(); x++) {
        const cell= tr.insertCell(x);
        if (this._activeLevel.ListOfWords[i].isAdded) {
          cell.innerText = this._activeLevel.ListOfWords[i].Name[x];
        }
      }
    }
  }

  /**
   * puts buttons of letters
   * @param  {...String} args letters of level
   */
  intilizeButtons(...args) {
    const tfooter = document.getElementById('tfooter');
    tfooter.innerHTML='';
    const tr = tfooter.insertRow(-1);
    for (let x = 0; x < args.length; x++) {
      const cell = tr.insertCell(x);
      cell.innerText = args[x];
      cell.onclick = (event) => {
        const letter = event.currentTarget;
        const contentBox = document.getElementById('inputText');
        contentBox.value += letter.innerText;
        letter.className = 'disabled';
      };
    }
  }

  /**
   *
   */
  setRound() {
    const round = document.getElementById('round');
    round.innerText = this._activeLevel.number;
  }

  /**
   * timer update function
   */
  timer() {
    const minutes = Math.floor(this._globalSetting.minutes);
    const remainingSeconds = this._globalSetting.seconds % 60;
    const pad = (n) => (n < 10 ? '0' + n : n);
    document.getElementById('countdown').innerHTML = pad(minutes) + ':' + pad(remainingSeconds);
    if (this._globalSetting.seconds == 0 && this._globalSetting.minutes==0) {
      clearInterval(this._countdownTimer);
    } else if (this._globalSetting.seconds === 0 && this._globalSetting.minutes > 0) {
      this._globalSetting.minutes--;
      this._globalSetting.seconds = 59;
    } else {
      this._globalSetting.seconds--;
    }
  }

  /**
   * reset word input
   */
  clearBoxesAndButtons() {
    // reset letter buttons
    const tfooter = document.getElementById('tfooter');
    for (let j = 0; j < tfooter.rows[0].cells.length; j++) {
      tfooter.rows[0].cells[j].className = '';
    }
    // clear content box
    document.getElementById('inputText').value = '';
  }

  /**
   *
   */
  checkWord() {
    // function successAlert() {
    //     let score=parseInt(document.getElementById("score").innerText) ;
    //     let timescore=globalSetting.minutes * 60 * 2 +globalSetting.seconds * 2;

    //     alert("your score : "+score + " time Score : "+timescore +" Total Score :"+(timescore+score));
    // }
    const contentBox = document.getElementById('inputText');
    const result = this._activeLevel.searchWordList(contentBox.value);
    if (result !== undefined) {
      // valid area

      // add value to score box
      const $score = document.getElementById('score');
      const currentScore = parseInt($score.innerText);
      $score.innerText = result.Score + currentScore;

      // clear text area
      this.clearBoxesAndButtons();

      // remove from list
      this._activeLevel.changeWordAddedState(result);


      this.reloadTableRows();
      this._globalSetting.completedWords++;

      if (this._globalSetting.LevelWordsCount === this._globalSetting.completedWords) {
        clearInterval(this._countdownTimer);
        this._finalScore = parseInt(document.getElementById('score').innerText) + this._globalSetting.minutes * 60 * 2 + this._globalSetting.seconds * 2;
        // successAlert();
        return true;
      }
    } else {
      // not valid
      this.clearBoxesAndButtons();
      const el = document.createElement('div');
      el.setAttribute('style', 'position:absolute;top:40%;left:20%;background-color:white;');
      el.innerHTML = 'Wrong';
      setTimeout(function() {
        el.parentNode.removeChild(el);
      }, 3000);
      document.body.appendChild(el);
    }
    return false;
  }
}
