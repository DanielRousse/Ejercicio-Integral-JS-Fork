const likeBtn = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCounter");

let count = 0;

export function likesCounter(){
    likeBtn.addEventListener("click", () => {
        count++;
        likeCounter.textContent = count;
    });
};