import Link from 'next/link'
import {Icon} from '@rmwc/icon'
import {Button} from '@rmwc/button'


function ContactPage(){

    function openTwitter(){
        window.open("https://twitter.com/starhabitN")
    }

    function openDA(){
        window.open("https://starhabit.deviantart.com")
    }
    
    function emailPrompt(){
        parent.location='mailto:starshabit@gmail.com'        
    }
     return (
         <> 
            <h1 id = "contact"> Contact Information</h1>   
            <div id = "info" >

             <p id ="c"> 
             <Button className= "twitter" icon ="/images/email.png" onClick= { emailPrompt}  /> 
                 starshabit@gmail.com 
             </p>
             
             <p id = "a"> 
             <Button className= "twitter" icon ="/images/twitter.png" onClick= { openTwitter}  /> 
                twitter.com/starhabitN 
             </p>
             
             
             <p id ="b">
             <Button className= "twitter" icon ="/images/da.png" onClick= { openDA}  />   
                  starhabit.deviantart.com
            </p>
                
            </div> 
         
         
         
         
         </>

        

     )
  
}
export default ContactPage