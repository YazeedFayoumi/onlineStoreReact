import './formStyle.css'
import React from 'react'
function Home(){
    return(
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group"/>
            <label for="validationCustom03">City</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
            
        <div className="form-group">
            <label for="validationCustomUsername">Search</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend">🔍</span>
              </div>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">remember me </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    
    )
}export default Home