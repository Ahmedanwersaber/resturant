import React from 'react'
import explore from'../../assets/images/explore.png';
import './Explore.css';
const Explore = () => {
  return (
    <div className='explore'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <h2>We make everything by hand with the best possible ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                 finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away,                
                behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul>
                    <li><i class="fa-solid fa-check" ></i>  Etiam sed dolor ac diam volutpat.</li>
                    <li><i class="fa-solid fa-check" ></i>  Erat volutpat aliquet imperdiet.</li>
                    <li><i class="fa-solid fa-check" ></i>  purus a odio finibus bibendum.</li>
                </ul>
                <button><a>Learn More</a></button>
            </div>
            <div className='col-md-6'>
            <img src={explore} title='explore-img' />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Explore;
