import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAddMoviesMutation } from '../../services/BookmyshowApi';
function AddMovie() {
    var[AddMovieFn]=useAddMoviesMutation();
    var navigate=useNavigate();
  return (
    <div>
        <Formik  initialValues={{
                movieImage:String,
                movieTitle:String,
                price:String,
                movieDuration:String,
                movieType:Array,
                movieCensor:String,
                releaseDate:String,
                language:Array,
                aboutUs:String,
                movieFormats:Array
           }}
           onSubmit={(values)=>{
            AddMovieFn(values)
            navigate('/allmovie/')
            console.log(values)
           }}
           >
            <Form>
                <div class="form-floating mb-3 p-2 m-2">
                    <Field type="text" name="movieImage" class='form-control'></Field>
                    <label for="movieImage">MovieImage</label>
                </div>
                <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieTitle" class="form-control" id="movieTitle" placeholder="name@example.com"></Field>
                <label for="movieTitle">MovieTitle</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="price" class="form-control" id="price" placeholder="name@example.com"></Field>
                <label for="price">Price</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieDuration" class="form-control" id="movieDuration" placeholder="name@example.com"></Field>
                <label for="movieDuration">MovieDuration</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieType" class="form-control" id="movieType" placeholder="name@example.com"></Field>
                <label for="movieType">MovieType</label>
              </div>
              {/* <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieCensor" class="form-control" id="movieCensor" placeholder="name@example.com"></Field>
                <label for="movieCensor">MovieCensor</label>
              </div> */}
              <div class='form-group mb-3 p-2 m-2'>
                <h6>Select Movie Censor</h6>
                <label>
                  <Field name="movieCensor" type='radio' value='U/A' className='form-check-input'></Field>
                  {" "}
                  U/A
                </label>
                <label>
                  <Field name="movieCensor" type='radio' value='A' className='form-check-input'></Field>
                  {" "}
                  A
                </label>
                <label>
                  <Field name="movieCensor" type='radio' value='U' className='form-check-input'></Field>
                  {" "}
                  U
                </label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="releaseDate" class="form-control" id="releaseDate" placeholder="name@example.com"></Field>
                <label for="releaseDate">ReleaseDate</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="language"  class="form-control" id="language" placeholder="name@example.com"></Field>
                <label for="language">Language</label>
              </div>
              <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="aboutUs" class="form-control" id="aboutUs" placeholder="name@example.com"></Field>
                <label for="aboutUs">aboutUs</label>
              </div>
              {/* <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="movieFormats" class="form-control" id="movieFormats" placeholder="name@example.com"></Field>
                <label for="movieFormats">MovieFormats</label>
              </div> */}
              <div class='form-group mb-3 p-2 m-2'>
                <h6>Select Movie Formats</h6>
                <label>
                  <Field name="movieFormats" type='checkbox' value='2D' className='form-check-input'></Field>
                  {" "}
                  2D
                </label>
                <label>
                  <Field name="movieFormats" type='checkbox' value='3D' className='form-check-input'></Field>
                  {" "}
                  3D
                </label>
                <label>
                  <Field name="movieFormats" type='checkbox' value='4DX' className='form-check-input'></Field>
                  {" "}
                  4DX
                </label>
                <label>
                  <Field name="movieFormats" type='checkbox' value='IMAX' className='form-check-input'></Field>
                  {" "}
                  IMAX
                </label>
                <label>
                  <Field name="movieFormats" type='checkbox' value='Dolby Atmos' className='form-check-input'></Field>
                  {" "}
                  Dolby Atmos
                </label>
              </div>
              <button type='submit' class="btn btn-outline-primary">ADD Movie</button>
            </Form>
        </Formik>
    </div>
  )};
export default AddMovie;
