import { getListTemplate } from './getListTemplate';
import type { StoryComponent } from './types';

jest.mock('@glrodasz/storybook-tools-styles', () => ({
  getClasses: (a: any) => (b: any) => ({ ...a, ...b }),
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
        Array [
          <Component
            alpha="α"
            args={
              Object {
                "args": "args",
                "foo": "foo",
              }
            }
            defaultProps="defaultProps"
            foo="bar"
            getStyles={
              Object {
                "alpha": "α",
                "args": Object {
                  "args": "args",
                  "foo": "foo",
                },
                "defaultProps": "defaultProps",
                "foo": "bar",
                "styles": "styles",
              }
            }
          />,
          <Component
            args={
              Object {
                "args": "args",
                "foo": "foo",
              }
            }
            beta="β"
            defaultProps="defaultProps"
            foo="bar"
            getStyles={
              Object {
                "args": Object {
                  "args": "args",
                  "foo": "foo",
                },
                "beta": "β",
                "defaultProps": "defaultProps",
                "foo": "bar",
                "styles": "styles",
              }
            }
          />,
          <Component
            args={
              Object {
                "args": "args",
                "foo": "foo",
              }
            }
            defaultProps="defaultProps"
            foo="bar"
            gamma="γ"
            getStyles={
              Object {
                "args": Object {
                  "args": "args",
                  "foo": "foo",
                },
                "defaultProps": "defaultProps",
                "foo": "bar",
                "gamma": "γ",
                "styles": "styles",
              }
            }
          />,
        ]
      `);
    });
  });
});
