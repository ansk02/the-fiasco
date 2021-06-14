const ratio = .1

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio 
}

const handleIntersect = function(entries, observer){

  entries.forEach(function(entry){

    if (entry.intersectionRatio > ratio) {

      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)

    }

  })
}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('[class *= "reveal-"]').forEach(function(r) {

    observer.observe(r)

})



const menu_hamburger = document.getElementById('bar')
const menu = document.querySelector('.liens')

menu_hamburger.addEventListener('click', show)


function show() {

  menu.classList.add('navbar')

}
