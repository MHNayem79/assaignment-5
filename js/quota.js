document.getElementById('donate-now-3').addEventListener('click',function(event){
    event.preventDefault();
    let inputamount3=inputfieldvaluebyid('input-amount-3');
    let mybalance=inputfieldtextbyid('my-balance');
    if(isNaN(inputamount3) || inputamount3<=0){
        alert('please input some valid number')
        return;
    }
    if(inputamount3>mybalance){
        alert('you have insuffisient amount')
        return;
    }
    document.getElementById('my_modal_5').showModal();
    let donatetotal3=inputfieldtextbyid('donate-total-3');
    let newbalance=inputamount3+donatetotal3;
    document.getElementById('donate-total-3').innerText=newbalance;
    let remainbalance=mybalance-inputamount3;
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
    
    
    p.innerText = `${inputamount3} Taka is Donated for Aid for Injured in the Quota Movement. 

    [${formattedDate} - ${formattedTime}]`;
    
    document.getElementById('Transection-container').appendChild(p);
})
    