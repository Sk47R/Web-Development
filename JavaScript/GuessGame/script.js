let btn = document.querySelector('.check');
let again = document.querySelector('.again');
let ranNumber = Math.ceil(Math.random() * 10);

// Track of score
let score = 10;
let highscore = 0;

btn.addEventListener('click', function (e) {
  e.preventDefault();
  let number = Number(document.querySelector('.number').value);

  if (!number) {
    document.querySelector('#start').textContent = 'Please Enter a number';
  } else if (number === ranNumber) {
    document.querySelector('#start').textContent =
      'π₯ Congrats! You Guessed The Correct Number';
    document.querySelector('#what').textContent = ranNumber;
    document.querySelector('body').style.backgroundColor = '#228B22';
    if (score > highscore) {
      highscore = score;
      document.querySelector('#track').textContent = highscore;
    } else if (score < highscore) {
      document.querySelector('#track').textContent = highscore;
    }
  } else if (number > ranNumber) {
    if (score > 1) {
      document.querySelector('#start').textContent = ' β¬οΈ Too High...';
      score--;
      document.querySelector('#life').textContent = score;
    } else {
      document.querySelector('#start').textContent = 'ππΎππΎππΎ You Lose';
      document.querySelector('#life').textContent = 0;
      document.querySelector('body').style.backgroundColor = '	#800000';
    }
  } else if (number < ranNumber) {
    if (score > 1) {
      document.querySelector('#start').textContent = ' β¬οΈ Too Low...';
      score--;
      document.querySelector('#life').textContent = score;
    } else {
      document.querySelector('#start').textContent = 'ππΎππΎππΎ You Lose';
      document.querySelector('#life').textContent = 0;
      document.querySelector('body').style.backgroundColor = '	#800000';
    }
  }
  document.querySelector('.number').value = '';
});

again.addEventListener('click', function () {
  score = 10;
  ranNumber = Math.ceil(Math.random() * 10);
  //   console.log(score);
  document.querySelector('#start').textContent = 'π€ Start Guessing...';
  document.querySelector('#life').textContent = score;
  document.querySelector('.number').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('#what').textContent = '?';
});
