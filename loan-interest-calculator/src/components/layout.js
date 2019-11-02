import React, {Fragment, useState} from "react"
import Header from "./header"
import Toggle from "./toggle"
import "./layout.css"
import Sidebar from "./sidebar";

const Layout = ({children}) => {
    
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const openHandler = () => {
		if (!sidebarOpen){
			setSidebarOpen(true)
				
		} else {
			setSidebarOpen(false)
		}
	}
	
	let sidebar
	if (sidebarOpen){
		sidebar = <Sidebar sidebar={"sidebar"}/>
	}
	
	
	return(
        <Fragment>
            <Header />
            {sidebar}
            <Toggle click={openHandler}/>
            <p>{children}</p>
        </Fragment>
    )
}

export default Layout