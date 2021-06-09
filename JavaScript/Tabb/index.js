const tab = document.querySelectorAll('.tab');
const tabBox = document.querySelector('.container-box');
const containerContent = document.querySelectorAll('.container-content');

tabBox.addEventListener('click', function (e) {
  const tabClick = e.target.closest('.btn');

  if (!tabClick) return;
  tab.forEach(function (element) {
    element.classList.remove('tab-active');
  });
  containerContent.forEach(function (element) {
    element.classList.remove('container-content-active');
  });

  tabClick.classList.add('tab-active');

  document
    .querySelector(`.container-content-${tabClick.getAttribute('data-tab')}`)
    .classList.add('container-content-active');
});
