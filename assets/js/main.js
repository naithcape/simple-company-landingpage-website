const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'

if (selectedTheme) {
  
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
}


themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle(lightTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true, Ako hoces ponavaljanje animacije
})

sr.reveal('#theme-button')
sr.reveal('.nav__logo')
sr.reveal('.home__data', {origin: 'bottom'})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__img', {origin: 'right'})
sr.reveal('.section__title-wrapper', {origin: 'bottom'})
sr.reveal('.section__cards', {origin: 'bottom'})
sr.reveal('.footer__info', {origin: 'left'})
sr.reveal('.footer__content', {origin: 'right'})