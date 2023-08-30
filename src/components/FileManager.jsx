import React from 'react'
import './FileManager.css'
import { addValue, selectPhoto } from '../features/photo/photoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function FileManager() {
  const photo = useSelector(selectPhoto);
  const dispatch = useDispatch();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const result = Array.from(event.target.files).map((el) => URL.createObjectURL(el))
      if (result.length !== 1) {
        result.map((el) => dispatch(addValue(el)));
        return
      }
      dispatch(addValue(...result));
    }
   }

  return (
    <div className='inputArea'>
      <form  className='loadForm'>
        <input onChange={onImageChange} type="file" multiple="multiple"/>
      </form>
      <div className='items'>
        {photo.map((el, index) => <img key={index} src={el} className='item'></img>)}
      </div>
    </div>
  )
}
