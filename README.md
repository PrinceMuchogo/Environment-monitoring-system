# Environment-monitoring-system
It is an IOT and machine learning based system, which now has a complete prototype and ready for presentation to potential investors.
This project has a potential application in mining industry to monitor harmful gases, agriculture sector and many more.
An Arduino board is used to collect data from the sensors and it is sent to the Raspberry pi which then handles data processing.
A Naive Bayes Algorithm was trained into a model which is being used to make predictions of weather conditions such as rainfall.
So these predictions are done on the Raspberry pi and then stored in a csv file.
The data is then sent to an online Mongodb database from the raspberry pi, which is connected to a web application which interfaces with the end users.
