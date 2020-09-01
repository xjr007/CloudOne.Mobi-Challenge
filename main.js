const getLocalData = () => {
	// fetching weather data from local storage
	let local_data = JSON.parse(localStorage.getItem('data'));
	return local_data;
};

const getDate = date => {
	// mapping through weather info
	date.map(prop => {
		// targetting the date property of the data
		try {
			// targetting only date within the string
			let currDate = prop.dt_txt.substring(0, 10);
			// let currDate = new Date(prop.dt);
			console.log(currDate); // 2020-01-27
			// let currTime = prop.dt_txt.substing(11, 19);
			// console.log(currTime);
			dateElement = document.createElement('span');
			dateElement.id = 'curr-date';
			dateElement.textContent = currDate;
			document.querySelector('.widget').appendChild(dateElement);
		} catch (error) {
			alert('Cannot get dates');
		}
	});
};

const displayIcon = data => {
	// Pass icon code into openweather api
	try {
		let locateIcon = document.querySelector('.weather-icon');
		// Get icon code from data
		const { icon } = data.list[0].weather[0];
		// insert into api
		// fetch it
		// then create a new img
		// display icon
		locateIcon.innerHTML = `<img src='http://openweathermap.org/img/w/${icon}.png' />`;
	} catch (error) {
		alert('Not displaying icon');
	}
};

const getCurrWeather = data => {
	// manipulating the data that's being passed
	if (data) {
		getDate(data.list);
		displayIcon(data);
	} else {
		alert('Cannot get current weather info');
	}
};

let local_data = getLocalData();
getCurrWeather(local_data);
