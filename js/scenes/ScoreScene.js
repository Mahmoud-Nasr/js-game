import Scene from './Scene.js';

/**
 * home scene
 */
export default class ScoreScene extends Scene {
  /**
   * ScoreScene constructor
   * @param {HTMLElement} $dom home scene container element
   * @param {SceneManager} sceneManager scene manager
   * @param {HTMLElement} $homeButton button to activate MapScene
   */
  constructor($dom, sceneManager, $homeButton) {
    if (!ScoreScene._instance ||
        !(ScoreScene._instance instanceof ScoreScene)) {
      super($dom, sceneManager);
      ScoreScene._instance = this;

      this._$homeButton = $homeButton;
      this._$homeButton.addEventListener('click', () => {
        this._sceneManager.setActiveScene(this._sceneManager.getHomeScene());
      });
    }
    return ScoreScene._instance;
  }
}
