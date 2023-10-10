export const skipAllSpacesAtTheBeginning = (string) => {
    const firstNonSpaceSymbolIndex = string.search(/\S/)

    return (firstNonSpaceSymbolIndex === -1) ? "" : string.slice(firstNonSpaceSymbolIndex)

}
