let elements = document.getElementsByClassName('cell');

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener(
    'click',
    (e) => {
      if (elements[i] !== e.target) return;
      highlight(e);
    },
    false
  );
}

let bingoWords = [
  "Eavesdrop on a colleague's phone call",
  "Heart races when it's getting close to your turn to talk",
  'Your birthday is this month',
  'Scared of ghosts',
  'Skipped standup because of sleep/a game',
  "Laughing at your colleague's joke even if it wasn't funny",
  'Wanted to say "No" but had to say "Yes" to something',
  'Successfully failed at quiting Instagram',
  'Not understanding a word in a meeting but pretending otherwise',
  'Spoke an entire sentence before realizing you were on mute',
  'Hate WFH but hate going to the office too',
  'Googled what to buy your partner on Valentines day',
  'Met someone famous',
  'Is left handed',
  'Have pet/pets',
  'Binge watch and work at the same time',
  'Made a resolution on new years and still following it',
  'Your work desk is messy',
  'Considered starting a youtube channel',
  "Celebrated a team mates's birthday virtually",
  'Is on LinkedIn',
  'Set a goal and achieved it',
  'Tell someone they are doing a great job',
  'Hate ice cream',
  'Pretended to busy at work to skip a family/friend gathering',
];

document.querySelector('#randomize-button').addEventListener('click', () => {
  randomizeCard();
});

function getRandomInt() {
  return Math.floor(Math.random() * 25);
}

function randomizeCard() {
  removeAllBeans();
  let copyCard = bingoWords;
  let cellIndex = 25;
  let alreadyChosen = [];
  console.log(copyCard);
  while (cellIndex != 0) {
    let randNum = getRandomInt();
    if (alreadyChosen.includes(randNum)) {
      continue;
    } else {
      //   console.log(randNum + ' is the random number');
      let currentCell = 'cell' + cellIndex;
      //   console.log(
      //     currentCell +
      //       ' is the currentcell and ' +
      //       copyCard[randNum] +
      //       ' is the one tied to it' +
      //       ' and ' +
      //       randNum +
      //       ' is the random number'
      //   );
      document.getElementById(currentCell).textContent = copyCard[randNum];
      cellIndex -= 1;
      alreadyChosen.push(randNum);
    }
  }
}

function highlight(e) {
  console.log(e.target.classList.toggle('bean'));
}

function removeAllBeans() {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains('bean')) {
      elements[i].classList.toggle('bean');
    }
  }
}

// function checkIfUserWon() {
//   let elements = document.getElementsByClassName('cell');
//   const winningPatterns = [
//     ['cell1', 'cell2', 'cell3', 'cell4', 'cell5'],
//     ['cell6', 'cell7', 'cell8', 'cell9', 'cell10'],
//     ['cell11', 'cell12', 'cell13', 'cell14', 'cell15'],
//     ['cell16', 'cell17', 'cell18', 'cell19', 'cell20'],
//     ['cell21', 'cell22', 'cell23', 'cell24', 'cell25'],
//     ['cell1', 'cell6', 'cell11', 'cell16', 'cell21'],
//     ['cell1', 'cell7', 'cell13', 'cell19', 'cell25'],
//     ['cell2', 'cell7', 'cell12', 'cell17', 'cell22'],
//     ['cell3', 'cell8', 'cell13', 'cell18', 'cell23'],
//     ['cell4', 'cell9', 'cell14', 'cell19', 'cell24'],
//     ['cell5', 'cell10', 'cell15', 'cell20', 'cell25'],
//     ['cell5', 'cell9', 'cell13', 'cell17', 'cell21'],
//   ];
//   console.log(elements);
//   let tryingArray = [];

//   for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i].classList);
//     let arr = elements[i].classList;
//     if (arr.contains('bean')) {
//       tryingArray.push(elements[i].id);
//     }
//   }

//   let userWon = false;
//   for (let i = 0; i < winningPatterns.length; i++) {
//     let count = 0;
//     for (let j = 0; j < winningPatterns.length; j++) {
//       if (tryingArray.includes(winningPatterns[i][j])) {
//         count += 1;
//       }
//       if (count == 5) {
//         userWon = true;
//       }
//     }
//   }
//   userWon ? console.log('User Won!') : console.log('User try again');
// }
