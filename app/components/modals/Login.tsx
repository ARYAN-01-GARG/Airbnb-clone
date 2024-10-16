import Modal from "./Modal"

const Login = () => {
  return (
    <Modal 
      disabled={false}
      isOpen={true}
      onClose={() => console.log('Close')}
      title='Login'
      actionLabel='Log in'
      onSubmit={()=> console.log('Submit')}
    />
  )
}

export default Login