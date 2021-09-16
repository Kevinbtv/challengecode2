const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
})

ScrollReveal().reveal('.header', { delay: 200 })
ScrollReveal().reveal('.cards', { delay: 300 })
ScrollReveal().reveal('.article-cards', { delay: 400 })
ScrollReveal().reveal('footer', { delay: 500 })
