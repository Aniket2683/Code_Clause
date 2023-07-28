function addNewWEField() {
    // console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 2);
    newNode.classList.add("mt-1");
    newNode.setAttribute("placeholder", "Enter your Work experience details here....");

    let weob = document.getElementById("weField");
    let weAddButtonOb = document.getElementById("weAddButton");
    
    weob.insertBefore(newNode, weAddButtonOb);


}

function addNewAQField() {
    // console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.setAttribute("rows", 2);
    newNode.classList.add("mt-1");
    newNode.setAttribute("placeholder", "Enter your Academic qualifications details here....");

    let aqob = document.getElementById("aqField");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqob.insertBefore(newNode, aqAddButtonOb);
}

function addNewPDField() {
    // console.log("Adding new field");
      let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pdField");
    newNode.setAttribute("rows", 2);
    newNode.classList.add("mt-1");
    newNode.setAttribute("placeholder", "Enter your Project details here....");

    let pdob = document.getElementById("pdField");
    let pdAddButtonOb = document.getElementById("pdAddButton");
    
    pdob.insertBefore(newNode, pdAddButtonOb);
}


// GENERATING CV

function generateResume() {
    //    console.log("Generating CV");
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    //direct
    document.getElementById('nameT2').innerHTML = nameField;


    // contact details
    let contactField = document.getElementById("contactField").value;
    document.getElementById("contactT").innerHTML = contactField;

    //address
    let addressField = document.getElementById("addressField").value;
    document.getElementById("addressT").innerHTML = addressField;

    //email
    let emailField = document.getElementById("emailField").value;
    document.getElementById("emailFieldT").innerHTML = emailField;

    //Linkedin
    let linkedField = document.getElementById("linkedField").value;
    document.getElementById("linkedFieldT").innerHTML = linkedField;

    //hobbies
    let hobbiesField = document.getElementById("hobbiesField").value;
    document.getElementById("hobbiesFieldT").innerHTML = hobbiesField;

    //Personal obj
    let objField = document.getElementById("objField").value;
    document.getElementById("objFieldT").innerHTML = objField;

    // //Academic Quali
    
    let aqs = document.getElementsByClassName("aqField")
    let str1 = ''
    
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqFieldT").innerHTML = str1;
    

    // work EXP

    let wes = document.getElementsByClassName("weField")
    let str = ''
    
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weFieldT").innerHTML = str;


    
    // //Project
    
    let pds = document.getElementsByClassName("pdField")
    let str2 = ''
    
    for (let e of pds) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("pdFieldT").innerHTML = str2;



    
    // //skills
    let skillField = document.getElementById("skillField").value;
    document.getElementById("skillT").innerHTML = skillField;
  

    //Image setting

    let file = document.getElementById("imgField").files[0]
    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    // set img to template
    reader.onloadend = function () {
        document.getElementById("imgFieldT").src = reader.result;
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}
 
//print cv
function printResume() {
    window.print();
} 
