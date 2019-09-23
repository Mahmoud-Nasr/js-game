import Level from './Level.js';
import WordObj from './WordObj.js';


const LEVELS = [
  new Level(
      1,
      [
        new WordObj('up', 50, 1),
        new WordObj('cup', 75, 1),
      ],
      60,
      ['P', 'U', 'C']
  ),

  new Level(
      2,
      [
        new WordObj('at', 50, 2),
        new WordObj('tab', 75, 2),
        new WordObj('bat', 75, 2),
      ],
      60,
      ['A','B','T']
  ),

  new Level(
      3,
      [
        new WordObj('it', 50, 3),
        new WordObj('if', 50, 3),
        new WordObj('fit', 75, 3),
      ],
      60,
      ['F','T','I']
  ),
  new Level(
    4,
    [
      new WordObj('it', 50, 4),
      new WordObj('tip', 75, 4),
      new WordObj('pit', 75, 4),
    ],
    60,
    ['P','T','I']
),
new Level(
  5,
  [
    new WordObj('go', 50, 5),
    new WordObj('jog', 75, 5),
  ],
  60,
  ['G','O','J']
),
new Level(
  6,
  [
    new WordObj('to', 50, 6),
    new WordObj('toe', 75, 6),
  ],
  60,
  ['E','T','O']
),
new Level(
  7,
  [
    new WordObj('am', 50, 7),
    new WordObj('mad', 75, 7),
    ],
  60,
  ['D','M','A']
),
new Level(
  8,
  [
    new WordObj('is', 50, 8),
    new WordObj('in', 50, 8),
    new WordObj('sin', 75, 8),
  ],
  60,
  ['N','I','S']
),
new Level(
  9,
  [
    new WordObj('am', 50, 9),
    new WordObj('an', 50, 9),
    new WordObj('man', 75, 9),
  ],
  60,
  ['A','M','N']
),
new Level(
  10,
  [
    new WordObj('be', 50, 10),
    new WordObj('bet', 75, 10),
  ],
  60,
  ['E','T','B']
),
new Level(
  11,
  [
    new WordObj('or', 50, 11),
    new WordObj('orb', 75, 11),
    new WordObj('rob', 75, 11),
  ],
  90,
  ['B','R','O']
),
new Level(
  12,
  [
    new WordObj('fit', 75, 12),
    new WordObj('lit', 75, 12),
    new WordObj('lift', 100, 12),
  ],
  90,
  ['F','T','I','L']
),
new Level(
  13,
  [
    new WordObj('go', 50, 13),
    new WordObj('of', 50, 13),
    new WordObj('fog', 75, 13),
  ],
  90,
  ['F','G','O']
),
new Level(
  14,
  [
    new WordObj('rub', 75, 14),
    new WordObj('run', 75, 14),
    new WordObj('urn', 75, 14),
    new WordObj('burn', 100, 14),
   
  ],
  90,
  ['U','B','R','N']
),
new Level(
  15,
  [
    new WordObj('in', 50, 15),
    new WordObj('if', 50, 15),
    new WordObj('fin', 75, 15),
  ],
  90,
  ['F','N','I']
),
new Level(
  16,
  [
    new WordObj('use', 75, 16),
    new WordObj('sue', 75, 16),
  ],
  90,
  ['U','E','S']
),
new Level(
  17,
  [
    new WordObj('of', 50, 17),
    new WordObj('folk', 100, 17),
  ],
  90,
  ['K','L','O','F']
),
new Level(
  18,
  [
    new WordObj('fog', 75, 18),
    new WordObj('log', 75, 18),
    new WordObj('golf', 100, 18),
  ],
  90,
  ['F','L','G','O']
),
new Level(
  19,
  [
    new WordObj('as', 50, 19),
    new WordObj('at', 50, 19),
    new WordObj('last', 100, 19),
    new WordObj('salt', 100, 19),
  ],
  90,
  ['A','T','S','L']
),

new Level(
  20,
  [
    new WordObj('law', 75, 20),
    new WordObj('walk', 100, 20),
  ],
  120,
  ['A','K','W','L']
),
new Level(
  21,
  [
    new WordObj('me', 50, 21),
    new WordObj('lime', 100, 21),
    new WordObj('mile', 100, 21),
  ],
  120,
  ['M','I','E','L']
),
new Level(
  22,
  [
    new WordObj('back', 100, 22),
    new WordObj('lack', 100, 22),
    new WordObj('black', 150, 22),
  ],
  120,
  ['B','C','A','L','K']
),
new Level(
  23,
  [
    new WordObj('jell', 50, 23),
    new WordObj('yell', 50, 23),
  ],
  120,
  ['L','L','J','Y']
),
new Level(
  24,
  [
    new WordObj('do', 50, 24),
    new WordObj('or', 50, 24),
    new WordObj('road', 100, 24),
  ],
  120,
  ['O','A','R','D']
),
new Level(
  25,
  [
    new WordObj('me', 50, 25),
    new WordObj('mike', 100, 25),
  ],
  120,
  ['M','K','I','E']
),
new Level(
  26,
  [
    new WordObj('at', 50, 26),
    new WordObj('talk', 100, 26),
  ],
  120,
  ['A','T','K','L']
),
new Level(
  27,
  [
    new WordObj('it', 50, 27),
    new WordObj('at', 50, 27),
    new WordObj('wait', 100, 27),
  ],
  120,
  ['A','T','W','I']
),
new Level(
  28,
  [
    new WordObj('do', 50, 28),
    new WordObj('by', 50, 28),
    new WordObj('boy', 75, 28),
    new WordObj('body', 100, 28),
  ],
  120,
  ['O','B','D','Y']
),
new Level(
  29,
  [
    new WordObj('in', 50, 29),
    new WordObj('dim', 75, 29),
    new WordObj('mind', 100, 29),
  ],
  120,
  ['I','M','N','D']
),
new Level(
  30,
  [
    new WordObj('ink', 75, 30),
    new WordObj('nip', 75, 30),
    new WordObj('pin', 75, 30),
    new WordObj('pink', 100, 30),
  ],
  120,
  ['I','P','N','K']
),
];

export default LEVELS;
