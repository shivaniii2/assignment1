import React, { useState } from 'react';
import { TopBar } from './TopBar';
import addImg from '../assets/addResource.png';
import { useDispatch } from 'react-redux';
import { appendResource } from '../utils/resourceSlice';
import { useNavigate } from 'react-router-dom';

export const AddResource = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    title: '',
    icon_url: '',
    link: '',
    description: '',
    category: '',
    tag: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formData.title) {
      errors.title = 'Title is required';
    }
    if (!formData.icon_url) {
      errors.icon_url = 'Icon URL is required';
    } else if (!/^https?:\/\/.*/i.test(formData.icon_url)) {
      errors.icon_url = 'Icon URL must be a valid URL';
    }
    if (!formData.link) {
      errors.link = 'Link is required';
    } else if (!/^https?:\/\/.*/i.test(formData.link)) {
      errors.link = 'Link must be a valid URL';
    }
    if (!formData.description) {
      errors.description = 'Description is required';
    }
    if (!formData.category) {
      errors.category = 'Category is required';
    }
    if (!formData.tag) {
      errors.tag = 'Tag is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      dispatch(appendResource(formData));
      navigate('/')
      
    }
  };

  return (
    <div>
      <TopBar />
      <div className='flex justify-between'>
        <div className='mx-auto my-0 mt-[2%] w-[20%]'>
          <span className='text-3xl h-[70px] absolute' style={{ fontFamily: 'Rubik, sans-serif' }}>Item Details</span>
          <div>
            <div className='relative top-12 right-10 mt-3' style={{ fontFamily: "'HK Grotesk', sans-serif" }}>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className='text-xs text-gray-500' htmlFor="title">ITEM TITLE</label>
                  <div>
                    <input
                      className='border border-gray-300 w-[100%] px-1   text-xs py-2'
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                    {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
                  </div>
                </div>

                <div className='mt-4'>
                  <label className='text-xs text-gray-500' htmlFor="link">LINK</label>
                  <div>
                    <input
                      className='border border-gray-300 w-[100%] px-1  text-xs py-2'
                      type="text"
                      name="link"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    />
                    {errors.link && <p className="text-red-500 text-xs">{errors.link}</p>}
                  </div>
                </div>

                <div className='mt-4'>
                  <label className='text-xs text-gray-500' htmlFor="icon_url">ICON URL</label>
                  <div>
                    <input
                      className='border border-gray-300 w-[100%] px-1   text-xs py-2'
                      type="text"
                      name="icon_url"
                      value={formData.icon_url}
                      onChange={(e) => setFormData({ ...formData, icon_url: e.target.value })}
                    />
                    {errors.icon_url && <p className="text-red-500 text-xs">{errors.icon_url}</p>}
                  </div>
                </div>

                <div className='mt-4'>
                  <label className='text-xs text-gray-500' htmlFor="tag">TAG NAME</label>
                  <div>
                    <input
                      className='border border-gray-300 w-[100%] px-1   text-xs py-2'
                      type="text"
                      name="tag"
                      value={formData.tag}
                      onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    />
                    {errors.tag && <p className="text-red-500 text-xs">{errors.tag}</p>}
                  </div>
                </div>

                <div className='mt-4'>
                  <label className='text-xs text-gray-500' htmlFor="category">CATEGORY</label>
                  <div>
                    <input
                      className='border border-gray-300 w-[100%] px-1  text-xs py-2' 
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    />
                    {errors.category && <p className="text-red-500 text-xs">{errors.category}</p>}
                  </div>
                </div>

                <div className='mt-4'>
                  <label className='text-xs text-gray-500' htmlFor="description">DESCRIPTION</label>
                  <div>
                    <input
                      className='border border-gray-300 w-[100%] px-1  text-xs py-2'
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                    {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                  </div>
                </div>

                <div className='mt-7 flex justify-center items-center'>
                  <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded text-sm' >CREATE</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='h-[700px] w-[600px]'>
          <img className='max-h-full w-[100%]' src={addImg} alt="Add" />
        </div>
      </div>
    </div>
  );
};
