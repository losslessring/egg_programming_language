import { skipAllSpacesAtTheBeginning }  from './skipAllSpacesAtTheBeginning.js'

describe("Removes empty spaces from the biginning of the string", () => {

    it("Removes one empty space from the biginning of the string", () => {
        const string = " a"
        const result = "a"
        expect(skipAllSpacesAtTheBeginning(string)).toStrictEqual(result)
    })

    it("Removes two empty spaces from the biginning of the string", () => {
        const string = "  a"
        const result = "a"
        expect(skipAllSpacesAtTheBeginning(string)).toStrictEqual(result)
    })
})