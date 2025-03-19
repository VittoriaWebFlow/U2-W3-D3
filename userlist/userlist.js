// Utilizziamo nel nostro codice dei dati provenienti dall'esterno per generare delle parti di HTML
// Per recuperare i dati dall'esterno serve instaurare REQUEST / RESPONSE http





const getRemoveUsers = function (){
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET' 
        // // è il default in ogni caso, quindi, se andiamo a prendere un contenuto il metodo get 
        // può anche non essere invocato
     })
     .then((response) => {
         
         if(response.ok){
        console.log('evviva!', response)
       return response.json()
    } else {
        
        throw new Error('il server non ha risposto correttamente!')
    }
})
     .then((data) => {

        console.log('DATA', data)
        // credo un id nella lista e la prendo come riferimento
        const list = document.getElementById('user-list')
        data.forEach(user => {
            const newLi = document.createElement('li')
            newLi.classList.add('list-group')
            newLi.innerText = user.name + ' - ' + user.email
            list.appendChild(newLi)
            
        })
     })

     .catch((err) => {
        console.log('uffa!', err)

     })
}
getRemoveUsers()