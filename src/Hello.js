import React, { Component } from 'react';
import './Hello.css';

const Hello= (props) => {//hello component ,//props parameter given by the attribute and value of the index .js Hello component.greeting relates to the functions props
    //     render()
    //     { 
    //         //jsx
     return (
            <div className="f1 tc">      
            
                <h1>hello world</h1> 
                <p>
                    {props.greeting}
                    </p>
            </div>
           
            );//for an expression
    //     }
 }


//or 
// class Hello extends Component{//hello component
//     render()
//     { 
//         //jsx
//         return (
//         <div className="f1 tc">      
        
//             <h1>hello world</h1> 
//             <p>
//                 {this.props.greeting} welcome to React</p>
//         </div>
       
//         );//for an expression
//     }
// }

export default Hello;//export file name components