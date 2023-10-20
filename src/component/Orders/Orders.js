import React from 'react'
import data from '../../data';
import './order.css';

const Orders = () => {
    const dataitem=data.map((item)=>{
        return(
         <div className='col-md-4'>
           <div className='box'>           
             <img src={item.img} />
              <h5>{item.title}</h5> 
              <span>{item.time}</span> 
              <h6>{item.price}</h6> 
            </div>
            <button><a href='#'>order Now</a></button>
           </div>
        )
    })
  return (
    <div className='orders'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-lg-12'>
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br/>leo. 
                        Mauris feugiat erat tellus. Far far away, behind the word mountains,
                         far from the countries Vokalia and<br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                  <div className='row'>
                  {dataitem}
                  
                </div>
            </div>
        </div>
    </div>
    
    
    
    
  )
}

export default Orders
