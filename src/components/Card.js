import React from 'react';

//function
// called distructly
//const Card =({name,email,id})=>
const Card = (props) =>{
   // another way to pass the paramenters 
   //const{name,email,id}=props;
    return (
     //${}-placeholder to pass the value
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
export default Card;