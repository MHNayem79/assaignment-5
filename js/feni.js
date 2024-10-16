document.getElementById('donate-now-2').addEventListener('click',function(event){
event.preventDefault();
let inputamount2=inputfieldvaluebyid('input-amount-2');
let mybalance=inputfieldtextbyid('my-balance');
if(isNaN(inputamount2) || inputamount2<=0){
    alert('please input some valid number')
    return;
}
if(inputamount2>mybalance){
    alert('you have insuffisient amount')
    return;
}
document.getElementById('my_modal_5').showModal();
let donatetotal2=inputfieldtextbyid('donate-total-2');
let newbalance=inputamount2+donatetotal2;
document.getElementById('donate-total-2').innerText=newbalance;
let remainbalance=mybalance-inputamount2;
    document.getElementById("my-balance").innerText=remainbalance;
  // add to history
  let p = document.createElement('p');
  p.classList.add('border-2')
  p.classList.add('rounded-lg')
  p.classList.add('p-4')
  p.classList.add('m-4')
  
  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString('en-BD', {
      timeZone: 'Asia/Dhaka'
  });
  let formattedTime = currentDate.toLocaleTimeString('en-BD', {
      timeZone: 'Asia/Dhaka',
      timeZoneName: 'short'
  });
  
  
  p.innerText = `${inputamount2} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh.

  [${formattedDate} - ${formattedTime}]`;
  
  document.getElementById('Transection-container').appendChild(p);
})