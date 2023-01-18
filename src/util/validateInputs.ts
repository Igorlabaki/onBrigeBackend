export function validateInputs(field: boolean[]){
    if(field.every((item) => item)){
        return true
    }else{
        throw new Error(`All inputs are required.`)
    }
}