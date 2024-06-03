import Magician from "../magician";

// eslint-disable-next-line no-undef
test("check create object Magician", () => {
  const magician = new Magician("Mag");
  const expectedValue = {
    name: "Mag",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }

  // eslint-disable-next-line no-undef
  expect(magician).toEqual(expectedValue);
});
