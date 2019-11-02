import React, {Fragment} from "react"
import "./componentStyles.css"

const Toggle = (props) => {
	
	
	
	
	
    return(
        <Fragment>
            <button id="toggle" onclick={props.click}>&#8801;</button>
        </Fragment>
    )
}

export default Toggle