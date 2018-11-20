var myButton=document.getElementById("myButton");

myButton.addEventListener("click", myFirstEvent);

function addNewNote(myInput) {
    // read velue from input
    var value = myInput.value; 
    // create new li
    var li = document.createElement("li");
    li.innerHTML = value;
    // find notes
    var myNotes=document.getElementById("myNotes");
    // add new li into notes
    myNotes.appendChild(li);
    // remove text from myInput   
    myInput.value="";
}

function myFirstEvent(event) {    
    var myInput=document.getElementById("myInput");    
    addNewNote(myInput);
}
