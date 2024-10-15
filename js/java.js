document.getElementById('donate-now').addEventListener('click',function(event){
    event.preventDefault();
    let inputamount=document.getElementById('input-amount').value;
    let donatetotal=document.getElementById('donate-total').innerText;
    let newbalance=parseFloat(inputamount)+parseFloat(donatetotal);
    document.getElementById('donate-total').innerText=(newbalance);
    let mybalance =document.getElementById('my-balance').innerText;
    let remainbalance=parseFloat(mybalance)-parseFloat(inputamount);
    document.getElementById('my-balance').innerText=remainbalance;

})