import React from 'react';

const Header = () => {
    return (
       <div className='excel__header'>
           <input type="text" className="input" value="Новая таблица" />
               <div>
                   <div className="button" data-button="exit">
                       <span className="material-icons" data-button="exit">logout</span>
                   </div>
                   <div className="button" data-button="delete">
                       <span className="material-icons" data-button="delete">delete</span>
                   </div>
               </div>
       </div>
    );
};

export default Header;