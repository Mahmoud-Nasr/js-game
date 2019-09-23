/**
 *
 */
export default class Scene {
  /**
   *
   * @param {HTMLElement} $dom a css color
   * @param {SceneManger} sceneManager scene manager
   */
  constructor($dom, sceneManager) {
    if (!($dom instanceof HTMLElement)) {
      throw new Error('no HTMLElement is defined');
    }
    this._$dom = $dom;
    this._sceneManager = sceneManager;
  }

  /**
   * hide the scene
   */
  hide() {
    this._$dom.classList.remove('active');
  }

  /**
   * show the scene
   */
  show() {
    this._$dom.classList.add('active');
  }
}
