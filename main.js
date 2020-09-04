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
			let DateAndTime = prop.dt_txt;
			// targetting only date within the string
			let currDate = DateAndTime.slice(0, 10);
			// let currDate = new Date(prop.dt);
			console.log(currDate); // 2020-01-27
			let currTime = DateAndTime.slice(11, 19);
			console.log(currTime);
			dateElement = document.createElement('span');
			dateElement.id = 'curr-date';
			dateElement.textContent = currDate;
			document.querySelector('.widget').appendChild(dateElement);
		} catch (error) {
			alert(error, 'Cannot get dates');
		}
	});
};

const getWeekDates = data => {
	let arr_dates = [];
	try {
		data.forEach(prop => {
			// JSON dir --> data.[list].prop.value
			// pulling date from string dt_txt
			arr_dates.push(prop.dt_txt.slice(0, 10));
		});

		displayWeekDates(arr_dates);
	} catch (error) {
		alert(error, 'Cannot create list');
	}
};

const displayWeekDates = arr => {
	// Creating list of all dates
	let locate_List = document.querySelector('.week-list');
	let str_list = '<ul>';
	// removing duplicates
	const arr_no_dupe_dates = new Set(arr);

	// convert set to array and remove first date from array
	[...arr_no_dupe_dates].slice(1, 6).forEach(date => {
		// display list of dates
		str_list += '<li>' + date + '</li>';
	});
	str_list += '</ul>';

	locate_List.innerHTML = str_list;
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
		alert(error, 'Not displaying icon');
	}
};

const getCurrWeather = data => {
	// manipulating the data that's being passed
	if (data) {
		// getDate(data.list);
		getWeekDates(data.list);
		displayIcon(data);
	} else {
		alert('Cannot get current weather info');
	}
};

let local_data = getLocalData();
getCurrWeather(local_data);
