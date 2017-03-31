export default (input) => {

	if (typeof input === "number") {
		input *= 1000;
	}

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	if (typeof input === "string") {
		const splitedInput = input.replace(",", "").split(" ");
		const monthNumber  = pad( months.indexOf(splitedInput[0]) + 1 );
		const dayNumber    = pad(splitedInput[1]);
		const year         = splitedInput[2];
		input = `${year}-${monthNumber}-${dayNumber}`;
	}

	const date = new Date(input);

	const natural = `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;

	return {
		"unix": date.getTime() / 1000,
		natural
	};
};

function pad (value) {
	if (value <= 9) return "0"+value;
	return value;
}
