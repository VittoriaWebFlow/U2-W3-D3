const getNewBook = function(){
   fetch('https://striveschool-api.herokuapp.com/books', {
    method:'GET'
   })
    

     
    .then((response) => {
        if(response.ok){
           console.log('il server ha risposto correttamente', response)
            return response.json()
                    } else 
                    throw new Error ('il server non ha risposto correttamente!')
    })


    .then((books) => {
        console.log('BOOKS', books)
        const cards = document.getElementById('books-container')
        books.forEach(user => {
            const newTitle = document.createElement('title')
            newTitle.classList.add('card')
            newTitle.innerText = user.title 
            cards.appendChild(newTitle)
            const col = document.createElement("div");
            col.className = "col-md-3 mb-4";
            col.innerHTML = `
                    <div class="card h-100">
                        <img src="${user.img}" class="card-img-top" alt="${user.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${user.title}</h5>
                            <p class="card-text"><strong>Prezzo:</strong> ${user.price}€</p>
                            <button class="btn btn-danger mt-auto" onclick="removeCard(this)">Scarta</button>
                        </div>
                    </div>
                `;

        })
    })
   
    .catch((err) => {
        console.log('uffa!', err)

     })
     
    
    }

    getNewBook()