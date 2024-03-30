window.addEventListener("load", () =>{
    const submit = document.getElementById("submit");
    submit.addEventListener("click", ()=>{
        const username = document.getElementById("username").value;

    //stores variable value in web page to be used later on. It is Global (To be used in other webpages too) and deletes after page is gone
    sessionStorage.setItem('USERNAME', username);
    })


});