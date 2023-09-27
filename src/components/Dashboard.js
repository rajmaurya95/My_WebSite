import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import {AiFillFileExcel,AiFillFileAdd, AiFillFileExclamation, AiFillFileMarkdown, AiFillFilePdf  } from "react-icons/ai"
import {HiOutlineViewGrid, HiOutlineViewGridAdd } from "react-icons/hi"
import DateSelector from './DateSelector';
import PaginatedTable from './PaginatedTable';
import {GoPerson} from 'react-icons/go';
import {BiGitBranch, BiSitemap, BiBulb, BiChevronRight} from 'react-icons/bi';

function Dashboard(props) {
    return (
        <>
            
 <div className=' container-fluid    '>
 <div className='  row   '>


        <div className="col-md-2 mx-1  sidebar " style={{width: "max-auto", height:"100vh" ,"margin-left" :"-12px"}}>
                <h3 to="#" className="d-flex align-items-center pb-3 mb-3 link-light hover text-white border-bottom">
                <span className="fs-5 fw-semibold">My_WebSite </span>
                </h3>
                <ul className="list-unstyled ps-0">
                <li className=" ">
                <HiOutlineViewGrid className="icons m-1 text-white " /> 
                    <button className="btn  align-items-center rounded collapsed text-white " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    Masters 
                    </button>
                    <div className="collapse show text-white" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled text-white fw-normal pb-1 small">
                        <li><Link to="#" className="link-light hover rounded"> <HiOutlineViewGridAdd className="icons mt-1 m-1" /> Add Master</Link></li>
                        <li><Link to="#" className="link-light hover rounded"> <BiSitemap className="icons mt-1 m-1" /> Org. Master</Link></li>
                        <li><Link to="#" className="link-light hover rounded"><GoPerson className="icons mt-1 m-1 " /> Emp. Master </Link></li>
                        <li><Link to="#" className="link-light hover rounded"> <BiGitBranch className="icons    mt-1 m-1" />Branch Master</Link></li>
                        <li><Link to="#" className="link-light hover rounded"> <BiBulb className="icons mt-1 m-1" />Product Master</Link></li>
                    </ul>
                    </div>
                </li>
                <li className="mb-1">
                <HiOutlineViewGrid className="icons m-1" /> 
                    <button className=" text-white btn  align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
                    Departments 
                    </button>
                    <div className="collapse" id="dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled text-white fw-normal pb-1 small">
                        <li><Link to="#" className="link-light hover rounded">Overview</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Weekly</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Monthly</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Annually</Link></li>
                    </ul>
                    </div>
                </li>
                <li className="mb-1">
                <HiOutlineViewGrid className="icons m-1" /> 
                    <button className="btn  align-items-center text-white rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
                    Products 
                    </button>
                    <div className="collapse" id="orders-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><Link to="#" className="link-light hover rounded">New</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Processed</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Shipped</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Returned</Link></li>
                    </ul>
                    </div>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                <GoPerson className="icons m-1" /> 
                    <button className="btn  align-items-center text-white rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
                    Accounts 
                    </button>
                    <div className="collapse" id="account-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><Link to="#" className="link-light hover rounded">New...</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Profile</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Settings</Link></li>
                        <li><Link to="#" className="link-light hover rounded">Sign out</Link></li>
                    </ul>
                    </div>
                </li>
                </ul>
        </div>

        <div className=' col-md-2 col-sm-12  col-12 mt-2'>
            <div className='    '>
                
            <div className='  icon-control  '>
               
                <Link to="#"><AiFillFileExcel className='icon '/></Link>
                
                <Link to="#"><AiFillFileExclamation className='icon' /> </Link>
                <Link to="#"> <AiFillFileMarkdown className='icon' />    </Link>
                <Link to="#"> <AiFillFilePdf className='icon' />    </Link>
                </div>
                
                
               <div className=' p-2  ' > 
                <form className="d-flex">
                <button className="btn p-1  btn-outline-success " type="submit">Search</button>
                <input className=" isearch  me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                </div>
            
            <div className='table-control  '>
                <PaginatedTable />
            </div>
            </div>
            </div>
<div className='col-md-8 col-12  col-sm-12 row  '>
                <div className='col-md-6 offset-md-3 tm' ><h1 className=' text-center  mt-4   tender' > <b>TENDER MASTER </b></h1>
                </div>
            <div className=' row tdd mx-2 '>
                    <div className=" col-6 col-md-3 FSearch  mt-1">
                    <label className="" htmlFor="">Organizations Name</label>
                <div className=''>
                        <select className="form-select FSearch" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1"> Organization One</option>
                            <option value="2">Organization Two</option>
                            <option value="3">Organization Three</option>
                        </select>
            </div>
                    </div>
                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Controlling Office</label>
                <div className=''>
                        <select className="form-select FSearch" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">Dehli</option>
                            <option value="2">Noida</option>
                            <option value="3">Pune</option>
                        </select>
            </div>
                    </div>
                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Approx Value</label>
                    <input type="text" className="form-control" placeholder='value...'  id="basic-url"  aria-describedby="basic-addon3"  />

                    </div>
                    <div className="  col-6 col-md-3 FSearch mt-1">

                    <label className="" htmlFor="">Product</label>
                    <input type="text" className="form-control" placeholder='value...'  id="basic-url" aria-describedby="basic-addon3" />

                    </div>
                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Tender Start Date</label>
                    <DateSelector />
                    </div>

                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Branch</label>
                <div className=''>
                        <select className="form-select FSearch" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
            </div>
                    </div>
                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Sales Representations</label>
                <div className=''>
                        <select className="form-select FSearch" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
            </div>
                    </div>
                <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Tender Start Date</label>
                    <DateSelector />
                    </div>

                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Load Time</label>
                    <input type="text" className="form-control" placeholder='value...'  id="basic-url" aria-describedby="basic-addon3" />

                    </div>

                
            
                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Date of Preparation </label>
                    <DateSelector />
                    </div>
                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Date of Dispatch </label>
                    <DateSelector />
                    </div>
                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Meeting Date </label>
                    <DateSelector />
                    </div>
                    <div className="  col-6 col-md-3 FSearch mt-1">
                    <label className="" htmlFor="">Financial Bid opening Date: </label>
                    <DateSelector />
                    </div>



            <div className="  col-12 col-md-3 FSearch mt-1">
                    <label className="" htmlFor=""> Preparation Bid Meeting Remarks </label>
                    <textarea id="comments" name="userComments" rows="2" cols="22">
                    Remarks...
               </textarea>
            </div>
            <div className="  col-12 col-md-3 FSearch mt-1">
                    <label className="" htmlFor=""> Financial Bid Meeting Remark </label>
                    <textarea id="comments" name="userComments" rows="2" cols="22">
                    Remarks...
                </textarea>
                 </div>
            <div className="  col-12 col-md-3  mt-1 d-flex ">
            <div className=" button-control ">
                    <button className="btn btn-primary m-2 " > Save </button>
                    <button id="" className='btn btn-warning m-2' >Edit
                </button>
                 </div>
                 </div>
            </div>
            </div>
</div>
</div>
        </>
    );
}

export default Dashboard;