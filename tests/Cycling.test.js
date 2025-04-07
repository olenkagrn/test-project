const { Cycling } = require('../Activities');

describe('Cycling', () => {
  let cycling;

  beforeEach(() => {
    cycling = new Cycling([50, 30], 20, 60, 500);
  });

  it('should create a new cycling workout', () => {
    expect(cycling).toBeInstanceOf(Cycling);
  });

  it('should calculate speed', () => {
    expect(cycling.calcSpeed()).toBe(20);
  });
});
