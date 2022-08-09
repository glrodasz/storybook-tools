import { getObjectClasses } from "./getObjectClasses";
import { cssModuleMock } from './mocks';

describe('#getObjectClasses', () => {
  describe('when `cssModule` and `object` is provided', () => {
    it('should return the object class', () => {
      // given
      const args = { 'is-editable': true, 'is-inverted': false };
      // when
      const result = getObjectClasses(cssModuleMock, args);
      // then
      const expected = {
        '.xyz_is_editable': true,
        '.xyz_is_inverted': false,
      };

      expect(result).toStrictEqual(expected);
    });
  });

  describe("when the `object` doesn't match any `cssModule` class", () => {
    it('should return an empty object', () => {
      // given
      const args = { 'is-block': true, 'is-inline': false };
      // when
      const result = getObjectClasses(cssModuleMock, args);
      // then
      const expected = {};

      expect(result).toStrictEqual(expected);
    });
  });

  describe('when the `object` match some `cssModule` class', () => {
    it('should return an empty object', () => {
      // given
      const args = { 'is-editable': true, 'is-inline': false };
      // when
      const result = getObjectClasses(cssModuleMock, args);
      // then
      const expected = { '.xyz_is_editable': true };

      expect(result).toStrictEqual(expected);
    });
  });

  describe('when `object` is empty', () => {
    it('should return an empty object', () => {
      // given
      const args = {};
      // when
      const result = getObjectClasses(cssModuleMock, args);
      // then
      const expected = {};

      expect(result).toStrictEqual(expected);
    });
  });
});
