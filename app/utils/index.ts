export const formatEmail = (email:string)=>{
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const isEmail= (mail:string) =>  regex.test(mail)

    if(isEmail(email)){
        const partialEmail = email.split("@");
        let fristPart = partialEmail[0];
        let secondPart = partialEmail[1].split(".");
        let formatedEmail = fristPart + "@***." + secondPart[1];
        return formatedEmail
    }else{
        return email
    }
    
}


export const formatDate = (timestamp:number | string)=>{
    if(!timestamp){return timestamp}
    
    let date =  new Date(timestamp)
    let formatedDate =  date.toLocaleDateString("en-GB", 
     { day: 'numeric', year: 'numeric', month: 'long' }); // DD MM YYYY

    return formatedDate

}