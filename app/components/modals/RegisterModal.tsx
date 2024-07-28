'use client';

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useRegisterModal from '@/app/Hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input';
import Button from '../Button';
import { FaLinkedin } from 'react-icons/fa6';

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
    </div>
  )

  const footer = (
    <div className='flex flex-col my-4'>
      <div>
        <Button label={"Continue with Google"} onClick={() => {}} outline icon={FcGoogle}/>
        <Button label={"Continue with Google"} onClick={() => {}} outline icon={FaGithub}/>
        <Button label={"Continue with Linkedin"} onClick={() => {}} outline icon={FaLinkedin}/>
        <Button label={"Continue with Facebook"} onClick={() => {}} outline icon={FaFacebook}/>
      </div>
      <div className='text-sm font-semibold text-center my-3 text-neutral-800 hover:underline'>
        Already have an account?
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
      footer={footer}
    />
  )
}

export default RegisterModal