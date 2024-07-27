'use client';

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useRegisterModal from '@/app/Hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input';

const RegisterModal = () => {

  const registerModal = useRegisterModal();
  const [isloading, setIsLoading] = useState(false);

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
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subTitle='Create an Account'/>
      <Input />
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
    />
  )
}

export default RegisterModal