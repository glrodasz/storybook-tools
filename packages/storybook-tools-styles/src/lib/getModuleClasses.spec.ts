import { getModuleClasses } from "./getModuleClasses.js";
import { cssModuleMock } from "./mocks.js";

describe('#getModuleClasses', () => {
  describe('when `cssModule` contains the `classKey`', () => {
    it('should return the module class', () => {
      // given
      const args = 'size-sm';
      // when
      const result = getModuleClasses(cssModuleMock, args);
      // then
      const expected = '.xyz_size_sm';

      expect(result).toBe(expected);
    });
  });
  describe("when `cssModule` doesn't contain the `classKey`", () => {
    it('should return the `classKey`', () => {
      // given
      const args = 'type-primary';
      // when
      const result = getModuleClasses(cssModuleMock, args);
      // then
      const expected = 'type-primary';

      expect(result).toBe(expected);
    });
  });

  describe('when `cssModule` is undefined', () => {
    it('should return the `classKey`', () => {
      // given
      const args = 'size-sm';
      // when
      const result = getModuleClasses(undefined, args);
      // then
      const expected = 'size-sm';

      expect(result).toBe(expected);
    });
  });

  describe('when `cssModule` is null', () => {
    it('should return the `classKey`', () => {
      // given
      const args = 'size-sm';
      // when
      const result = getModuleClasses(null, args);
      // then
      const expected = 'size-sm';

      expect(result).toBe(expected);
    });
  });
});
