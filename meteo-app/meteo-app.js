const getCellinoWeather = function () {
    const weatherURL =
    // copio il link dal sito del meteo

    fetch(weatherURL)
    .then((response) => {
if(response.ok){
    //ottimo!
    return response.json()

} else {
    // abbiamo ottenuto un errore es. 400, 404, 401, ecc.
    throw new Error ('Errore nel recupero del meteo Cellino')
}
    })

    .then((data) => {
// data è un oggetto con dentro u dati del meteo!
console.log('DATA', data)

const currentTemp = data.current.temperature_2m
const max = data.daily.temperature_2m_max[0]
const min = data.daily.temperature_2m_min[0]

    })


    .catch((err) => {
console.log('si è verificato un errore', err)
    })
}

getCellinoWeather()