import React from 'react';

function Create(){
    return(

        <div className='container pt-5 d-flex justify-content-center'>
            <form  className="needs-validation w-75 shadow mb-5 p-5 text-secondary  form-create" novalidate>
                <h5 className='mb-5 text-secondary'>please fill Task info</h5>
                <div className="form-group"> 
                    <label for="pwd">Task description:</label>
                    <input type="text" class="form-control"  placeholder="Task description"  required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <div className="form-group mt-5">
                    <label for="pwd">Create date:</label>   
                    <input type='time' class="form-control"  placeholder="Create date"  required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <div className="form-group mt-5">
                    <label for="pwd">Deadline:</label>
                    <input type="date" class="form-control"  placeholder="Deadline"  required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <div class="form-row mt-5">
                    <label for="color" className='pt-1'>Catagory info:</label>
                    <div class="col-sm-12 col-md-5">
                  
                    <input type="text" class="form-control"  placeholder="Enter color" />
                    </div>
                    <div class="col-sm-12 col-md-5">
                    <input type="text" class="form-control" placeholder="Enter Name" />
                    </div>
                </div>

                <div className="form-group mt-5">
                    <label for="pwd">Sub task:</label>
                    <input type="text" class="form-control"  placeholder="Sub task"  required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group  mt-5">
                    <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" required />End flag
                    </label>
                </div>
                
                <button type="submit" className="btn btn-warning text-white ml-3 pr-5 pl-5 mt-5 ">submit</button>
            </form>

        </div>

    );

}

export default Create;