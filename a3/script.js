window.onload = function () {
    loadPage()
    moreChange()
    var index = 0,
        timer = null,
        pics = document.querySelectorAll(".banner-slide"),
        dots = document.querySelectorAll(".dot"),
        len = pics.length,
        main = document.querySelector(".banner");
    slideImg(timer, pics, index, dots, len, main)
}
function loadPage() {
    let loading = document.querySelector(".loading"),
        loadingText = document.querySelector(".loading-text"),
        mainContainer = document.querySelector(".main-container")
    for (let i = 0; i <= 100; i++) {
        (function (i) {
            setTimeout(function () {
                i++
                if (i == 101) {
                    loading.style.display = "none"
                    mainContainer.style.display = "block"
                    scrollLoad()


                    let container5 = document.querySelector(".container-scroll")
                    number = 0,
                        containerW = container5.clientWidth,
                        lastScrollTop = 0;
                    window.addEventListener('mousewheel', function (event) {
                        scrollLoad()
                        // console.log(container5.getBoundingClientRect().top)
                        let delta = event.wheelDelta || -event.detail;
                        let currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        if (delta > 0 && currentScrollTop < lastScrollTop) {
                            number -= 20
                            if (number <= 0) number = 0
                            container5.style.marginLeft = -number + "px"
                        } else if (delta < 0 && currentScrollTop > lastScrollTop) {
                            if (currentScrollTop > (container5.offsetTop - container5.offsetHeight)) {
                                number += 20
                                if (number >= containerW) return
                                container5.style.marginLeft = -number + "px"
                            }
                        }
                        lastScrollTop = currentScrollTop;
                    });
                }
                loadingText.innerHTML = i
            }, i * 30)
        })(i)
    }
}

function moreChange() {
    let more = document.querySelectorAll(".more a")
    for (let i = 0; i < more.length; i++) {
        more[i].onmouseover = function () {
            let text = this.parentNode.nextElementSibling
            text.style.display = "block"
            text.style.animation = "flipInY 0.8s ease-in-out"
        }
        more[i].onmouseout = function () {
            let text = this.parentNode.nextElementSibling
            text.style.display = "none"
        }
    }
}

//Rolling load function
function scrollLoad() {
    // 1. Get all boxes
    var boxList = document.querySelectorAll('.container')
    //2. Define a target value
    var targetValue = window.innerHeight * 0.8

    //3.Get the value of each box from the top of the browser
    boxList.forEach(function (box) {
        var boxTop = box.getBoundingClientRect().top
        if (boxTop <= targetValue) {
            box.classList.add('show-center')
        } else {
            box.classList.remove('show-center')
        }
    })
}

// bannner toggle
function slideImg(timer, pics, index, dots, len, main) {
    main.onmouseover = function () {
        //Clear Timer
        if (timer) clearInterval(timer);
    }
    main.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            if (index >= len) {
                index = 0;
            }
            changeImg(len, pics, dots, index);
        }, 3000);
    }
    //Automatic trigger
    main.onmouseout();
    //Iterate Bind events Click on dots to switch images
    for (var d = 0; d < len; d++) {
        dots[d].id = d;
        dots[d].onclick = function () {
            //Change index to the ID value of span
            index = this.id;
            //Calling changeimg
            changeImg(len, pics, dots, index);
        }

    }
    //Next
    document.getElementById("next").onclick = function () {
        index++;
        if (index >= len) index = 0;
        changeImg(len, pics, dots, index);
    }
    //Previous
    document.getElementById("prev").onclick = function () {
        index--;
        if (index < 0) index = len - 1;
        changeImg(len, pics, dots, index);
    }
}
//Switching images
function changeImg(len, pics, dots, index) {
    for (var i = 0; i < len; i++) {
        pics[i].style.display = 'none';
        dots[i].className = "";
    }
    pics[index].style.display = 'block';
    dots[index].className = "active";
}



function showText() {
    var textContainer = document.getElementById("textContainer");
    textContainer.style.display = "block";
}

function hideText() {
    var textContainer = document.getElementById("textContainer");
    textContainer.style.display = "none";
}





