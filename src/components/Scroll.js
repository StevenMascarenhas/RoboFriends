import React from 'react';
//props
//state
//children
const Scroll = (props) =>{
    // console.log(props);
    // return props.children

    return(

        <div style={{overflowY:'scroll',border:'5px solid black',height:'800px'}}>
         {props.children}
        </div>
    );
};

export default Scroll;