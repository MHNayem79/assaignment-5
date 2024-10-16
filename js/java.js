document.getElementById('donate-now').addEventListener('click',function(event){
    event.preventDefault();
    let inputamount=inputfieldvaluebyid('input-amount');
    let mybalance=inputfieldtextbyid('my-balance');
    if(isNaN(inputamount) || inputamount<=0){
        alert('please input some valid number')
        return;
    }
    if(inputamount>mybalance){
        alert('you have insuffisient amount')
        return;
    }
    document.getElementById('my_modal_5').showModal();
    let donatetotal=inputfieldtextbyid('donate-total');
    let newbalance=inputamount+donatetotal;
    document.getElementById('donate-total').innerText=newbalance;
    let remainbalance=mybalance-inputamount;
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
    
    
    p.innerText = `${inputamount} Taka is Donated for Donate For Flood at Noakhali, Bangladesh. 

    [${formattedDate} - ${formattedTime}]`;
    
    document.getElementById('Transection-container').appendChild(p);
})
