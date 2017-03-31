import timestamp_function from './timestamp_function.js';

describe('Outputs JSON acording to input', () => {
	const output1 = {
		"unix": 1450137600,
		"natural": "December 15, 2015"
	};

	const output2 = {
		"unix": 145090101,
		"natural": "August 7, 1974"
	};

	const output3 = {
		"unix": 14508979200,
		"natural": "October 9, 2429"
	};

	const output4 = {
		unix: 977702400,
		natural: "December 25, 2000"
	};

	const output5 = {
		unix: null,
		natural: null
	};

	it('Outputs output1 when receive 1450137600', ()=> {
		expect(timestamp_function(1450137600)).to.deep.equal(output1);
	});

	it('Outputs output1 when receive "1450137600" ', ()=> {
		expect(timestamp_function("1450137600")).to.deep.equal(output1);
	});

	it('Outputs output2 when receive 145090101', ()=> {
		expect(timestamp_function(145090101)).to.deep.equal(output2);
	});

	it('Outputs output3 when receive October 9, 2429', ()=> {
		expect(timestamp_function("October 9, 2429")).to.deep.equal(output3);
	});

	it('Outputs output4 when receive December 25, 2000', ()=> {
		expect(timestamp_function("December 25, 2000")).to.deep.equal(output4);
	});

	it('Outputs output4 when receive december 25, 2000', ()=> {
		expect(timestamp_function("december 25, 2000")).to.deep.equal(output4);
	});

	it('Outputs null for both when receive invalid string', ()=> {
		expect(timestamp_function("DEC242004")).to.deep.equal(output5);
	});

});
