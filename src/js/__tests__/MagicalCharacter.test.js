// MagicalCharacter.test.js

import Daemon from "../Daemon.js";
import Magician from "../Magician.js";

describe("MagicalCharacter", () => {

  let magician, 
  daemon;

  beforeEach(() => {
    magician = new Magician('Mage');
    daemon = new Daemon('Demon');
  });

  test("Проверяем геттер stoned, должен вернуть false", () => {
    expect(magician.stoned).toBe(false)
    expect(daemon.stoned).toBe(false)
  });

});