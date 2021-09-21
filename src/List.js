import React from 'react'; 
import useState from 'react-dom';
import { NavLink} from 'react-router-dom';

function List(){
    
const myArray=['task1','task2','task3'];

    return(

        <div className='container'>
            <table class="table table-bordered mt-5">
    <thead>
      <tr>
        <th>Taskname</th>
     
      </tr>
    </thead>
    <tbody>
  
                {myArray.map( e =>
                   
                    <tr>
     
                    <td>{ e } 
                    <button className='btn btn-warning float-right'>
                        <NavLink exact to="/viewtask" className="nav-item  " >view task</NavLink>
                    </button></td>
                  </tr>
                    )}
         
             </tbody>
  </table>
        </div>
    );
}

export default List;