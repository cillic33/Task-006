document.addEventListener('DOMContentLoaded', () => {

    const md = 880
    let docWidth

    setDropoutClass = () => {
        docWidth = document.documentElement.clientWidth

        if (docWidth <= md) {
            $('.header__menu-content').addClass('dropout')
            $('.header__menu-content').hide()
        } else {
            $('.header__menu-content').removeClass('dropout')
            $('.header__menu-content').show()
        }
    }

    setDropoutClass()

    window.addEventListener('resize', e => {
        setDropoutClass()
    })


    hideAllDropouts = (param) => {
        $('.header__menu-item_dropdown').removeClass('header__menu-item_active')
        $('.header__person_dropdown').removeClass('header__person_active')
        $('.header__catalog-title_dropdown').removeClass('header__catalog-title_active')

        if (param == 'geo') {
            $('.dropout').not('.header__menu-content').slideUp()
        } else {
            $('.header__menu-bars_dropdown').removeClass('header__menu-bars_active')
            $('.dropout').slideUp()
        }
    }

    window.addEventListener('click', e => {
        const target = e.target
        if (!(target).closest('.dropout') && !(target).closest('.header__menu-item_dropdown') && !(target).closest('.header__person_dropdown') && !(target).closest('.header__menu-bars_dropdown') && !(target).closest('.header__catalog-title_dropdown')) {
            hideAllDropouts('')
        }
    })

    toggleGeoDropout = (el) => {
        if ($(el).hasClass('header__menu-item_active')) {
            $(el).removeClass('header__menu-item_active')
            $('.header__geo-dropout').slideUp()
        } else {
            hideAllDropouts('geo')
            $(el).addClass('header__menu-item_active')
            $('.header__geo-dropout').slideDown()
        }
    }

    togglePersonDropout = (el) => {
        if ($(el).hasClass('header__person_active')) {
            $(el).removeClass('header__person_active')
            $('.header__person-dropout').slideUp()
        } else {
            hideAllDropouts('')
            $(el).addClass('header__person_active')
            $('.header__person-dropout').slideDown()
        }
    }

    toggleHeaderMenuDropout = (el) => {
        if ($(el).hasClass('header__menu-bars_active')) {
            $(el).removeClass('header__menu-bars_active')
            $('.header__menu-content').slideUp()
        } else {
            hideAllDropouts('')
            $(el).addClass('header__menu-bars_active')
            $('.header__menu-content').slideDown()
        }
    }

    toggleCatalogDropout = (el) => {
        if ($(el).hasClass('header__catalog-title_active')) {
            $(el).removeClass('header__catalog-title_active')
            $('.header__catalog-content').slideUp()
        } else {
            hideAllDropouts('')
            $(el).addClass('header__catalog-title_active')
            $('.header__catalog-content').slideDown()
        }
    }


    orderBlockMore = (id) => {
        if ($('#'+id+' .order-block__more').hasClass('order-block__more_active')) {
            $('#'+id+' .order-block__more').removeClass('order-block__more_active')
            $('#'+id+' .order-block__products').slideUp()
        } else {
            $('#'+id+' .order-block__more').addClass('order-block__more_active')
            $('#'+id+' .order-block__products').slideDown()
        }
    }

})