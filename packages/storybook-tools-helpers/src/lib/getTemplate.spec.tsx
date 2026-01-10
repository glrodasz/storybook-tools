import { vi } from 'vitest';
import { getTemplate } from './getTemplate.js';
import type { StoryComponent } from './types.js';

vi.mock('@glrodasz/storybook-tools-styles', () => ({
  getClasses: (a: unknown) => (b: unknown) => ({
    ...(a as object),
    ...(b as object),
  }),
}));

describe('#getTemplate', () => {
  describe('when `Component`, `styles`, and `args` are provided', () => {
    it('should return a `Component` with `defaultProps`, `styles` and `args`', () => {
      // given
      const Component: StoryComponent = (props) => <>{props}</>;
      Component.defaultProps = { defaultProps: 'defaultProps', foo: 'bar' };

      const styles = { styles: 'styles' };
      const args = { args: 'args', foo: 'foo' };

      // when
      const result = getTemplate(Component, styles)(args);

      // then
      expect(result).toMatchInlineSnapshot(`
        {
          "$$typeof": Symbol(react.transitional.element),
          "_owner": null,
          "_store": {},
          "key": null,
          "props": {
            "args": "args",
            "defaultProps": "defaultProps",
            "foo": "foo",
            "getStyles": {
              "args": "args",
              "defaultProps": "defaultProps",
              "foo": "foo",
              "styles": "styles",
            },
          },
          "type": [Function],
        }
      `);
    });
  });
});
