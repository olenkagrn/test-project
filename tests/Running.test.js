const { Running } = require('../Activities');
describe('Running', () => {
  test('should create a new running workout', () => {
    const run = new Running([50, 50], 5, 25, 150);
    expect(run).toBeInstanceOf(Running);
    expect(run.pace).toBeCloseTo(5);
    expect(run.description).toMatch(/Running on/);
  });

  test('should calculate pace', () => {
    const run = new Running([40, 40], 10, 50, 140);
    expect(run.calcPace()).toBeCloseTo(5);
  });
});
