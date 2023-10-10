import { parseExpression } from "./parseExpression"

describe("Parse Expression", () => {
    it("Parse expression", () => {
        expect(parseExpression).toBeDefined()
    })
    
    it("Parses string", () => {
      const string = `"a"`
      const result = {type: "value", value: "a"}
      expect(parseExpression(string)).toStrictEqual(result)
  })
    
})
