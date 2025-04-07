const { Workout } = require('../Activities');

test('Workout should set the description', () => {
  const workout = new Workout([39, -75], 5, 30);
  workout.type = 'cycling'; // додано
  workout._setDescription();

  expect(workout.description).toMatch(/Cycling on/);
});
