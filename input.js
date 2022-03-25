const rnew = document.querySelector('.new-repair');
const rclear = document.querySelector('.clear-completed');

rnew.addEventListener('keydown', rInput);

function rInput(e) {
  if (e.keyCode === 13) { 
    e.preventDefault();
    if (e.target.value !== '') {
      repairList.addRepair(e.target.value);
      const view = document.querySelector('.view');
      const button = document.querySelector('.destroy');
      view.addEventListener('click', check);
      button.addEventListener('click', removebtn);
    }
    e.target.value = '';
  }
}

function check(e) {
  if (e.target.nodeName == 'INPUT') {
    repairList.clearCompleted(e.target.parentNode.parentNode.dataset.id);
  }
}

function removebtn(e) {
  repairList.deleteRepair(e.target.parentNode.parentNode.dataset.id);
}
