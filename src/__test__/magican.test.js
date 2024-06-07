import Magician from "../magician";

// eslint-disable-next-line no-undef
test("check create object Magician", () => {
  const daemon = new Magician("Mag", false, 1);
  const expectedValue = {
    name: "Mag",
    type: "Magician",
    health: 100,
    level: 1,
    changeAttack: 10,
    defence: 40,
    stone: false,
    interval: 1
  };
  // eslint-disable-next-line no-undef
  expect(daemon).toEqual(expectedValue);
});

// eslint-disable-next-line no-undef
test('Проверка силы атаки без "дурмана"', () => {
  const daemon = new Magician("Mag", false, 2);
  daemon.attack = 100;
  // eslint-disable-next-line no-undef
  expect(daemon.attack).toBe(90);
});

// eslint-disable-next-line no-undef
test('Проверка силы атаки c "дурманои"', () => {
const daemon = new Magician("Mag", true, 2);
daemon.attack = 100;
// eslint-disable-next-line no-undef
expect(daemon.attack).toBe(85);
});

// eslint-disable-next-line no-undef
test('Проверка силы атаки ', () => {
const daemon = new Magician("Mag", true, 2);
daemon.attack = 0;
// eslint-disable-next-line no-undef
expect(daemon.attack).toBe(0);
});
