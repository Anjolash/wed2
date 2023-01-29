var isMenuOpen = true;
var isYtFullScreen = true;
var isYtPortfolioFullScreen = true;
const dieev = document.querySelector(".story-told-play--container")
const dieev2 = document.querySelector(".not-sure-circle-container")
const dieev3 = document.querySelector(".not-sure-container")
var done = true;
const id = localStorage.getItem("id");


function toggleMenu() {
    if(isMenuOpen){
        document.body.classList += " menu--open"
        isMenuOpen = false;
    }
    else{
        document.body.classList.remove("menu--open") 
        isMenuOpen = true;
    }
    console.log(isMenuOpen)
}

function toggleFullScreen(id) {
    if(isYtFullScreen){
        ytVid = id;
        ytVidFull = document.getElementById(id);
        ytVidFull.classList.toggle("ytfullscreen--opensesame"); 
        document.body.classList += " ytfullscreen--open";
        if(done){
            if(dieev.classList.contains("ytfullscreen--opensesame")){
                dieev2.remove()
                done = "false"
                console.log(dieev2)
            }
        }    
        isYtFullScreen = false;
    }
    else{
        document.body.classList.remove("ytfullscreen--open");
        dieev3.append(dieev2)
        console.log(dieev2)
        ytVidFull.classList.remove("ytfullscreen--opensesame"); 
        dieev2.classList.remove("ytfullscreen--opensesame"); 
        isYtFullScreen = true;
    }
    console.log(isYtFullScreen)
}

async function toggleFullScreenPortfolio(id) {
    localStorage.setItem("id",id)
    porfolioParentDiv = document.getElementById(id)
    if(isYtPortfolioFullScreen){
        portfolioChild = porfolioParentDiv.children.item(1)
        portfolioChild.classList += " yt__backdropPortfolio"
        document.body.classList += " ytfullscreen--open";
        isYtPortfolioFullScreen = false;
    }
    else{
        document.body.classList.remove("ytfullscreen--open");
        portfolioChild.classList.remove("yt__backdropPortfolio"); 
        isYtPortfolioFullScreen = true;
    }
}


document.addEventListener("DOMContentLoaded", function(event){
    var swiper = new Swiper(".swiper", {
        direction: 'vertical',
        grabCursor: true,
        clickable: true,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function(number){
            return  number;
        },
        clickable: true,
        },
        breakpoints: {
        0: {
            slidesPerView: 1,
            
        },
        768: {
            slidesPerView: 1,
            
        },
        1024: {
            slidesPerView: 1,
            
        },
        },
    });

    var swiper = new Swiper(".portfolio-swiper", {
        grabCursor: true,
        clickable: true,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        loop: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        formatFractionCurrent: function(number){
            return  number;
        },
        clickable: true,
        },
        breakpoints: {
        0: {
            slidesPerView: 1,
            
        },
        768: {
            slidesPerView: 1,
            
        },
        1024: {
            slidesPerView: 1,
            
        },
        },
    });
}); 

let portfolio;

async function renderPortfolio(filter) {
    const portfolioWrapper = document.querySelector(".portfolio-videos");
    if (!portfolio) {
        portfolio = await getPortfolioVids();
        console.log(portfolio)
    }
    
    


const portfolioVidsHtml = portfolio
    .map((portfolioItem) => {
        return `<div class="col-md-4 por mcentre mb-5">
            <div id=${portfolioItem.id} class="width100" onclick="toggleFullScreenPortfolio(${portfolioItem.id})">
                <div class="poa2">
                    <a href="javascript: void(0);" class="video-button-play-inner-portfolio" data-rel="prettyPhoto[video_button_pretty_photo_9]">
                        <div class="video-button-play-inner video-button-play-inner-portfolio video-button-play-inner-portfolio-small">
                            <span class="play-outline"></span>
                            <span class="vb-label vb-label--portfolio">
                                <span>play</span>
                                <span>video</span>
                            </span>
                            <svg class="svg-circle"><circle cx="50%" cy="50%" r="45%"></circle></svg>
                            <svg class="svg-circle svg-circle2""><circle cx="50%" cy="50%" r="45%"></circle></svg>
                        </div>
                    </a>  
                </div>      
                <div class="runn">
                    <iframe id="FRAME_ID--YT--overlay" src="${portfolioItem.iframeUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div class="portfolio-img--container">
                <img class="portfolio-img" src="${portfolioItem.img}" alt="">
            </div>
            <h3 class="mcentre mullish-para py-4">${portfolioItem.title}</h3>
        </div>`;
    })
    .join("");

    portfolioWrapper.innerHTML = portfolioVidsHtml;
}
setTimeout(() => {
    renderPortfolio();
});


function getPortfolioVids() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                id: 1,
                title: "Bethany + Brian",
                iframeUrl: "https://www.youtube.com/embed/u2hVLGW85YQ",
                img: "./assets/portfolio-img-1.jpg"
                },
                {
                id: 2,
                title: "Abby + Anthony",
                iframeUrl: "https://www.youtube.com/embed/RPdabUNh6zM",
                img: "./assets/portfolio-img-2.jpg"
                },
                {
                id: 3,
                title: "Elvin + Chantal",
                iframeUrl: "https://www.youtube.com/embed/slbjcEmNe0g",
                img: "./assets/portfolio-img-3.jpg"
                },
                {
                id: 4,
                title: "Megan + Jack",
                iframeUrl: "https://www.youtube.com/embed/tFDnXCGLcAE",
                img: "./assets/portfolio-img-4.jpg"
                },
                {
                id: 5,
                title: "Andrew + Nicole",
                iframeUrl: "https://www.youtube.com/embed/DB2BSV7G_BI",
                img: "./assets/portfolio-img-5.jpg"
                },
                {
                id: 6,
                title: "Michael + Madisen",
                iframeUrl: "https://www.youtube.com/embed/_zQhlAAOm4s",
                img: "./assets/portfolio-img-6.jpg"
                },
            ]);
        }, 1000);
    });
}
