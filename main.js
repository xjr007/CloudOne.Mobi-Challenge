const getLocalData = () => {
	// fetching weather data from local storage
	let local_data = JSON.parse(localStorage.getItem('data'));
	return local_data;
};

const getDate = date => {
	// mapping through weather info
	date.map(prop => {
		// targetting the date property of the data
		if (prop.dt_txt) {
			// targetting only date within the string
			let strDate = prop.dt_txt;
			let currDate = strDate.substring(0, 10);
			console.log(currDate);
		}
	});
};

const getCurrWeather = data => {
	// manipulating the data that's being passed
	if (data) {
		try {
			getDate(data.list[0]);
		} catch (error) {
			alert('Something went wrong when passing data');
		}
	} else {
		alert('Cannot get current weather info');
	}
};

let data = getLocalData();
getCurrWeather(data);
