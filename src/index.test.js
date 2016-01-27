var expect = require('chai').expect;
var starWars = require('./index.js');

describe('starwars-random-names', function () {
	describe('all', function () {
		it('should be an array of strings.', function () {
			expect(starWars.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array){
				return array.every(function(item){
					return typeof item === 'string';
				})
			}
		});

		it('Should contain Luke Skywalker', function () {
			expect(starWars.all).to.include('Luke Skywalker');
		});

		it('Should return a random value from the startWars.all', function () {
			var randomValue = starWars.random();
			expect(starWars.all).to.include(randomValue);
		});

	});
});