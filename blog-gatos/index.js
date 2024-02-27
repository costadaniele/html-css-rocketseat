function createArticle(img, title, paragraph) {
    return `
    
    <div class="articles">
        <img src=${img} alt="">
        <div class="text">
            <h3>${title}</h3>
            <p>${paragraph}</p>
        </div>    
    </div>
  `
}

document.querySelector('#section-articles').innerHTML = `
    ${createArticle('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Sábado preguiçoso', 'Descubra atividades interessantes para fazer com seu pet durante os finais de semana.')}
    ${createArticle('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Balaio de gatos', 'Como evitar confusões entre seus gatíneos e acostumá-los desde filhotes.')}
    ${createArticle('https://images.unsplash.com/photo-1548403119-4f9f60f7c064?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Cartela de cores', 'Seu gato é inverno intenso? Verão profundo? Descubra as cores que mais combinam com seu bichano.')}
    ${createArticle('https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Os gatos sentem frio?', 'Preparem-se para a frente fria que vem para o país da melhor maneira possível.')}
    ${createArticle('https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Conheça o Moacir', 'Moacir é o gatinho da semana do nosso blog. Venha conhecer sua história de superação.')}
`