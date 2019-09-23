import Scene from './Scene.js';
import HomeScene from './HomeScene.js';
import MapScene from './MapScene.js';
import GameScene from './GameScene.js';
import ScoreScene from './ScoreScene.js';
import WinScene from './WinScene.js';

/**
 *
 */
export default class SceneManager {
  /**
   *
   * @param {LevelManager} levelManager manager instace reference
   */
  constructor(levelManager) {
    if (
      !SceneManager._instance ||
      !(SceneManager._instance instanceof SceneManager)
    ) {
      this._activeScene = null;
      this._scenes = {
        homeScene: new HomeScene(
            document.querySelector('#home-scene'),
            this,
            document.querySelector('#play-button'),
            document.querySelector('#score-button')
        ),
        scoreScene: new ScoreScene(
            document.querySelector('#score-scene'),
            this,
            document.querySelector('#score-home-button'),
        ),
        mapScene: new MapScene(
            document.querySelector('#map-scene'),
            this,
            levelManager,
            document.querySelector('#map-home-button'),
        ),
        gameScene: new GameScene(
            document.querySelector('#game-scene'),
            this,
            levelManager,
            document.querySelector('#game-home-button'),
            document.querySelector('#game-map-button'),
        ),
        winScene: new WinScene(
            document.querySelector('#win-scene'),
            this,
            levelManager,
            document.querySelector('#next-button'),
        ),
      };
      SceneManager._instance = this;
    }
    return SceneManager._instance;
  }

  /**
   * initializes scene related stuff
   */
  init() {
    this.setActiveScene(this._scenes.homeScene);
  }

  /**
   * changes the active scene to newScene
   * @param {Scene} newScene the new active scene
   */
  setActiveScene(newScene) {
    if (!(newScene instanceof Scene)) {
      throw new Error('newScene is not provided');
    }
    if (this._activeScene) {
      this._activeScene.hide();
    }
    this._activeScene = newScene;
    this._activeScene.show();
  }

  /**
   * returns a reference to the HomeScene instance
   * @return {HomeScene}
   */
  getHomeScene() {
    return this._scenes.homeScene;
  }

  /**
   * returns a reference to the ScoreScene instance
   * @return {ScoreScene}
   */
  getScoreScene() {
    return this._scenes.scoreScene;
  }

  /**
   * returns a reference to the MapScene instance
   * @return {MapScene}
   */
  getMapScene() {
    return this._scenes.mapScene;
  }

  /**
   * returns a reference to the GameScene instance
   * @return {GameScene}
   */
  getGameScene() {
    return this._scenes.gameScene;
  }

  /**
   * returns a reference to the WinScene instance
   * @return {WinScene}
   */
  getWinScene() {
    return this._scenes.winScene;
  }
}
