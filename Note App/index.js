const btnEl = document.getElementById("btn");

const appEl= document.getElementById("app");

function createNoteEl(id, content){
    const element= document.createElement("textarea");
    element.classList.add("note");
    element.placeholder="Empty Note";
    element.value=content;

    element.addEventListener("dblclick", ()=>{
        const warning= confirm("ARE YOU WNAT TO DELETE THIS NOTE?")
        if(warning==true){
            deleteNote(id, element)
        }
    })

    element.addEventListener("input", ()=>{
        updateNote(id, element.value);
    });

    return element;
}

 function updateNote(){

 }
function deleteNote(id, element){

}

function addNote(){
    const notes=[];
    const noteObj= {
        id: Math.floor(Math.random() *10000),
        content:"",
    };
    const noteEl= createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);
    saveNote(notes);
}

function saveNote(notes) {
    localStorage.setItem("note-app",JSON.stringify(notes));
}


btnEl.addEventListener("click", addNote)