function attachEvents() {
    const BASE_POST_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const BASE_COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';
    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const postDropDown = document.getElementById('posts');
    const titleName = document.getElementById('post-title');
    const postText = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');
    let postContent = {};

    loadBtn.addEventListener('click', loadPostsHandler);
    viewBtn.addEventListener('click', viewPostHandler);

    async function loadPostsHandler(){
        const response = await fetch(BASE_POST_URL);
        let posts = await response.json();
        posts = Object.values(posts);
        posts.forEach(post => {
            let option = createHTMLElement('option', `${post.id}`, `${post.title}`, postDropDown)
            postContent[post["id"]] = post["body"]; 
        });
    }

    async function viewPostHandler(){
        const response = await fetch(BASE_COMMENTS_URL);
        let comments = await response.json();
        comments = Object.values(comments);
        let selected = postDropDown.querySelector("option:checked")
        let selectedPostComments = Object.values(comments).filter(c => c["postId"] === selected.value);
        selectedPostComments.forEach(comment => {
            let commentText = createHTMLElement('li', '', `${comment.text}`, postComments)
        });
        postText.textContent = postContent[selected.value];
        titleName.textContent = selected.textContent;
        
    }
    

    function createHTMLElement(typeOfElement, value, content, parentElement, classToAdd) {
        const element = document.createElement(typeOfElement);
        
        if (value){
            element.value = value;
        }
        if (content) {
          element.textContent = content;
        }
        if(parentElement){
          parentElement.appendChild(element);
        }
        if(classToAdd){
          element.className = classToAdd;
        }
        return element;
      }
    
}

attachEvents();