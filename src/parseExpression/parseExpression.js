import { skipAllSpacesAtTheBeginning } from './../skipAllSpacesAtTheBeginning/skipAllSpacesAtTheBeginning'

export const parseExpression = (programString) => {

    const program = skipAllSpacesAtTheBeginning(programString)
    
    const matchFirstOpenAndCloseQuotes = program.match(/^"([^"]*)"/)

    console.log(matchFirstOpenAndCloseQuotes)
    
    if(matchFirstOpenAndCloseQuotes){

        return {type: "value", value: matchFirstOpenAndCloseQuotes[1]}
    }

    // console.log(program.match(/^"([^"]*)"/))
    // if(match = /^"([^"]*)"/.exec(program)){

    //     return {type: "value", value: match[1]}
    // }

    // const matchString = program.match(/^"([^"]*)"/)

    
    // if(matchString){

    //     return {type: "value", value: matchString[1]}
    // }
    


}