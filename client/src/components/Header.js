import React, {Component} from 'react';

class Header extends Component{
    
    render(){
        return( 
              <nav>
    <div className="nav-wrapper">
      <a href="#" class="brand-logo center">Emaily</a>
      <ul id="nav-mobile" className="right">
        <li><a>Login with Google</a></li>
      </ul>
    </div>
  </nav>
        )     
    }
}

export default Header;

