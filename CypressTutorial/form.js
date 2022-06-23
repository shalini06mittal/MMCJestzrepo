const form = document.forms[0];

form.addEventListener('submit',event=>{
    event.preventDefault();
    new FormData(form);
});

document.addEventListener('formdata',event=>{
    const body = Object.fromEntries(event.formData.entries());
    const jsonBody = JSON.stringify(body);
    const request = new XMLHttpRequest();
    request.open('POST','https://jsonplaceholder.typicode.com/users/');
    request.send(jsonBody);
    request.onload = function()
    {
        //console.log(this.response,this.status)
        const jsonResponse = JSON.parse(this.response);
        console.log(jsonResponse)
        document.body.innerHTML += `Response from server: ${jsonResponse.id}`;
    };
});