// Starting accounts
const account1 = {
  owner: 'Sujan Kapali',
  movements: [1000, 4250, 2400, -3000, 650, -1900, -1800, 29000],
  interestRate: 1.2, // rate in %
  username: 'sk123',
  password: 'sujan',
  date: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2021-06-05T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Mario',
  movements: [52000, -700, 300, 6000, -12000], // - is the withdrawal
  interestRate: 1.5,
  username: 'mario',
  password: 'mar123',
  date: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
  ],
};

const account3 = {
  owner: 'Lionel',
  movements: [200, 300, 800, -1000, 12000, -6000, 700],
  interestRate: 0.7,
  username: 'lionel',
  password: 'lionel',
  date: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
  ],
};

const accounts = [account1, account2, account3];

const loginBtn = document.querySelector('.login-btn');
const loginInput = document.querySelector('.login-input');
const passwordInput = document.querySelector('.login-input-password');

const container = document.querySelector('.container');
const box1 = document.querySelector('.box1');
const navbar = document.querySelector('.app-nav');
const appBody = document.querySelector('.app-body');

const depositSection = document.querySelector('.deposit');
const withdrawalSection = document.querySelector('.withdrawal');
const loanSection = document.querySelector('.loan');
const depositAmount = document.querySelector('.deposit-amount');
const depositDate = document.querySelector('.deposit-date');
const withdrawalAmount = document.querySelector('.withdrawal-amount');
const withdrawalDate = document.querySelector('.withdrawal-date');

const depositInput = document.querySelector('.deposit-input');
const transferInput = document.querySelector('.transfer-input');
const withdrawInput = document.querySelector('.withdraw-input');
const depositBtn = document.querySelector('.deposit-btn');
const withdrawBtn = document.querySelector('.withdraw-btn');
const transferBtn = document.querySelector('.transfer-btn');

const welcome = document.querySelector('.welcome');
const finalBalance = document.querySelector('.balance');
const interest = document.querySelector('.interest');
const finalWithdrawal = document.querySelector('.withdrawal-display');
const finalDeposit = document.querySelector('.deposit-display');
const finalInterest = document.querySelector('.interest-amount');

const transferTo = document.querySelector('.transfer-input-to');

const exit = document.querySelector('.exit');
const error = document.querySelector('.error');

function activityDate(date) {
  const dayPassed = function (date1, date2) {
    return Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  };

  const passedDays = dayPassed(new Date(), date);
  if (passedDays === 0) return 'Today';
  if (passedDays === 1) return 'Yesterday';
  if (passedDays <= 7) return `${passedDays} days ago`;

  return new Intl.DateTimeFormat('en-GB').format(date);
}

//// funtions for the Displaying in the UI
function displayDeposit(acc) {
  depositSection.innerHTML = '';

  // const deposit = acc.movements.filter(function (mov, i) {
  //   return mov > 0;
  // });
  acc.movements.forEach((mov, i) => {
    if (mov > 0) {
      console.log(i);
      const newdate = new Date(acc.date[i]);
      const displayDate = activityDate(newdate);

      const html = `<div class="movement movement-deposit">
    <p class = "deposit-amount">${i + 1}. Rs.${mov}</p>
    <p class="deposit-date">${displayDate}</p>
    </div>`;

      depositSection.insertAdjacentHTML('afterbegin', html);
    }
  });
}

function displayWithdrawal(acc) {
  withdrawalSection.innerHTML = '';

  acc.movements.forEach((mov, i) => {
    if (mov < 0) {
      const newdate = new Date(acc.date[i]);
      const displayDate = activityDate(newdate);
      const html = `<div class="movement movement-withdrawal">
    <p class = "withdrawal-amount">${i + 1}. Rs.${Math.abs(mov)}</p>
    <p class="withdrawal-date">${displayDate}</p>
</div>`;
      withdrawalSection.insertAdjacentHTML('afterbegin', html);
    }
  });
}

function totalBalance(acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  finalBalance.textContent = `Rs. ${acc.balance}`;
}

function interestAmount(acc) {
  interest.textContent = `${acc.interestRate}%`;
}

function totalWithdrawal(acc) {
  const withdrawalAmt = acc.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  finalWithdrawal.textContent = `Rs. ${Math.abs(withdrawalAmt)}`;
  // console.log(withdrawalAmt);
}
function totalDeposit(acc) {
  const depositValue = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  finalDeposit.textContent = `Rs. ${depositValue}`;
}

function totalInterest(acc) {
  const interestValue = (acc.balance * acc.interestRate) / 100;
  finalInterest.textContent = `Rs. ${Math.floor(interestValue)}`;
}

function finalDisplay(acc) {
  displayDeposit(acc);
  displayWithdrawal(acc);
  totalWithdrawal(acc);
  interestAmount(acc);
  totalBalance(acc);
  totalDeposit(acc);
  totalInterest(acc);
}
finalDisplay(account1);
//// funtions for the Displaying in the UI

////Implementing the login

let currentUser;

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();

  currentUser = accounts.find(function (acc) {
    return acc.username === loginInput.value;
  });
  if (currentUser && currentUser.password === passwordInput.value) {
    setTimeout(() => {
      welcome.textContent = `Welcome back, ${currentUser.owner.split(' ')[0]}`;
      container.style.display = 'none';
      box1.style.display = 'none';
      navbar.style.display = 'flex';
      appBody.style.display = 'block';
      console.log('Success');

      // Clear input fields
      loginInput.value = '';
      passwordInput.value = '';

      // Update UI
      finalDisplay(currentUser);
    }, 1000);
  } else if (loginInput.value === '') {
    error.textContent = 'Please enter the username and the pin!';
    loginInput.value = '';
    passwordInput.value = '';
  } else {
    error.textContent = 'Incorrect Pin or Usercode!';
    loginInput.value = '';
    passwordInput.value = '';
  }
});

////Implementing the login

//// Event Handler for the deposit

depositBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const depositAmt = Number(depositInput.value);
  if (typeof depositAmt === 'number') {
    currentUser.movements.push(depositAmt);
    const newdate = Date();
    currentUser.date.push(newdate);
    // update Ui
    finalDisplay(currentUser);
  }
  depositInput.value = '';
});
//// Event Handler for the deposit

//// Event Handler for the transfer

transferBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmt = Number(transferInput.value);

  const receiverAcc = accounts.find(function (mov) {
    return mov.username === transferTo.value;
  });
  if (
    transferAmt > 0 &&
    currentUser.balance >= transferAmt &&
    receiverAcc &&
    receiverAcc != currentUser.username
  ) {
    // Make the transfer

    currentUser.movements.push(-transferAmt);
    receiverAcc.movements.push(transferAmt);
    currentUser.date.push(new Date());
    receiverAcc.date.push(new Date());
    // Display the Ui
    finalDisplay(currentUser);
  }
  transferInput.value = '';
  transferTo.value = '';
});
//// Event Handler for the transfer

//// Event Handler for the withdraw

withdrawBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const withdrawAmt = Number(withdrawInput.value);

  if (withdrawAmt > 0 && currentUser.balance >= withdrawAmt) {
    // Withdraw
    currentUser.date.push(new Date());
    currentUser.movements.push(-withdrawAmt);
  } else if (withdrawAmt > currentUser.balance) {
    alert('No Sufficient Balance.');
  }
  // update Ui
  finalDisplay(currentUser);
  withdrawInput.value = '';
});

//// Event Handler for the withdraw

//// Event handler for the exit

exit.addEventListener('click', function (e) {
  e.preventDefault();
  container.style.display = 'flex';
  navbar.style.display = 'none';
  appBody.style.display = 'none';
  box1.style.display = 'block';
  error.textContent = '';
});

//// Event handler for the exit
