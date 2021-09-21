import React from 'react'; 
import lamp from './assets/7.svg';
import stu1 from './assets/8.svg';
import stu2 from './assets/9.svg';
import work from './assets/3.svg';
import play from './assets/10.svg';
import main from './assets/6.svg';
import card1 from './assets/1.svg';
import card2 from './assets/4.svg';
import card3 from './assets/5.svg';



function Home(){
    return(
        <div>
          <div className='container hero pt-5 mt-5'>
            <h3 className='pb-3'>welcome to 
                <span className='hssss'>Hssss</span> 
                <img className='lamp' src={lamp}/>
            </h3>
            <p>Connect, Support, Collaborate Online Platform</p>
            <p>,connect you with best teacher</p>
            <div className='d-flex justify-content-center mt-5'>
                <div className="input-group search1">
                    <select className="form-control" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-warning text-white" type="button">Search</button>
                    </div>
                </div>
            </div>
          </div>
          <img src={main} className='main '  />
          <div className=' second  d-flex justify-content-center'>
            <img src={stu2} className='stu2' />
            <img src={stu1} className='stu1' />
            <div className='text-center work'>
                <p>How it works</p>
                <img src={work} className='img1' />
                <div className='row d-flex justify-content-center'>
                    <div className='play col-6 d-flex justify-content-center'>
                      <img src={play}  />
                    </div>
                </div>
            </div>

          </div> 
          <div className='container  pt-3 pb-4'>
            <div className="card-deck ">
                <div className="card text-center shadow ">
                    <img src={card2} className="card-img-top m-auto" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Tea</h5>
                    <p className="card-text"><small>This card has supporting text below as a natural lead-in to additional content.</small></p>
                    </div>
                </div>
                <div className="card text-center shadow">
                    <img src={card3} className="card-img-top m-auto" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Stu</h5>
                    <p className="card-text"><small>This card has supporting text below as a natural lead-in to additional content.</small></p>
                    </div>
                </div>
                <div className="card text-center shadow">
                    <img src={card1} className="card-img-top m-auto" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Live</h5>
                    <p className="card-text"><small>This card has supporting text below as a natural lead-in to additional content.</small></p>
                    </div>
                </div>
               
            </div>

          </div>      
        </div> 
    );

}

export default Home;