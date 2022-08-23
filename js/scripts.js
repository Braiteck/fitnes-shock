$(() => {
	WW = $(window).width()


	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 5000
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.main_slider'),
						currentIndex,
						totalIndex

					(swiper.realIndex + 1) < 10
						? currentIndex = '0' + (swiper.realIndex + 1)
						: currentIndex = swiper.realIndex + 1

					swiper.slides.length < 10
						? totalIndex = '0' + $(swiper.$el).find('.slide:not(.swiper-slide-duplicate)').length
						: totalIndex = $(swiper.$el).find('.slide:not(.swiper-slide-duplicate)').length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.main_slider'),
						currentIndex

					(swiper.realIndex + 1) < 10
						? currentIndex = '0' + (swiper.realIndex + 1)
						: currentIndex = swiper.realIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Почему мы?
	if ($('.why_we .swiper-container').length) {
		new Swiper('.why_we .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				init: swiper => {
					let parent = $(swiper.$el).closest('.why_we'),
						currentIndex,
						totalIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					swiper.slides.length < 10
						? totalIndex = '0' + swiper.slides.length
						: totalIndex = swiper.slides.length

					parent.find('.count .current').text(currentIndex)
					parent.find('.count .total').text(totalIndex)
				},
				slideChange: swiper => {
					let parent = $(swiper.$el).closest('.why_we'),
						currentIndex

					(swiper.activeIndex + 1) < 10
						? currentIndex = '0' + (swiper.activeIndex + 1)
						: currentIndex = swiper.activeIndex + 1

					parent.find('.count .current').text(currentIndex)
				}
			}
		})
	}


	// Мы уже здесь
	if ($('.already_here .swiper-container').length) {
		new Swiper('.already_here .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			navigation: {
				nextEl: '.already_here-swiper-button-next',
				prevEl: '.already_here-swiper-button-prev'
			}
		})
	}


	// Слайдер в тексте
	const textSliders = []

	$('.text_block .slider').each(function (i) {
		$(this).find('.swiper-container').addClass('text_block_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				simulateTouch: false,
				allowTouchMove: false,
				noSwiping: true,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 24,
						slidesPerView: 1
					},
					768: {
						spaceBetween: 24,
						slidesPerView: 2
					},
					1024: {
						spaceBetween: 24,
						slidesPerView: 3
					},
					1280: {
						spaceBetween: 32,
						slidesPerView: 4
					}
				}
			}

		textSliders.push(new Swiper('.text_block_s' + i, options))

		if (slides > textSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			textSliders[i].destroy(true, true)
			textSliders[i] = new Swiper('.text_block_s' + i, options)
		}
	})


	// Слайдер в тексте
	const productsSliders = []

	$('.products .swiper-container').each(function (i) {
		$(this).addClass('products_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				spaceBetween: 2,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						slidesPerView: 'auto',
						simulateTouch: true,
						allowTouchMove: true,
						noSwiping: false
					},
					1024: {
						slidesPerView: 3,
						simulateTouch: false,
						allowTouchMove: false,
						noSwiping: true,
					},
					1280: {
						slidesPerView: 3,
						simulateTouch: false,
						allowTouchMove: false,
						noSwiping: true,
					}
				},
				on: {
					init: swiper => {
						setTimeout(() => {
							productHeight($(swiper.$el), $(swiper.$el).find('.product').length)
						})
					},
					resize: swiper => {
						setTimeout(() => {
							productHeight($(swiper.$el), $(swiper.$el).find('.product').length)
						})
					}
				}
			}

		productsSliders.push(new Swiper('.products_s' + i, options))

		if (slides > productsSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			productsSliders[i].destroy(true, true)
			productsSliders[i] = new Swiper('.products_s' + i, options)
		}
	})


	// Отзывы
	const reviewsSliders = []

	$('.reviews .swiper-container').each(function (i) {
		$(this).addClass('reviews_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				simulateTouch: false,
				allowTouchMove: false,
				noSwiping: true,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 24,
						slidesPerView: 1
					},
					1024: {
						spaceBetween: 24,
						slidesPerView: 2
					},
					1280: {
						spaceBetween: 32,
						slidesPerView: 2
					}
				}
			}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))

		if (slides > reviewsSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			reviewsSliders[i].destroy(true, true)
			reviewsSliders[i] = new Swiper('.reviews_s' + i, options)
		}
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.thumbs-swiper-button-next',
				prevEl: '.thumbs-swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 3
				},
				768: {
					spaceBetween: 14,
					slidesPerView: 3
				}
			}
		})

		new Swiper('.product_info .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			thumbs: {
				swiper: productThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('#mob_menu').toggleClass('show')
		$('.overlay').toggleClass('show')
	})
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})
})



$(window).resize(() => {
	if (WW != $(window).width()) {
		// Выравнивание элементов в сетке
		$('.products .row').each(function () {
			productHeight($(this), parseInt($(this).css('--products_count')))
		})
	}
})



// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.name, .desc').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.name'))
		setHeight($products.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}