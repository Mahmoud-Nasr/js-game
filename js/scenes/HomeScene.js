import Scene from './Scene.js';

/**
 * home scene
 */
export default class HomeScene extends Scene {
  /**
   * HomeScene constructor
   * @param {HTMLElement} $dom home scene container element
   * @param {SceneManager} sceneManager scene manager
   * @param {HTMLElement} $playButton button to activate MapScene
   * @param {HTMLElement} $scoreButton button to activate ScoreScene
   */
  constructor($dom, sceneManager, $playButton, $scoreButton) {
    if (!HomeScene._instance || !(HomeScene._instance instanceof HomeScene)) {
      super($dom, sceneManager);
      HomeScene._instance = this;

      this._$playButton = $playButton;
      this._$playButton.addEventListener('click', (e) => {
        this._sceneManager.setActiveScene(this._sceneManager.getMapScene());
      });

      this._$scoreButton = $scoreButton;
      this._$scoreButton.addEventListener('click', (e) => {
        this._sceneManager.setActiveScene(this._sceneManager.getScoreScene());
      });
    }
    return HomeScene._instance;
  }
}
