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
        cards.innerHTML = "" // svuota il contenuto
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className= 'col';
            bookCard.innerHTML = `
            
                   <div class="card h-100 rounded-1 shadow  d-grid ">
  <img src="${book.img}" class="card-img-top" alt="${book.img}">
  <div class="card-body">
    <h5 class="card-title ">${book.title}</h5>
    <p class="card-text mb-3 fs-3">Price: € ${book.price}</p>
      <button class="btn btn-dark border-danger w-50 align-self-end  " onclick="removeBook(this)">Scarta</button>
  </div>
</div>
                `;

                
                cards.appendChild(bookCard)
                
                
                
                
            })
        })
        
        .catch((err) => {
            console.log('uffa!', err)
            
        })
        
        
    }
    function removeBook(button) {
        button.closest(".col").remove(); // Rimuove la card del libro
    }

    getNewBook()
     
    
    }

    getNewBook()
