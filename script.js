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
    document.querySelectorAll(`.note`) .forEach(note => note.remove());
    notes.forEach ((note , index)=>{
        let liEl = `<li class="note"> 
        <div class='details'> 
        <p> ${note.title}</p>
        <span>${note.description}</span>
        </div>
        <div class= "settings">
        <i onClick="updateNote(${index}, '${note.title}', '${note.description}')" class="uil uil-edit"></i>
        <i onClick="deleteNote(${index})" class="uil uil-trash"></i>
        </div>
        
        </div>
        </li>`;
        addBox.insertAdjacentHTML('afterend' , liEl);
    });

}
/* End of first function */

showNotes();

/*Function two */
function deleteNote(noteId){
    let confirmDelete= confirm ("Are you sure you want to dispose this work of art?");
    if (!confirmDelete) return;
    notes.splice(noteId, 1);
    localStorage.setItem(`notes`, JSON.stringify(notes));
    showNotes();
}
/*End  of function two*/


/* Start of function three */
function updateNote(noteId, title, desc){
    isUpdate = true;
    updateId = noteId;
    addBox.click();
    titleEl.value = title;
    descEl.values = desc;
    addBtn.innerText = 'Edit note';
    popupTitle.innerText = 'Editing note';

}
/* End of function three */

addBox.addEventListener(`click`, ()=> {
    titleEl.focus();
    popupBox.classList.add(`show`)
});

closeIcon.addEventListener(`click`, (event)=>{
    isUpdate = false;
    titleEl.value = '';
    descEl.value = '';
    addBtn.innerText = 'Add Note';
    popupTitle.innerText = 'Add a new note';
    popupBox.classList.remove(`show`);
});

/* Inspect this section */
addBtn.addEventListener(`click`, (event)=>{
    event.preventDefault();
    let noteTitle = titleEl.value,
    noteDesc = descEl.value;
    if(noteTitle|| noteDesc){
        let dateEl = new Date(),
        month = months[dateEl.getMonth()],
        day = dateEl.getDate(),
        year = dateEl.getFullYear();

    }

    let noteInfo = {
        title: noteTitle,
        description: noteDesc,
        date: `${month} ${day} ${year}`
    }
    
    if (!isUpdate) {
        notes.push(noteInfo);
    }else{
        isUpdate = false;
        notes[updateId] = noteInfo;
    }
    
    localStorage.setItem('notes', JSON.stringify(notes));
    closeIcon.click();
    showNotes();


});
