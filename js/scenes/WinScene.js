import Scene from './Scene.js';

/**
 * home scene
 */
export default class WinScene extends Scene {
  /**
   * WinScene constructor
   * @param {HTMLElement} $dom home scene container element
   * @param {SceneManager} sceneManager scene manager
   * @param {LevelManager} levelManager level manager
   * @param {HTMLElement} $nextButton button to next level GameScene
   */
  constructor($dom, sceneManager, levelManager, $nextButton) {
    if (!WinScene._instance || !(WinScene._instance instanceof WinScene)) {
      super($dom, sceneManager);
      WinScene._instance = this;

      this._levelManager = levelManager;

      this._$nextButton = $nextButton;
      this._$nextButton.addEventListener('click', () => {
        const levelCount = this._levelManager.getLevelCount();
        const currentLevel = this._levelManager.getActiveLevel().number;
        if (currentLevel < levelCount) {
          this._levelManager.loadLevel(currentLevel);
          this._sceneManager.setActiveScene(this._sceneManager.getGameScene());
        } else {
          this._sceneManager.setActiveScene(this._sceneManager.getHomeScene());
        }
      });
    }
    return WinScene._instance;
  }

  /**
   * load winScene
   */
  show() {
    this._$title = document.createElement('h1');
    this._$title.textContent = 'Level Finished: your score is ' + this._levelManager._finalScore;
    this._$dom.appendChild(this._$title);
    super.show();
  }

  /**
   * unload WinScene
   */
  hide() {
    this._$dom.removeChild(this._$title);
    this._$title = null;
    super.hide();
  }
}
