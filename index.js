class repare {
    constructor() {
    this.finished = false;
  }
}
class list {
    constructor() {
    this.repairs = [];
  }
  addRepair(data) {
    this.repairs.push(new repare(data));
    this.print(data);
  }
  print(data) {
    const rList = document.querySelector('.repair-list');
    rList.insertAdjacentHTML("afterbegin",`<li data-id="${this.repairs.length-1}" class="">
        <div class="view">
        <input class="toggle" type="checkbox">
        <label>${data}</label>
        <button class="destroy"></button></div> </li>`); 
      }
  deleteRepair(id) {
    document.querySelector(`[data-id = "${id}"]`).remove();
    delete this.repairs[id];
  }
  clearCompleted(id) {
    this.repairs[id].finished = true;
    document.querySelector(`[data-id = "${id}"]`).classList.toggle('completed');
  }
}
const repairList = new list();




