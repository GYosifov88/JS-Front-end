window.addEventListener('load', solve);

function solve() {
   const genreInput = document.getElementById('genre');
   const songNameInput = document.getElementById('name');
   const authorInput = document.getElementById('author');
   const dateInput = document.getElementById('date');
   const addBtn = document.getElementById('add-btn');
   const songContainer = document.querySelector(".all-hits-container");
   const savedSongContainer = document.querySelector(".saved-container");
   let songLikes = 0;
   addBtn.addEventListener('click', addSongHandler);

   function addSongHandler(e){
        e.preventDefault();
    const genre = genreInput.value;
    const songName = songNameInput.value;
    const author = authorInput.value;
    const date = dateInput.value;

    if (genre !== '' && songName !=='' && author !== '' && date !==''){
        const songDiv = document.createElement('div');
        songDiv.className = 'hits-info';
        songContainer.appendChild(songDiv);
        const image = document.createElement('img');
        image.src = './static/img/img.png';
        songDiv.appendChild(image);
        const genreHeader = document.createElement('h2');
        genreHeader.textContent = `Genre: ${genre}`;
        songDiv.appendChild(genreHeader);
        const nameHeader = document.createElement('h2');
        nameHeader.textContent = `Name: ${songName}`;
        songDiv.appendChild(nameHeader);
        const authorHeader = document.createElement('h2');
        authorHeader.textContent = `Author: ${author}`;
        songDiv.appendChild(authorHeader);
        const dateHeader = document.createElement('h3');
        dateHeader.textContent = `Date: ${date}`;
        songDiv.appendChild(dateHeader);
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save song';
        saveBtn.className = 'save-btn';
        songDiv.appendChild(saveBtn);
        const likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like song';
        likeBtn.className = 'like-btn';
        songDiv.appendChild(likeBtn);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        songDiv.appendChild(deleteBtn);

        genreInput.value = '';
        songNameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        likeBtn.addEventListener('click', likeSongHandler);
        saveBtn.addEventListener('click', saveSongHandler);
        deleteBtn.addEventListener('click', deleteSongHandler);

        function deleteSongHandler(event){
            let songToDelete = event.target.parentElement;
            songToDelete.remove()
        }
        
        function likeSongHandler(){
            songLikes++;
            const likes = document.querySelector("#total-likes p");
            likes.textContent = `Total Likes: ${songLikes}`;
            likeBtn.disabled = true
        }

        function saveSongHandler(event){
            let savedSongToRemove = event.target.parentElement;
            console.log(savedSongToRemove);
            savedSongToRemove.remove()
            savedSongContainer.appendChild(savedSongToRemove)
            savedSongToRemove.removeChild(likeBtn);
            savedSongToRemove.removeChild(saveBtn);
            savedSongToRemove.removeChild(deleteBtn);
            
            const deleteSaveSongBtn = document.createElement('button');
            deleteSaveSongBtn.textContent = 'Delete';
            deleteSaveSongBtn.className = 'delete-btn';
            savedSongToRemove.appendChild(deleteSaveSongBtn);
            deleteSaveSongBtn.addEventListener('click', deleteSavedSongHandler);

            function deleteSavedSongHandler(event){
                let savedSongToDelete = event.target.parentElement;
                savedSongToDelete.remove()
            }
        }
    }
   }
}



