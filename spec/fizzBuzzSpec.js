describe('FizzBuzz',function() {
  var Fizzbuzz;
  beforeEach(function() {
     fizzbuzz = new FizzBuzz();
   });

  describe('knows when a number is',function() {
    it('is divisible by 3',function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is not', function() {

    it('divisible by three', function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

  describe('knows when a number is',function() {

    it('is divisible by 5',function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('knows when a number is not', function() {

    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

  });

  describe('prints buzz when a number is', function() {

    it('divisible by 5', function(){

      expect(fizzbuzz.play(5)).toEqual("buzz");
    });

  });

  describe('prints fizz when a number is', function() {

    it('divisible by 3', function(){
      expect(fizzbuzz.play(3)).toEqual("fizz");
    });

  });

  describe('prints fizzbuzz when a number is', function() {

    it('divisible by 5 and 3', function(){
      expect(fizzbuzz.play(15)).toEqual("fizzbuzz");
    });

  });

});
