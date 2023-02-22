
console.log("hello world")

const message = document.querySelector("#message");

function addMovie(event) {
    event.preventDefault();

    const inputField = document.querySelector("input");
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    const movieList = document.querySelector("ul");

    movieTitle.textContent = inputField.value;
    
    movie.appendChild(movieTitle);
    movieList.appendChild(movie);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    movieTitle.addEventListener("click", crossOffMovie);

    inputField.value = "";

}

function revealMessage() {
    message.classList.remove('hide');
    setTimeout(function() {
      message.classList.add('hide');
    }, 1000);
  }

  function deleteMovie(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const ul = li.parentNode;
    const movieTitle = li.querySelector('span').textContent;
  
    ul.removeChild(li);
    message.textContent = `${movieTitle} deleted!`;
  
    revealMessage();
  }
  
  
  function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked")) {
      message.textContent = `${event.target.textContent} watched!`;
    } else {
      message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
  }


const form = document.querySelector('form');
form.addEventListener("submit", addMovie);