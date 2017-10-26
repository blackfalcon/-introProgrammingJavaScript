describe('About Expects', function() {

  // Updating the test javascript by changing FILL_ME_IN with correct code

  // The goal is to understand about the Jasmine Test Suite.
  // Read https://jasmine.github.io/2.0/introduction.html for more info.
  // Specifically read about describe, expect, and matchers: toBeTruthy, toEqual, and toBe.

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true
    expect(true).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var expectedValue = "2";
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(1 + 1).toEqual(2);
  });
});
