document.addEventListener('DOMContentLoaded', () => {

    const md = 880
    let docWidth

    // на ширине экрана менее md 'menu-content' становится выпадашкой
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


    hideAllDropouts = (class_dropout) => {
        // удаляем активность у всех заголовков, кроме 'menu-bars'
        $('.header__menu-item_dropdown').removeClass('header__menu-item_active')
        $('.header__person_dropdown').removeClass('header__person_active')
        $('.header__catalog-title_dropdown').removeClass('header__catalog-title_active')

        if (class_dropout == 'header__geo-dropout') {
            // если закрываем выпадашку 'geo', то закрываем все выпадашки, кроме 'menu-content'
            $('.dropout').not('.header__menu-content').slideUp()
        } else {
            // иначе - закрываем все выпадашки и удаляем активность у 'menu-bars'
            $('.header__menu-bars_dropdown').removeClass('header__menu-bars_active')
            $('.dropout').slideUp()
        }
    }

    // при клике в любом месте экрана - закрываем все выпадашки
    window.addEventListener('click', e => {
        const target = e.target
        if (!(target).closest('.dropout') && !(target).closest('.header__menu-item_dropdown') && !(target).closest('.header__person_dropdown') && !(target).closest('.header__menu-bars_dropdown') && !(target).closest('.header__catalog-title_dropdown')) {
            hideAllDropouts('')
        }
    })

    toggleDropout = (el) => {
        let class_active = $(el).attr('class').split(' ')[0] + '_active'
        let class_dropout = $(el).attr('data-class-dropout')

        if ($(el).hasClass(class_active)) {
            $(el).removeClass(class_active)
            $('.'+class_dropout).slideUp()
        } else {
            hideAllDropouts(class_dropout)
            $(el).addClass(class_active)
            $('.'+class_dropout).slideDown()
        }
    }

    // toggle для блока 'products' в блоке 'order-block'
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