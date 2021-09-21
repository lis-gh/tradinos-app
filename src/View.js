import React from 'react'; 

function View(){
    return(

        <div className='container table-responsive'>
            <table class="table mt-5 table-bordered">
    <thead>
      <tr>
        <th>Taskname</th>
        <th>Taskdate</th>
        <th>Sub task</th>
        <th>Catgory color</th>
        <th>Catgory name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Task1</td>
        <td>30/2/2021</td>
        <td>create a web application that enables the creation of a task</td>
        <td>green</td>
        <td>programming</td>
      </tr>
      
    </tbody>
  </table>
           
        </div>
    );
}

export default View;