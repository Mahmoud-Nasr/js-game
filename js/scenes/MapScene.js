import Scene from './Scene.js';

/**
 *
 */
export default class MapScene extends Scene {
  /**
   * MapScene constructor
   * @param {HTMLElement} $dom home scene container element
   * @param {SceneManager} sceneManager scene manager
   * @param {LevelManager} levelManager level manager
   * @param {HTMLElement} $homeButton go to home scene button
   */
  constructor($dom, sceneManager, levelManager, $homeButton) {
    if (!MapScene._instance || !(MapScene._instance instanceof MapScene)) {
      super($dom, sceneManager);
      MapScene._instance = this;

      this._levelManager = levelManager;
      this.initRoundButtons();

      this._$homeButton = $homeButton;
      this._$homeButton.addEventListener('click', () => {
        this._sceneManager.setActiveScene(this._sceneManager.getHomeScene());
      });
    }
    return MapScene._instance;
  }

  /**
   * initializes MapScene DOM
   */
  initRoundButtons() {
    const $roundTable = document.querySelector('#tLevels');
    const levelCount = this._levelManager.getLevelCount();
    const rowCount = Math.ceil(levelCount / 3);

    for (let row = 0; row < rowCount; row++) {
      const $newRow = document.createElement('tr');
      const rowStart = row * 3;
      const rowEnd = rowStart + 3;

      for (let i = rowStart; i < rowEnd; i++) {

        const $newLevel = document.createElement('td');
        $newLevel.classList.add('level');
        $newLevel.appendChild(document.createTextNode('Round ' + (i + 1)));
        $newLevel.addEventListener('click', () => {
          this._levelManager.loadLevel(i);
          this._sceneManager.setActiveScene(this._sceneManager.getGameScene());
        });

        if (row % 2 === 0) {
          $newRow.appendChild($newLevel);
        } else {
          $newRow.prepend($newLevel);
        }

        if (i !== rowEnd - 1) {
          const $levelArrow = document.createElement('td');
          $levelArrow.classList.add(row % 2 === 0 ? 'arrow' : 'arrowback');
          if (row % 2 === 0) {
            $newRow.appendChild($levelArrow);
          } else {
            $newRow.prepend($levelArrow);
          }
        }
      }

      $roundTable.appendChild($newRow);

      if (row !== rowCount - 1 && row % 2 === 0) {
        const $rowArrow = document.createElement('tr');
        const $rowArrowCell = document.createElement('td');
        $rowArrowCell.classList.add('arrowReverse', 'freearrow');
        $rowArrowCell.colSpan = 5;
        $rowArrow.appendChild($rowArrowCell);

        const $rowSpace = document.createElement('tr');
        const $rowSpaceCell = document.createElement('td');
        $rowSpaceCell.classList.add('space');
        $rowSpaceCell.colSpan = 5;
        $rowSpace.appendChild($rowSpaceCell);

        $roundTable.appendChild($rowArrow);
        $roundTable.appendChild($rowSpace);
      }

      if (row !== rowCount - 1 && row % 2 === 1) {
        const $rowArrow = document.createElement('tr');
        const $rowArrowCell = document.createElement('td');
        $rowArrowCell.classList.add('arrowReverse');
        $rowArrowCell.colSpan = 5;
        $rowArrow.appendChild($rowArrowCell);

        $roundTable.appendChild($rowArrow);
      }
    }
  }
}
  //       <tr>
  //         <td class="arrowReverse" colspan="5"></td>
  //       </tr>
