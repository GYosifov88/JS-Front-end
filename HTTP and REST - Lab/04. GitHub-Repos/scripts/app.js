function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
   const resContainer = document.getElementById('res');
   fetch(BASE_URL, {method: 'GET'})
   .then((res) => res.text())
   .then((data) => {
      resContainer.textContent = data;
   })
   .catch((err) => {
      console.error(err);
   });
}