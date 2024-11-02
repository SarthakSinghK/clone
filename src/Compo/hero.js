import React from 'react'

const Greet = (props) => {
  return (
    <>
      <div id="back">
        <img
          src="C:\Users\sandy\Documents\project\clone\public\image.jpg"
          alt=""
        />
        <nav className="navbar">
          <h2 className='hed'>{props.brandname}</h2>
          <textarea
            
            rows="1"
            cols="30"
            className="location"
            placeholder="this is the location area"
            id="loc"
          ></textarea>
          <textarea placeholder="Search Bar" className="search"></textarea>
          <a href="">login</a>
          <a href="">signin</a>
        </nav>
      </div>
    </>
  );
}
export default Greet;


