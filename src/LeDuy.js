import { useEffect, useState } from 'react'



function LeDuy(){
  
    return(
        <div>
           <input type="button" name="sayHello" value="Wait for my Hello!"
            onClick={setTimeout('alert(\'Hello!\')', 10000)}/>
        </div>
        
    )
}


export default LeDuy