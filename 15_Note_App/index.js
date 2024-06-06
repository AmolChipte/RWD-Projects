const btnElement = document.getElementById("btn");
const webElement = document.getElementById("web");

getNotes().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content);
    webElement.insertBefore(noteElement, btnElement);
})

function createNoteElement(id,content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick",() => {
        const warning = confirm("Do you want to Delete ? ");
        if (warning){
            deleteNote(id,element);
        }
    })

    element.addEventListener("input", () => {
        updateNote(id,element.value);
    })

    return element;
}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-web") || "[]");
}

function deleteNote(id, element){
    const notes = getNotes().filter((note) => note.id != id);
    saveNote(notes);
    webElement.removeChild(element);
}

function updateNote(id,content){
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
}

function saveNote(notes){
    localStorage.setItem("note-web",JSON.stringify(notes));
}

function addNote(){
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };
    const noteElement = createNoteElement(noteObj.id, noteObj.content);
    webElement.insertBefore(noteElement, btnElement);

    notes.push(noteObj)

    saveNote(notes);
}

btnElement.addEventListener("click",addNote);

