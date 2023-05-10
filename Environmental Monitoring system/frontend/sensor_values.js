const tableBody = document.getElementById('table-body')


axios.get(' http://127.0.0.1:3000/api/v1/environment_monitoring/sensor_values')
    .then((response) => {
        let sensor_values = response.data.data.result;
        sensor_values.forEach((item) => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const td6 = document.createElement('td');
            const td7 = document.createElement('td');
            const td8 = document.createElement('td');

            td1.textContent = item.Date;
            td2.textContent = item.Time;
            td3.textContent = item.MQ135_value;
            td4.textContent = item.lm35_temperature;
            td5.textContent = item.DHT11_temperature;
            td6.textContent = item.dht11_humidity;
            td7.textContent = item.Sound_value;
            td8.textContent = item.rain_value;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);

            tableBody.appendChild(tr);
          });

        

        console.log(sensor_values);


    })
