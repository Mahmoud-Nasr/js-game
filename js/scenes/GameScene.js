import Scene from './Scene.js';

/**
 * game scene
 */
export default class GameScene extends Scene {
  /**
   * GameScene constructor
   * @param {HTMLElement} $dom game scene container element
   * @param {SceneManager} sceneManager scene manager
   * @param {LevelManager} levelManager level manager
   * @param {HTMLElement} $homeButton go to home scene button
   * @param {HTMLElement} $mapButton go to map scene button
   */
  constructor($dom, sceneManager, levelManager, $homeButton, $mapButton) {
    if (!GameScene._instance || !(GameScene._instance instanceof GameScene)) {
      super($dom, sceneManager);
      GameScene._instance = this;

      this._levelManager = levelManager;

      this._$homeButton = $homeButton;
      this._$homeButton.addEventListener('click', () => {
        this._sceneManager.setActiveScene(this._sceneManager.getHomeScene());
      });

      this._$mapButton = $mapButton;
      this._$mapButton.addEventListener('click', () => {
        this._sceneManager.setActiveScene(this._sceneManager.getMapScene());
      });

      const $checkBtn = document.querySelector('#checkbtn');
      $checkBtn.addEventListener('click', () => {
        const levelFinished = this._levelManager.checkWord();
        if (levelFinished) {
          this._sceneManager.setActiveScene(this._sceneManager.getWinScene());
        }
      });
    }
    return GameScene._instance;
  }

  /**
   * load the game scene
   */
  // show() {
  //   const activeLevel = this._levelManager.getActiveLevel();
  //   this._$title = document.createElement('h1');
  //   this._$title.textContent = 'playing round ' + activeLevel;
  //   this._$dom.appendChild(this._$title);
  //   super.show();
  // }

  /**
   * unload game scene
   */
  // hide() {
  //   this._$title.remove();
  //   super.hide();
  // }
}
