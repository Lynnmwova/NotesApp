/* Declaration of variables */
const addBox = document.querySelector(`.add-box`);
popupBox = document.querySelector(`.popup-box`);
popupTitle = document.querySelector(`header p`);
closeIcon = document.querySelector(`header i`);
titleEl = document.querySelector(`input`);
descEl = document.querySelector(`textarea`);
addBtn = document.querySelector(`button`);

const months =['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const notes = JSON.parse(localStorage.getItem(`notes`) || '[]');
let isUpdate = false, updateId;

/* Start of first function */
function showNotes(){
    
}
