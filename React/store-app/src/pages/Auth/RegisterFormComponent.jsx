import {createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'react-hook-form'
import { auth } from "../../firebase/config";

export const RegisterFormComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data) => {

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error)
        // ..
      });


  }
  return (
    <div>
      <h2>Register Form</h2>
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <label>Email</label>
      <input type="text" id="email" placeholder="Email@mail.com" {...register('email')} />

      <label>Password</label>
      <input type="password" id="password" placeholder="Enter your password" {...register('password')} />

      <label>Confirm Password</label>
      <input type="password" id="confirmPassword" placeholder="Repeat your password" {...register('confirmPassword')} />

      <button type="submit">Send</button>

    </form>
  </div>
  )
}
