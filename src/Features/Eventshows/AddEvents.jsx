import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useAddEventsMutation } from '../../services/EventsApi'
import { useNavigate } from 'react-router-dom';

function AddEvents() {
    var [EventsFn]=useAddEventsMutation();
    var navigate=useNavigate();
  return (
    <div>
      <Formik initialValues={{
                category:String,
                title:String,
                image:String,
                price:String,
                location:String,
                venue:String,
                language:String,
                description:String,
                eventdate:String
           }}
           onSubmit={(values)=>{
            EventsFn(values)
            navigate('/')
            console.log(values)
           }}>
        <Form>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="category" class='form-control'></Field>
                    <label for="movieImage">Category</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="title" class='form-control'></Field>
                    <label for="movieImage">Title</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="image" class='form-control'></Field>
                    <label for="EventImage">Image</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="price" class='form-control'></Field>
                    <label for="movieImage">Price</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="location" class='form-control'></Field>
                    <label for="movieImage">Location</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="venue" class='form-control'></Field>
                    <label for="movieImage">Venue</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="language" class='form-control'></Field>
                    <label for="movieImage">Language</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="description" class='form-control'></Field>
                    <label for="movieImage">Description</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
                <Field type="text" name="eventdate" class='form-control'></Field>
                    <label for="movieImage">Eventdate & time</label>
            </div>
            <button type='submit' class="btn btn-outline-primary">ADD Movie</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddEvents;