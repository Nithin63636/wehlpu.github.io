console.log("this is me");
showNotes();
// if use add the note ,add it to bethe localstorage
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener('click',function(e){
    let addtxt=document.getElementById("addtxt");
    let addtitle=document.getElementById("addtitle");
    let notes=localStorage.getItem("notes");
    // localStorage.setItem('notes',"pavi")
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let myobj={
        title:addtitle.value,
        text:addtxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value=""; 
    addtitle.value="";  //when entered string add to the local storage then addtxt empty kiya
    console.log(notesObj)
    showNotes();
})
// function to show the elemenet from localstorage

function showNotes() {
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
      
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button
            id="${index}" onclick="deleteNote(this.id) " class="btn btn-primary">Delete Note</button>
            </div>
        </div>`
    })

    let noteselem=document.getElementById('notes');
    if(notesObj.length!=0){
    noteselem.innerHTML=html;
    }
    else{
        noteselem.innerHTML=`Nothing added! ,so refere above "Add your idea"`
    }
    
    
}

// function to delete the notefrom localstorage

function deleteNote(index) {
    console.log(" i am delted");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
   
    showNotes();
    
}

