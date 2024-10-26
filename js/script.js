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

//ハンバーガーボタン動作 Javascript
document
  .querySelector("#js-drawer-button")
  .addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector("#js-drawer-button").classList.toggle("is-checked");
    document.querySelector("#js-drawer-content").classList.toggle("is-checked");
  });



  //TOPへ戻るボタン jQuery
  jQuery(function() {
    jQuery("#js-button-top").hide(); // ボタンを初期状態で非表示

    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 100) {
        jQuery("#js-button-top").fadeIn(); // スクロール位置が100pxを超えたらフェードイン
      } else {
        jQuery("#js-button-top").fadeOut(); // 100px未満になったらフェードアウト
      }
    });

    jQuery("#js-button-top").on("click", function () {
      jQuery("html,body").animate({ scrollTop: 0 },100);
      return false;
    });
  });

