function stepnext(n){

    if(n != 0){
        $(".stepwizard-row a.active-step").removeClass('active-step');
        $(".stepwizard-row a").addClass('btn-default');
        $('.stepwizard a[href="#step-'+n+'"]').tab('show');
        $('.stepwizard-row a[href="#step-'+n+'"]').removeClass('btn-default');
        $('.stepwizard-row a[href="#step-'+n+'"]').addClass('btn-primary');
        $('.stepwizard-row a[href="#step-'+n+'"]').addClass('active-step');

    }
}
stepnext(1);