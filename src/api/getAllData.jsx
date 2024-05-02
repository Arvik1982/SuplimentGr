import {host} from'../var/var'

export default async function getAllDataApi(){  
       console.log('111')
    try {
      const response = await fetch(`${host}`, {
        method: 'GET',
       mode:'no-cors'
        
      })
        if (!response.ok) {
        const answerError = await response.json() 
        console.log(answerError)              
        throw new Error(answerError.error)
      }
      const listUsers = await response.json()
        console.log(listUsers)
      return listUsers

    } 
    catch (error) {         
      if (error instanceof Error) {
        throw new Error(error.message)
      }    
      else{
        console.log(error)
        throw new Error('unknown error')
      }          
    }
  




}