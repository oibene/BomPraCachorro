/** SCROOLLREVEAL mostra os elementos apartir do rolamento da pag **/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `aside .container,
    aside .promocoes, main .divisao,
    main .container .text, main .container .racoes,
    main .divisao, main .container .racoes,
    footer .infos, footer .redes
    `,
    { interval: 100 }
  )


  /** SOMBRA C/ ROLAGEM DA TELA**/
const header = document.querySelector('header')
const navHeight = header.offsetHeight //deslocamento da altura
function mudaHeaderQuandoScroll() {
  //se o scroll passou da altura do header
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}


/** BOTÃO P/ VOLTAR P/ O TOPO**/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 40) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}


/** CARROSSEL
 * esse plugin é todo automatico**/

//cria um obj swiper que usa de parametros uma classe e um obj (par de chaves co propriedade e valor)

//slidesPerView = quantos slide a gente quer ver
//mousewheel = rolamento mouse //keyboard = setinhas
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true
      }
    }
  })

//quando a tela rolar, executa as duas funções
window.addEventListener('scroll', function () {
    mudaHeaderQuandoScroll()
    backToTop()
  })