import React from 'react'

export default function Create() {
  return (
    <>
    <div className="container mt-3 mb-3">

<form className='myform p-3 '>
    <h2 className='text-center'>Add TV Detail</h2>
    <div class="mb-3">
      <label for="Tv Id" class="form-label">Tv Id</label>
      <input type="text" class="form-control" id="Tv id" />
      
    </div>
    <div class="mb-3">
      <label for="Model Name" class="form-label">Model Name</label>
      <input type="text" class="form-control" id="Model Name"/>
    </div>
    <div class="mb-3">
      <label for="Brand" class="form-label">Brand</label>
      <input type="text" class="form-control" id="Brand"/>
    </div>
    <div class="mb-3">
      <label for="Price" class="form-label">Price</label>
      <input type="text" class="form-control" id="price"/>
    </div>
    <div class="mb-3">
      <label for="Size" class="form-label">Size</label>
      <input type="text" class="form-control" id="size"/>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>


     </>
  )
}
