import { getOptionsArgTypes } from './getOptionsArgTypes.js';

describe('#getOptionsArgTypes', () => {
  describe('Given some `options`', () => {
    it('should return the arg types structure', () => {
      // Arrange
      const options = ['Michelangelo', 'Leonardo', 'Donatello', 'Raphael'];

      // Act
      const result = getOptionsArgTypes(options);

      // Assert
      expect(result).toMatchInlineSnapshot(`
        Object {
          "control": Object {
            "options": Array [
              "Michelangelo",
              "Leonardo",
              "Donatello",
              "Raphael",
            ],
            "type": "select",
          },
          "description": "**options:**",
          "table": Object {
            "type": Object {
              "summary": "'Michelangelo'|'Leonardo'|'Donatello'|'Raphael'",
            },
          },
        }
      `);
    });
  });
});
