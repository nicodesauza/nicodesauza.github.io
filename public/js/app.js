$(function () {
  aos_init();
  $(".tombol-tambah").on("click", function () {
    $("#formModalLabel").html("Tambah Data Mahasiswa");
    $(".tombol").html("Tambah");
  });

  $(".tampil").on("click", function () {
    $("#formModalLabel").html("Ubah Data Mahasiswa");
    $(".tombol").html("Ubah");
    $(".modal-body form").attr(
      "action",
      "http://localhost/mvc/public/mahasiswa/ubah"
    );
    const id = $(this).data("id");

    $.ajax({
      url: "http://localhost/mvc/public/mahasiswa/getubah",
      data: { id: id },
      method: "post",
      dataType: "json",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#nim").val(data.nim);
        $("#email").val(data.email);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);

        console.log(data);
      },
    });
  });
});

function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
}
$(window).on("load", function () {
  aos_init();
});

$(document).ready(function () {
  console.log("haloo kantau");

  $(window).scroll(function () {
    var jarak = $(window).scrollTop();
    var angka = $(window).scrollTop();
    var bagi = 20 / $(window).scrollTop();
    var kuy = "translateY(-" + jarak + "px)";
    var yuk =
      "translateY(-" +
      jarak +
      "px) translateX(-" +
      angka +
      "px) scale(" +
      bagi +
      ")";
    if ($(window).scrollTop() > 10 && $(window).scrollTop() < 20) {
      $(".jambret").css("visibility", "hidden");
      // console.log(kuy);
      $(".jalan").css({
        transform: kuy,
      });
    } else if ($(window).scrollTop() > 20 && $(window).scrollTop() < 80) {
      $(".jalan").css({
        transform: yuk,
        visibility: "visible",
      });
      $(".navbar-brand").css("opacity", "0");
      $(".navbar-collapse").css("margin-left", "-50px");
      console.log(jarak);
    } else if ($(window).scrollTop() > 80) {
      $(".jalan").css("visibility", "hidden");
      $(".navbar-brand").css("opacity", "1");
      $(".navbar-collapse").css("margin-left", "0");
      console.log(jarak);
    } else if ($(window).scrollTop() < 20) {
      $(".jambret").css("visibility", "visible");
      $(".jalan").css("visibility", "visible");
      $(".navbar-collapse").css("margin-left", "-50px");
      $(".navbar-brand").css("opacity", "0");
    }
  });
});
function halo() {
  console.log("halo");
}
