import { vi } from 'vitest';
import { getListTemplate } from './getListTemplate.js';
import type { StoryComponent } from './types.js';

vi.mock('@glrodasz/storybook-tools-styles', () => ({
  getClasses: (a: unknown) => (b: unknown) => ({ ...(a as object), ...(b as object) }),
}));

describe('#getListTemplate', () => {
  describe('when `Component`, `styles`, `items`, and `args` are provided', () => {
    it('should return a `Component` with `defaultProps`, `styles` and `args`', () => {
      // Arrange
      const Component: StoryComponent = (props) => <>{props}</>;
      Component.defaultProps = { defaultProps: 'defaultProps', foo: 'bar' };

      const styles = { styles: 'styles' };
      const args = { args: 'args', foo: 'foo' };
      const items = [{ alpha: 'α' }, { beta: 'β' }, { gamma: 'γ' }];

      // Act
      const result = getListTemplate(Component, styles)({ items, args });

      // Assert
      expect(result).toMatchInlineSnapshot(`
        [
          {
            "$$typeof": Symbol(react.transitional.element),
            "_owner": null,
            "_store": {},
            "key": "0",
            "props": {
              "alpha": "α",
              "args": {
                "args": "args",
                "foo": "foo",
              },
              "defaultProps": "defaultProps",
              "foo": "bar",
              "getStyles": {
                "alpha": "α",
                "args": {
                  "args": "args",
                  "foo": "foo",
                },
                "defaultProps": "defaultProps",
                "foo": "bar",
                "styles": "styles",
              },
            },
            "type": [Function],
          },
          {
            "$$typeof": Symbol(react.transitional.element),
            "_owner": null,
            "_store": {},
            "key": "1",
            "props": {
              "args": {
                "args": "args",
                "foo": "foo",
              },
              "beta": "β",
              "defaultProps": "defaultProps",
              "foo": "bar",
              "getStyles": {
                "args": {
                  "args": "args",
                  "foo": "foo",
                },
                "beta": "β",
                "defaultProps": "defaultProps",
                "foo": "bar",
                "styles": "styles",
              },
            },
            "type": [Function],
          },
          {
            "$$typeof": Symbol(react.transitional.element),
            "_owner": null,
            "_store": {},
            "key": "2",
            "props": {
              "args": {
                "args": "args",
                "foo": "foo",
              },
              "defaultProps": "defaultProps",
              "foo": "bar",
              "gamma": "γ",
              "getStyles": {
                "args": {
                  "args": "args",
                  "foo": "foo",
                },
                "defaultProps": "defaultProps",
                "foo": "bar",
                "gamma": "γ",
                "styles": "styles",
              },
            },
            "type": [Function],
          },
        ]
      `);
    });
  });
});
