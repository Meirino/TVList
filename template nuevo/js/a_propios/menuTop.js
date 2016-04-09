$(".add_book").click().click(function () {
    var elemento=$("#book_amnt");
    var book_nmb= Number(elemento.text());
    var newone = elemento.clone(true);
    book_nmb+=1;

    if (book_nmb>0){
        newone.removeClass('hidden');
    }
    newone.text(book_nmb);
    newone.addClass('animated pulse');


    elemento.before(newone);

    elemento.remove();
});
