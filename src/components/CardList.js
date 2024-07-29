import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // loops for the cardList component to fetch the array and map it to the id to the user->user
    //key is to used indicate the character incase the the card gets deleted 
//    if(true){
//     throw new  Error('nooooo')
//    }
   
    const cardComponent = robots.map((user, i) => {
    return (
    <Card  
    key={i} 
    id={robots[i].id} 
    name={robots[i].name} 
    email={robots[i].email} />
    );
})

return (
    <div >

        {cardComponent}
    </div>

);
}

export default CardList;