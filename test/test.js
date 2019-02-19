import { Magician, Daemon } from '../src/function';

test('Атака Daemon без дурмана', () => {
  const expected = 60;
  const daemon = new Daemon();
  daemon.attack = 5;
  const received = daemon.attackDist;
  expect(received).toBe(expected);
});

test('Атака одурманенного Magician', () => {
  const expected = 85;
  const magician = new Magician();
  magician.stoned;
  magician.attack = 2;
  const received = magician.attackDist;
  expect(received).toBe(expected);
});
