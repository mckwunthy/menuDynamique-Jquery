$(async function show() {
    //affichage sous menu au survol de li
    //animation au survol
    $("#app nav ul li").bind('mouseenter mouseleave', function (e) {
        $(this).toggleClass('animate__animated')
        $(this).toggleClass('animate__flash')
        $(this).children("ul").toggleClass('none')

        // console.log($(this));
    })

    //animation au click
    $("#app nav ul li").click(function (e) {
        $(this).children("i").addClass('animate__animated')
        $(this).children("i").addClass('animate__bounce')

        console.log(e.target);

        // console.log(/produits/.exec($(this).html()).index);
        let accueil = /accueil/.exec($(this).html())
        let produits = /produits/.exec($(this).html())
        let galerie = /galerie/.exec($(this).html())
        let contact = /contact/.exec($(this).html())
        let nosLocaux = /nos locaux/.exec($(this).html())
        let favoris = /favoris/.exec($(this).html())

        //redirection vers nouvelles pages dans 1 sec
        if (accueil) {
            // console.log($(this).children("div"));
            $(this).children("div").css({
                'width': '180px',
                'height': '55px',
                'border': '5px ridge red',
                'z-index': '99'
            })
            setTimeout(() => {
                window.location = "/";
            }, 1000);
        }
        if (produits) {
            // console.log($(this));
            $(this).children("div").css({
                'width': '221px',
                'height': '55px',
                'border': '5px ridge red',
                'z-index': '99'
            })
            setTimeout(() => {
                window.location = "/";
            }, 1000);
        }
        if (galerie) {
            $(this).children("div").css({
                'width': '180px',
                'height': '55px',
                'border': '5px ridge red',
                'z-index': '99'
            })
            setTimeout(() => {
                window.location = "/";
            }, 1000);
        }
        if (contact) {
            $(this).children("div").css({
                'width': '180px',
                'height': '55px',
                'border': '5px ridge red',
                'z-index': '99'
            })
            setTimeout(() => {
                window.location = "/";
            }, 1000);
        }
        if (nosLocaux) {
            $(this).children("div").css({
                'width': '220px',
                'height': '55px',
                'border': '5px ridge red',
                'z-index': '99'
            })
            setTimeout(() => {
                window.location = "/";
            }, 1000);
        }
        if (favoris) {
            $(this).children("div").css({
                'width': '180px',
                'height': '55px',
                'border': '5px ridge red',
                'z-index': '99'
            })
            setTimeout(() => {
                window.location = "/";
            }, 1000);
        }

    })

})