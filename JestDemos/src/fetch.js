

function getUsers()
{
  alert('fetching..')
    return fetch("http://localhost:3000/users/")
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}
module.exports=getUsers