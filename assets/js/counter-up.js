$(document).ready(function () {
  $(".count").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count-text");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 5000,
        step: function () {
          $this.text(this.countNum);
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
});
