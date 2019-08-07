document.getElementById('date').innerHTML = new Date().toDateString();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}