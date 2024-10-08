// Click open next element
var clickFnc = function (selector) {
  selector.click(function () {
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
      $this.parent().addClass("active");
      $this.next().addClass("active");
    } else {
      $this.removeClass("active");
      $this.parent().removeClass("active");
      $this.next().removeClass("active");
    }
  });
};
function sweetalertConfirm() {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}
function sweetalertSuccess() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}
function sweetalertCountLess() {
  let timerInterval;
  Swal.fire({
    title: "Auto close alert!",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}
$(function () {
  $(".tab a").click(function () {
    var elm = $(this);
    if (!elm.parent("li").hasClass("active")) {
      elm.parent("li").siblings().removeClass("active");
      elm.parent("li").addClass("active");
      elm.parents(".tab").next().children(".tabBox").hide();
      $(this.hash).fadeIn();
    }
    return false;
  });

  $(".accordion").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  $(".accordion").click(function () {
    var elm = $(this);
    if (elm.next(".accordionBox").is(":visible")) {
      elm.removeClass("active").next(".accordionBox").slideUp(200);
    } else {
      elm
        .next(".accordionBox")
        .slideDown(200)
        .siblings(".accordionBox")
        .slideUp(200)
        .siblings(".accordion")
        .removeClass("active");
      elm.addClass("active");
    }
  });

  $("#checkAll").click(function () {
    $("input:checkbox").not(this).prop("checked", this.checked);
  });
});
