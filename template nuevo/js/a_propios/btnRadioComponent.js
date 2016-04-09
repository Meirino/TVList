/**
 * Created by david on 29/03/2016.
 */
$(".btn-radio-group > .btn ").click(function (e){
    $(".btn-radio-group > .btn-radio-checked ").removeClass("pulse");
    $(".btn-radio-group > .btn-radio-checked ").removeClass("btn-radio-checked");
    $(this).addClass('btn-radio-checked ');
    $(this).addClass('pulse');

});
