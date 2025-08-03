import React from 'react'; 

function Header() {
  return (
    <header className="app-header">
      <img src="/assets/logo.svg" alt="Star Wars Logo" className="logo" style={{height:'100px'}}/>
      <h1>Star Wars Explorer</h1>
    </header>
  );
}

export default Header;
