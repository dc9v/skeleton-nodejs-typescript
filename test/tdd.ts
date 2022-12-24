import { TDD } from "/src/tdd"

describe('index - TDD', () =>
{
  test('TDD(10, 20) = 30', () =>
  {
    expect(TDD(10, 20)).toBe(30);
  });

});