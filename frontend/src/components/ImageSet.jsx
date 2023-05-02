import { AiOutlineClose, AiOutlineCamera } from 'react-icons/ai';
import { BiLandscape } from 'react-icons/bi';
import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createUpload } from '../features/upload/uploadSlice'


const ImageSet = () => {
    const [image, setImage] = useState(null)
    const [imageUp, setImageUp] = useState(null)
    const dispatch = useDispatch()

    const imageRef = useRef()
    console.log(image)

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImageUp(img)
            setImage({
                image: URL.createObjectURL(img),
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', imageUp);
        dispatch(createUpload(formData))
    }

    return (
        <div className='image-set'>
            <div className='image-setTop'>
                <div className='cover-img' onClick={() => imageRef.current.click()}>
                    <div className='cover'></div>
                    <AiOutlineCamera className='camera' />
                </div>
                {image &&
                    <div className="previewImage">
                        <AiOutlineClose className='close' onClick={() => setImage(null)} />
                        <img src={image.image} alt="file selected" />
                    </div>
                }
            </div>
            <div className='image-setBot'>
                <div className='option' onClick={() => imageRef.current.click()}>
                    <BiLandscape style={{ color: "var(--photo" }}
                    />
                    Change Photo
                </div>
                <div style={{ display: 'none' }}>
                    <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                </div>
            </div>
            <div className='image-submit'>
                <button onClick={handleSubmit} type="submit">Submit</button>
                <span>*submit before saving to change image</span>
            </div>
        </div>
    )
}
export default ImageSet