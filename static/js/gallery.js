const blurOverlay = document.querySelector(".blur-overlay");
// Gallery containers
const galleryDiv = document.querySelector(".gallery");
const allImages = galleryDiv.querySelectorAll(".image img");
const totalImages = allImages.length;
let currentPreviewImageNumber = 0;

// Image preview containers
const imgPreviewDiv = document.querySelector(".img-preview");
const imgPreview = imgPreviewDiv.querySelector(".img-box img");
const imgPreviewTitle = imgPreviewDiv.querySelector(".img-title");
const imgPreviewDate = imgPreviewDiv.querySelector(".img-date");
const imgPreviewcaption = imgPreviewDiv.querySelector(".img-caption");
const imgPreviewCloseBtn = document.querySelector(".preview-close");
const imgPreviewNextBtn = document.querySelector(".next-img");
const imgPreviewPrevBtn = document.querySelector(".prev-img");

let onOverlayClickEvents = [];


function closePreview() {
    setImage(undefined);
    imgPreviewDiv.style.display = "none";
    blurOverlay.style.display = "none";
}

function setImage(img) {
    const imgSrc = img?.src ?? "";
    const imgTitle = img?.dataset.title ?? "";
    const imgDate = img?.dataset.dateTaken ?? "";
    const imgCaption = img?.dataset.caption ?? "";

    imgPreview.src = imgSrc;
    imgPreviewTitle.innerText = imgTitle;
    imgPreviewDate.innerText = imgDate;
    imgPreviewcaption.innerText = imgCaption
    imgPreviewDiv.style.display = "flex";
    blurOverlay.style.display = "block";
}

function setNextImage() {
    currentPreviewImageNumber++;
    setImage(allImages[currentPreviewImageNumber % totalImages]);
}

function setPreviousImage() {
    currentPreviewImageNumber--;
    setImage(allImages[currentPreviewImageNumber % totalImages]);
}

allImages.forEach(img => {
    img.addEventListener("click", () => {
        currentPreviewImageNumber = Number(img.dataset.number);
        setImage(img);
    });
});

imgPreviewNextBtn.onclick = setNextImage;
imgPreviewPrevBtn.onclick = setPreviousImage;
imgPreviewCloseBtn.onclick = closePreview;

onOverlayClickEvents.push(closePreview);
blurOverlay.onclick = () => {
    onOverlayClickEvents.forEach(event => {
        event();
    })
}