const imageList = [
    "https://cdn.pixabay.com/photo/2022/02/22/03/22/passiflora-7027917__340.jpg",
    "https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__340.png",
    "https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/02/09/17/22/cat-7003849_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/02/14/20/09/bird-7013754_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/01/26/19/43/snowdrop-6969748__340.jpg",
    "https://cdn.pixabay.com/photo/2022/01/30/12/39/mountains-6980701_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/01/07/07/08/seal-6921267_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/10/04/06/28/cactus-6679665_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/04/08/06/55/elephant-5015964_960_720.jpg",
];

let activeImage = imageList[6];

function setActiveImage() {
    const imageHolder = document.getElementsByClassName("image-holder")[0];
    imageHolder.style.backgroundImage = `url('${activeImage}')`;
}

function navigateImage(state) {
    let activeImageIndex = imageList.indexOf(activeImage);
    if (state === "n") {
        if (activeImageIndex === imageList.length - 1) {
            activeImageIndex = 0;
        
        } else {
            activeImageIndex++;
        }
    }   else {
        if (activeImageIndex === 0) {
            activeImageIndex = imageList.length -1;
        } else {
            activeImageIndex--;
        }
    }
    activeImage = imageList[activeImageIndex];
    setActiveImage();
}