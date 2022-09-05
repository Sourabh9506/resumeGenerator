function addNewWorkEField(){
   
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute('placeholder',"Enter here")



    let weOb=document.getElementById("weField");
    let weAddButtonOb=document.getElementById("weAddButton")

    weOb.insertBefore(newNode,weAddButtonOb);


}

function addNewAQField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute('placeholder',"Enter here")



    let aqOb=document.getElementById("aqField");
    let aqAddButtonOb=document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

// generating cv

function generateCV(){
    
    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1')

    nameT1.innerHTML=nameField;

    // direct
    document.getElementById('nameT2').innerHTML=nameField;

    // 
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;

    document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;

    document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;

    document.getElementById('LinkedT').innerHTML=document.getElementById("linkedField").value;


    // objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let workEx=document.getElementsByClassName("weField");

    let str="";

    for(let e of workEx){
        str=str + `<Li> ${e.value}</Li>`;

    }
    document.getElementById("weT").innerHTML=str;

    let acadQual=document.getElementsByClassName("aqField");

    let str1="";

    for(let e of workEx){
        str1=str1 + `<Li> ${e.value}</Li>`;

    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display="block";
   
}
function printCV(){
    window.print();
}
