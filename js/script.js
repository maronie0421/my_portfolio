const intersectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    }
    // else {
    //   entry.target.classList.remove("is-in-view");
    // }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function(inViewItem) {
  intersectionObserver.observe(inViewItem);
  inViewItems
});

//ハンバーガーボタン動作
document
  .querySelector("#js-drawer-button")
  .addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector("#js-drawer-button").classList.toggle("is-checked");
    document.querySelector("#js-drawer-content").classList.toggle("is-checked");
  });