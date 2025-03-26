let images = [
    "https://cdn.pixabay.com/photo/2023/01/08/05/31/indian-chat-7704561_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/19/09/04/anhinga-8136469_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/03/27/18/06/bird-7881393_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/07/24/01/53/macaw-6488474_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/19/19/26/peafowl-3617385_1280.jpg"
]

let currentIndex = 0;

let ButtonRight = document.getElementById('increase-btn');
let ButtonLeft = document.getElementById('decrease-btn');

let image = document.getElementById("image")

function handleClickOnRightButton() {


    if (currentIndex < images.length) {
        image.src = images[currentIndex];
        currentIndex++;

    }
    else {
        currentIndex = 0;
    }


    console.log(currentIndex)

}



console.log(ButtonRight)