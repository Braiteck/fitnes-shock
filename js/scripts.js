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
			breakpoints: {
				0: {
					spaceBetween: 16
				},
				768: {
					spaceBetween: 0,
				}
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


	// Карусель товаров
	const productsSliders = []

	$('.products .swiper-container').each(function (i) {
		$(this).addClass('products_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 16,
						slidesPerView: 'auto',
						simulateTouch: true,
						allowTouchMove: true,
						noSwiping: false
					},
					1024: {
						spaceBetween: 2,
						slidesPerView: 3,
						simulateTouch: false,
						allowTouchMove: false,
						noSwiping: true,
					},
					1280: {
						spaceBetween: 2,
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


	// Наши десерты
	const dessertsSliders = []

	$('.desserts .swiper-container').each(function (i) {
		$(this).addClass('desserts_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 12,
						slidesPerView: 'auto',
						simulateTouch: true,
						allowTouchMove: true,
						noSwiping: false
					},
					1024: {
						spaceBetween: 20,
						slidesPerView: 3,
						simulateTouch: false,
						allowTouchMove: false,
						noSwiping: true,
					},
					1280: {
						spaceBetween: 24,
						slidesPerView: 4,
						simulateTouch: false,
						allowTouchMove: false,
						noSwiping: true,
					}
				}
			}

		dessertsSliders.push(new Swiper('.desserts_s' + i, options))

		if (slides > dessertsSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			dessertsSliders[i].destroy(true, true)
			dessertsSliders[i] = new Swiper('.desserts_s' + i, options)
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
	$('.mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('#mob_menu').toggleClass('show')
		$('.overlay').toggleClass('show')
	})


	// Плавная прокрутка к якорю
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Параллакс
	if ($(window).width() > 1023) {
		if ($('.parallax').length) {
			$('.parallax').each(function () {
				let scene = $(this).attr('id'),
					parallax = new Parallax(document.getElementById(scene))

				$('#' + scene).addClass('active')
			})
		}
	}


	// Animation
	const boxes = document.querySelectorAll('.animate')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio >= 0.25 && entry.target.classList.contains('animate')) {
				entry.target.classList.add('animated')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})

	// Товары
	initProductsSliders()
})



$(window).resize(() => {
	if (WW != $(window).width()) {
		// Выравнивание элементов в сетке
		$('.products .row').each(function () {
			productHeight($(this), parseInt($(this).css('--products_count')))
		})

		// Товары
		initProductsSliders()
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



// Товары
productsMobSliders = []

function initProductsSliders() {
	if ($(window).width() > 767) {
		if ($('.products .mob_row .row').length) {
			$('.products .mob_row').addClass('swiper-container')
			$('.products .mob_row .row > *').addClass('swiper-slide')
			$('.products .mob_row .row').addClass('swiper-wrapper').removeClass('row')

			$('.products .swiper-container.mob_row').each(function (i) {
				$(this).addClass('products_mob_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 16,
							slidesPerView: 'auto',
							simulateTouch: true,
							allowTouchMove: true,
							noSwiping: false
						},
						1024: {
							spaceBetween: 2,
							slidesPerView: 3,
							simulateTouch: false,
							allowTouchMove: false,
							noSwiping: true,
						},
						1280: {
							spaceBetween: 2,
							slidesPerView: 3,
							simulateTouch: false,
							allowTouchMove: false,
							noSwiping: true,
						}
					},
					on: {
						init: swiper => {
							setTimeout(() => productHeight($(swiper.$el), $(swiper.$el).find('.product').length))
						},
						resize: swiper => {
							setTimeout(() => productHeight($(swiper.$el), $(swiper.$el).find('.product').length))
						}
					}
				}

				productsMobSliders.push(new Swiper('.products_mob_s' + i, options))
			})
		}
	} else {
		productsMobSliders.forEach(element => element.destroy(true, true))

		productsMobSliders = []

		$('.products .mob_row').removeClass('swiper-container')
		$('.products .mob_row .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.products .mob_row .row > *').removeClass('swiper-slide')
	}
}