// Creating a post page
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { preview } from '../utils';
import { randomPrompt } from '../utils';
import { Forms, Loader } from '../components';


const Postulate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    img: '',
  });
  const [createImg, setCreateImg] = useState(false);
  const [load, setLoad] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleRandPrompt = () => {

  }

    return (
      <section className="max-1-7x1 mx-auto">
        <div>
          <h1 className="font-extrabold text-[#22238] text-[32px]">Create Room</h1>
          <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">Make visually breathtaking pictures generated by PixelWit</p>
        </div>

        <form className='mt-16 max-w-3x1' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <Forms
              labelName='Name'
              type='text'
              name='name'
              placeholder='John Smith'
              value={form.name}
              handleChange={handleChange}
            />
            <Forms
              labelName='Prompt'
              type='text'
              name='Prompt'
              placeholder='A steampunk city with airships'
              value={form.prompt}
              handleChange={handleChange}
              isRandPrompt
              handleRandPrompt={handleRandPrompt}
            />
          </div>
        </form>
      </section>
    )
  }
  

  export default Postulate