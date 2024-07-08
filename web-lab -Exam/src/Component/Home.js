import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div className="container">
        <h1>User Management System </h1>
        <div className="row">
            <div className="col-xl-6">
            <div class="card">
               <div class="card-body">
                 <h5 class="card-title">Show Tv Details</h5>
                 <p class="card-text">Please click button to get Tv Details</p>
                 <Link to="/read" class="btn btn-primary">Show</Link>
                 </div>
            </div>
            </div>
            <div className="col-xl-6">
              <div class="card">
                 <div class="card-body">
                    <h5 class="card-title">Add Tv Details</h5>
                    <p class="card-text">Please Click here to Add Tv details</p>
                    <Link to="/create" class="btn btn-primary">Add</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
