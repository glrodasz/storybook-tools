import { getTemplate } from './getTemplate';
import type { StoryComponent } from './types';

jest.mock('@glrodasz/storybook-tools-styles', () => ({
  getClasses: (a: any) => (b: any) => ({ ...a, ...b }),
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
        <Component
          args="args"
          defaultProps="defaultProps"
          foo="foo"
          getStyles={
            Object {
              "args": "args",
              "defaultProps": "defaultProps",
              "foo": "foo",
              "styles": "styles",
            }
          }
        />
      `);
    });
  });
});
