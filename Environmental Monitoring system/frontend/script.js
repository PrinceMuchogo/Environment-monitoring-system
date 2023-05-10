

console.log(axios)

axios.get('http://127.0.0.1:3000/api/v1/environment_monitoring/rainfall_status')
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })