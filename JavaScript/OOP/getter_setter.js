// Getters and Setters in an object

const account = {
  owner: 'Sujan',
  datas: [200, 530, 120, 300],
  get latestData() {
    return this.datas.slice(-1).pop();
  },
  set latestData(mov) {
    // needs to have atleast one parameter
    this.datas.push(mov);
  },
};
// We use getter as if it was just a property
console.log(account.latestData);

// As in normal method we dont do account.latestMovement(50)
// instead as it is like a property so we set is like this.
account.latestData = 50;
console.log(account.datas);

// Getters and Setters in Class
