import { getDynamicClasses } from './getDynamicClasses.js';
import { cssModuleMock, propsMock } from './mocks.js';

describe('#getDynamicClasses', () => {
  describe('when all `props` match the `classes` array', () => {
    it('should return the dynamic classes', () => {
      // given
      const args = ['size', 'color'];
      // when
      const result = getDynamicClasses(cssModuleMock, propsMock, args);
      // then
      const expected = '.xyz_size_sm .xyz_color_red'

      expect(result).toStrictEqual(expected);
    });
  });

  describe("when all `props` doesn't match the `classes` array", () => {
    it('should return an empty object', () => {
      // given
      const args = ['type', 'width'];
      // when
      const result = getDynamicClasses(cssModuleMock, propsMock, args);
      // then
      const expected = '';

      expect(result).toStrictEqual(expected);
    });
  });

  describe('when some `props` match the `array` classes', () => {
    it('should return the dynamic classes', () => {
      // given
      const args = ['type', 'color'];

      // when
      const result = getDynamicClasses(cssModuleMock, propsMock, args);
      // then
      const expected = '.xyz_color_red'

      expect(result).toStrictEqual(expected);
    });
  });
});
