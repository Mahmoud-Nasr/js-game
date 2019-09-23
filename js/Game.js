import SceneManager from './scenes/SceneManager.js';
import LevelManager from './levels/LevelManager.js';

/**
 * the global class game
 */
export default class Game {
  /**
   *
   */
  constructor() {
    this._levelManager = new LevelManager();
    this._sceneManager = new SceneManager(this._levelManager);
  }

  /**
   * initialize game
   */
  init() {
    this._sceneManager.init();
  }
}
