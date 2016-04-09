
// .modal-backdrop classes

    $(".modal-transparent").on('show.bs.modal', function () {
        setTimeout( function() {
            $(".modal-backdrop").addClass("modal-backdrop-transparent");
        }, 0);
    });
$(".modal-transparent").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

$(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});

$('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
});
$('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
});

$('#register-form-data1-link').click(function(e) {
    $("#register-form-data1").delay(100).fadeIn(100);
    $("#register-form-data2").fadeOut(100);
    $("#register-form-pagination-ul li").each(function( ) {
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');
    e.preventDefault();
});

$('#register-form-data2-link').click(function(e) {
    $("#register-form-data2").delay(100).fadeIn(100);
    $("#register-form-data1").fadeOut(100);
    $('#register-form-data1-link').removeClass('active');
    $("#register-form-pagination-ul li").each(function( ) {
        $(this).removeClass('active');
    });
    $(this).parent().addClass('active');
    e.preventDefault();
});
/*
 $('a').on('shown.bs.tab', function (e) {
 var target = $(e.target).attr("href") // activated tab
 alert(target);
 });
 */
$('#register-form-btn-prev').click(function(e) {
    // Obtengo el li con la clase active
    let tabActiva = $("#register-form-tabs > li.active");
    // Obtengo el anterior li al activo
    let siguienteTab = tabActiva.prev();
    // Obtengo el primer nodo hijo del li (será el a) y lanzo el evento show tab manualmente
    siguienteTab.children().first().tab('show');
    $("#register-form-btn-next").delay(100).fadeIn(100);
    $("#register-form-btn-sent").fadeOut(50);
    e.preventDefault();
});

$('#register-form-btn-next').click(function(e) {
    // Obtengo el li con la clase active
    let tabActiva = $("#register-form-tabs > li.active");
    // Obtengo el siguiente li al activo
    let siguienteTab = tabActiva.next();
    // Obtengo el primer nodo hijo del li (será el a) y lanzo el evento show tab manualmente
    siguienteTab.children().first().tab('show');
    siguienteTab.children().first().addClass('prueba_right');

    $("#register-form-btn-sent").delay(100).fadeIn(100);
    $("#register-form-btn-next").fadeOut(50);
    e.preventDefault();
});


$('#register-form-btn-sent').click(function(e) {
    // Obtengo el li con la clase active
    alert("Envio la peticion de registro");
    e.preventDefault();
});


$( "#register-form-link").click(function(e) {
    // Obtengo el li con la clase active
    $('#register-form-userdata-tab').click();
    $('#register-form-userdata-tab').removeClass('active');
    $('.nav_' + $("#register-form-userdata-tab").attr('href').replace('#', '')).addClass('active');
});


