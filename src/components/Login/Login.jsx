import { Button } from "@material-tailwind/react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from "../../firebase/firebase.init";
const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    console.log(auth);
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log("error", error.message);
            });
        console.log("google sign in is coming");
    };
    return (
        <div>
            <Button onClick={handleGoogleSignIn} variant="filled" className="btn">Google Login</Button>
        </div>
    );
};

export default Login;