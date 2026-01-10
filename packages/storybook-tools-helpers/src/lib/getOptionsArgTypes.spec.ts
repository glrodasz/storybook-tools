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
        {
          "control": {
            "options": [
              "Michelangelo",
              "Leonardo",
              "Donatello",
              "Raphael",
            ],
            "type": "select",
          },
          "description": "**options:**",
          "table": {
            "type": {
              "summary": "'Michelangelo'|'Leonardo'|'Donatello'|'Raphael'",
            },
          },
        }
      `);
    });
  });
});
