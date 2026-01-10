import { vi } from 'vitest';
import { getClasses } from './getClasses.js';
import { cssModuleMock, propsMock } from './mocks.js';

vi.mock('classnames', () => ({
  default: (value: unknown) => value,
}));

describe('#getClasses', () => {
  describe('when `arg` is an array', () => {
    it('should return the classnames', () => {
      // given
      const args = ['size', 'color'];
      // when
      const result = getClasses(cssModuleMock)(propsMock)(args);
      // then
      const expected = ['.xyz_size_sm .xyz_color_red'];

      expect(result).toStrictEqual(expected);
    });
  });

  describe('when `arg` is an string and `cssModule` contains the `classKey`', () => {
    it('should return the classnames', () => {
      // given
      const args = 'size-sm';
      // when
      const result = getClasses(cssModuleMock)(propsMock)(args);
      // then
      const expected = ['.xyz_size_sm'];

      expect(result).toStrictEqual(expected);
    });
  });

  describe("when `arg` is an string and `cssModule` doesn't contain the `classKey`", () => {
    it('should return the classnames', () => {
      // given
      const args = 'width-full';
      // when
      const result = getClasses(cssModuleMock)(propsMock)(args);
      // then
      const expected = ['width-full'];

      expect(result).toStrictEqual(expected);
    });
  });

  describe('when `arg` is an object', () => {
    it('should return the classnames', () => {
      // given
      const args = { 'is-editable': true, 'is-block': true };
      // when
      const result = getClasses(cssModuleMock)(propsMock)(args);
      // then
      const expected = [{ '.xyz_is_editable': true }];

      expect(result).toStrictEqual(expected);
    });
  });
});
