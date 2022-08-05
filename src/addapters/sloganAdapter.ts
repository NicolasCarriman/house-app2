
export const sloganAdapter = (slogan: string) =>{
    try {
        if(typeof slogan === 'string'){
            return slogan 
        }
    } catch (e){
        console.log(e)
    }
        
}