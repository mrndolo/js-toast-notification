let toastBox = document.getElementById('toastBox');
let successMsg = '<img src="./images/check-mark.png"></img>Succesfully submitted';
let errorMsg = '<img src="./images/cancel.png"></img>Please fix the error!';
let invalidMsg = '<img src="./images/error.png"></img>Invalid input, check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
}