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