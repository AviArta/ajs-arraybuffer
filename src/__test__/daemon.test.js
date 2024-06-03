import Daemon from "../daemon";

// eslint-disable-next-line no-undef
test("check create object Daemon", () => {
  const daemon = new Daemon("Cap");
  const expectedValue = {
    name: "Cap",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  // eslint-disable-next-line no-undef
  expect(daemon).toEqual(expectedValue);
});
