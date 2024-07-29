import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
return(
   <div className='pa2'>
  <input 
  className='pa3 ba b--green bg-lightest-blue'
    type='search'
     placeholder='search robots'
     //on change call this function searchChange
     //search change function which is a prop triggers the event in app.js communicate the search input to the robots list
     onChange={searchChange}
     />

   </div>
  
);

}

export default SearchBox;