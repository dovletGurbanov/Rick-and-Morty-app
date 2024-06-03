const getData = async (createCards, url='https://rickandmortyapi.com/api/character') => {
    const request = await fetch(url)
    const response = await request.json()
    createCards(response)
}
const createCharCards = characters => {
    const {info, results} = characters
    const cardWrap = document.querySelector('.all_characters')
    results.forEach(character => {
        const card = document.createElement('div')
        card.classList.add('card')
        // добавляем card класс card
        card.style = 'width: 100%'
        card.innerHTML = 
        `
            <img src=${character.image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${character.species}</li>
                <li class="list-group-item">${character.gender}</li>
                <li class="list-group-item d-flex align-items-center">${character.status} <span class="alive_status" style="background: ${ character.status === 'Alive' ? "#C4E74A" : "#EB4C42"}"></span></li>
            </ul>
        `
        cardWrap.append(card)

    })
}
const createSliders = (characters) =>{
    const intro = document.querySelector('.intro')
    const carouselInner = document.querySelector('.carousel-inner')
    characters.forEach((character, index)  =>{
        const slide = document.createElement('div')
        index === 0 ? slide.classList.add('carousel-item', 'active') : slide.classList.add('carousel-item')
    })
    intro.innerHTML=
    `
    <div id="carouselExampleFade" class="intro-mob carousel slide carousel-fade">
        <div class="carousel-inner">

            <div class="carousel-item active">
                <img src="https://i.pcmag.com/imagery/articles/02yIl1hE2zxgbDXJNEpJ5kr-1..v1701746046.png" class="d-block h-100 w-100" alt="...">
            </div>
            <div class="carousel-item ">
                <img src="https://mma.metaratings.ru/storage/images/5e/e2/5ee2202063100f011e6c85904b6a7c5f.jpg" class="d-block h-100 w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://mma.metaratings.ru/storage/images/5e/e2/5ee2202063100f011e6c85904b6a7c5f.jpg" class="d-block h-100 w-100" alt="...">
            </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="intro-desktop">
            <div class="sidebar">
                <div style="background: linear-gradient(220.16deg, #000000 -8%, #F39102 138%);">
                    <h2>Person_1</h2>
                    <p>Smth Info</p>
                </div>
                <div style="background: linear-gradient(229.99deg, #000000 -26%, #000000b2 145%);">
                    <h2>Person_2</h2>
                    <p>Smth Info</p>
                </div>
                <div style="background: linear-gradient(215.32deg, #000000 -1%, #9E0706 124%);">
                    <h2>Person_3</h2>
                    <p>Smth Info</p>
                </div>
                <div style="background: linear-gradient(221.87deg, #07703f 1%, #000000 128%);">
                    <h2>Person_4</h2>
                    <p>Smth Info</p>
                </div>
                <div style="background: linear-gradient(222deg, rgba(88,15,128,1) 0%, rgba(162,121,218,1) 100%);">
                    <h2>Person_5</h2>
                    <p>Smth Info</p>
                </div>
            </div>
        </div>
        <div class="main_slide">
            <div style="background-image: url('https://mma.metaratings.ru/storage/images/5e/e2/5ee2202063100f011e6c85904b6a7c5f.jpg');"></div>     
            <div style="background-image: url('https://i.pcmag.com/imagery/articles/02yIl1hE2zxgbDXJNEpJ5kr-1..v1701746046.png');"></div>     
            <div style="background-image: url('https://mma.metaratings.ru/storage/images/5e/e2/5ee2202063100f011e6c85904b6a7c5f.jpg');"></div>     
            <div style="background-image: url('https://mma.metaratings.ru/storage/images/5e/e2/5ee2202063100f011e6c85904b6a7c5f.jpg');"></div>     
            <div style="background-image: url('https://mma.metaratings.ru/storage/images/5e/e2/5ee2202063100f011e6c85904b6a7c5f.jpg');"></div>     
        </div>
        <div class="controls">
            <button class="down_button">Down</button>
            <button class="up_button">Up</button>
        </div>
    </div>
    `
}
getData(createCharCards)