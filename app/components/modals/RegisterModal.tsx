'use client';

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useRegisterModal from '@/app/Hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Button from '../Button';
import toast from 'react-hot-toast';
import { SiFacebook } from 'react-icons/si';

const RegisterModal = () => {

  const registerModal = useRegisterModal();
  const [isloading, setIsLoading] = useState(false);
  const [isError , setIsError] = useState(false);

  const { register , handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues:{
      name :'',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
    .then((res) => {
      registerModal.onClose();
      console.log(res);
    })
    .catch((err) => {
      if(!isError){
        toast.error('Something went wrong')
        setIsError(value => !value);
        setTimeout(() => {
          setIsError(value => !value);
        }, 2000);
      }
      
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subTitle='Create an Account'/>
      <Input 
        id='name'
        label='Name'
        disabled={isloading}
        register={register}
        errors={errors}
        require
      />
      <Input 
        id='email'
        type='email'
        label='Email'
        disabled={isloading}
        register={register}
        errors={errors}
        require
      />
      <Input 
        id='password'
        type='password'
        label='Password'
        disabled={isloading}
        register={register}
        errors={errors}
        require
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button 
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => console.log('Google')}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => console.log('Github')}
      />
      <div className='mt-4 text-neutral-700 text-center font-light'>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <div>
            Already have an account?
          </div>
          <div onClick={registerModal.onClose} className='hover:underline text-neutral-950 cursor-pointer'>
            Log In
          </div>
        </div>
      </div>
    </div>
  )


  return (
    <Modal 
      disabled={isloading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      title='Register'
      actionLabel='Continue'
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal