import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserDataContext";


export const LoginFormComponent = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext)

    const onSubmitForm = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setUser(user)


                alert('User logged in, Welcome')

                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(error)
            });
    }

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <label>Email</label>
                <input type="text" id="email" placeholder="Example: mail@mail.com" {...register('email')} />

                <label>Password</label>
                <input type="password" id="password" placeholder="*******" {...register('password')} />

                <button type="submit" id="login">Login</button>
            </form>
        </div>
    )
}
