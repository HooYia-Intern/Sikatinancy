document.addEventListener("DOMC ontentloaLoaded", () =>{
    const form = 
    document.getElementById('SignupForm');

    form.addEventListener('submit', (event)=>{
        const email =
        form.querySelector('input[name = "E-mail"]').value;
        const password =
        form.querySelector('input[name ="password"]').value;
        const confirmpassword =
        form.querySelector('input[name ="confirmpassword"]').value; 
        const pcontact =
        form.querySelector('input[name ="contact"]').value; 
        const confirmcontact =
        form.querySelector('input[name ="confirmcontact"]').value;
        if(password !==confirmpassword){
            alert( "les mots de passe ne correcpondent pas.");
            event.preventDefault();
        }
        if(contact!==confirmcontact){
            alert( "les contacts ne correcpondent pas.");
            event.preventDefault();
        }
    })
})