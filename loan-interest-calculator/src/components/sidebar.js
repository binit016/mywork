import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default props => {
	


 
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
	  
	   <h2>Input Values</h2>
    <ul></ul>
	
	
	
	
	<a className="menu-item" href="/amt1.js">
        one
      </a>
	  
	  <a className="menu-item" href="/two.php">
        two
      </a>
	  
	  

    </Menu>
  );
};