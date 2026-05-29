const changeStatus = document.getElementById("changeStatus");
const statusBadge = document.getElementById("statusBadge");
const statusText = document.getElementById("statusTxt");

let isAvailable = true;

export function availability(){
    changeStatus.addEventListener('click', () => {
        if (isAvailable){
            isAvailable = false;
            statusBadge.innerText = "No disponible";
            statusText.innerText = "No disponible";
            statusBadge.style.color = "var(--color-danger)";
            statusText.style.color = "var(--color-danger)";
            statusBadge.style.backgroundColor = "var(--color-danger-light)";
        } else {
            isAvailable = true;
            statusBadge.innerText = "Disponible";
            statusText.innerText = "Disponible";
            statusBadge.style.color = "var(--color-success)";
            statusBadge.style.backgroundColor = "var(--color-success-bg)";
            statusText.style.color = "var(--color-success)";
        }
    });
};