const weatherContainer = document.getElementById('weather-container');

axios.get('http://127.0.0.1:3000/api/v1/environment_monitoring/rainfall_status')
.then((response) => {
    let predictions = response.data.data.result;
    let prediction = predictions[predictions.length - 1];

    let rainfall_status = prediction['Rainfall Prediction']

    if(rainfall_status == 'no rainfall'){
        let card = `
        <div class="card">
        <div class="card-container">
        <img class="card-image" src="https://www.shutterstock.com/image-vector/no-rain-sign-vector-illustration-260nw-52527799.jpg" alt="img">
        <p class="card-text">Rainfall prediction: ${rainfall_status} today.</p>
        </div>
    `

    weatherContainer.innerHTML = card;
    }else if(rainfall_status == 'rainfall'){
        let card = `
        <div class="card">
        <div class="card-container">
        <img class="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09-m13ByKUrpubPCZ8dYZybwgGFfxclo2hQ&usqp=CAU" alt="img">
        <p class="card-text">Rainfall prediction: ${rainfall_status} today.</p>
        </div>
    `

    weatherContainer.innerHTML = card;
    }else if(rainfall_status == "heavy rainfall"){
        let card = `
        <div class="card">
        <div class="card-container">
        <img class="card-image" src="https://cdn-icons-png.flaticon.com/512/4006/4006133.png" alt="img">
        <p class="card-text">Rainfall prediction: ${rainfall_status} today.</p>
        </div>
    `

    weatherContainer.innerHTML = card;
    }

    console.log(prediction)
}).catch((error) => {
    console.log(error)
});




