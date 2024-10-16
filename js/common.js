function inputfieldvaluebyid(id){
    let inputvalue=document.getElementById(id).value;
    let inputnumber=parseFloat(inputvalue);
    return inputnumber;
}
function inputfieldtextbyid(id){
    let inputvalue=document.getElementById(id).innerText;
    let inputnumber=parseFloat(inputvalue);
    return inputnumber;
}
function showformbyid(id){
    document.getElementById('donate-part').classList.add('hidden');
    document.getElementById('history-part').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}