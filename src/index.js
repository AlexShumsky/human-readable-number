module.exports = function toReadable(number) {
	let nums = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		15: 'fifteen',
		18: 'eighteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'handred',
	}
	function getTwoSymbols(num) {
		if (num == 0) return '';
		if (nums[num]) return nums[num];
		else if (num <= 20) return nums[num % 10] + 'teen';
		else {
			return nums[Math.floor(num / 10) * 10] + ' ' + nums[num % 10];
		}
	};
	if (number == 0) return nums[number];
	return (number < 100) ? getTwoSymbols(number) :
		(getTwoSymbols(Math.floor(number / 100)) + ' hundred ' + getTwoSymbols(number % 100)).trim();
}