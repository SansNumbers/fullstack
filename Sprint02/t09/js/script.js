function getFormattedDate(date) {
	let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return `${setFormatOfDate(date.getDate())}.${setFormatOfDate(date.getMonth() + 1)}.${date.getFullYear()} ${setFormatOfDate(date.getHours())}:${setFormatOfDate(date.getMinutes())} ${dayOfWeek[date.getDay()]}`;
}

function setFormatOfDate(date) {
	if(date.toString().length === 1)
	    return String('0' + date);
	else
	    return date;
}
