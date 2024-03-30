window.addEventListener('load', ()=>{
/*
    var from = document.getElementById("accounts-1").value;
    var to = document.getElementById("accounts-2");
    var amount = document.getElementById("amount-container")
    
    function showAnswer (value){
        if(value == "Checking"){
            to.remove("Checking");
        }
    }
    */

    const transaction = document.getElementById('transactions').value;

    const submit = document.getElementById("submit-transactions");
    submit.addEventListener("click", ()=>{
        const transaction = transaction;

    //stores variable value in web page to be used later on. It is Global (To be used in other webpages too) and deletes after page is gone
    sessionStorage.setItem('TRANSACTION', transaction);
    })


});


