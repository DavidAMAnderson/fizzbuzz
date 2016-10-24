describe('fizzBuzz',function() {
  var fizzbuzz;
  describe('knows when a number is',function() {
    it('is divisible by 3',function(){
      fizzbuzz = new fizzBuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    };)
  });
});
