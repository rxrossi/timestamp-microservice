export default (input) => {

	if (typeof input === "number" || !isNaN(input)) {
		input *= 1000;
	}

	const months = [
		"january",
		"february",
		"march",
		"april",
		"may",
		"june",
		"july",
		"august",
		"september",
		"october",
		"november",
		"december"
	];

	if (typeof input === "string") {
		const splitedInput = input.replace(",", "").split(" ");
		const monthNumber  = pad( months.indexOf(splitedInput[0].toLowerCase()) + 1 );
		const dayNumber    = pad(splitedInput[1]);
		const year         = splitedInput[2];
		input = `${year}-${monthNumber}-${dayNumber}`;
	}


	const date = new Date(input);

	if (date.toString() === "Invalid Date") {
		return {
			unix: null,
			natural: null,
		}
	}

	const month = months[date.getUTCMonth()].replace(/\b\w/g, l => l.toUpperCase());

	const natural = `${month} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;

	return {
		"unix": date.getTime() / 1000,
		natural
	};
};

function pad (value) {
	if (value <= 9) return "0"+value;
	return value;
}
