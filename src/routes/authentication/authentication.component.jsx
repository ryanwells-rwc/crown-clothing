import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication = () => {
    /*useEffect(()=> {
        async function getResult() {
            const response = await getRedirectResult(auth);
            if (response) {
                //console.log(response);
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }

        getResult();
    }, []);*/


    return (
        <div className="authentication-container">
            <SignInForm />
            {/*<button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>*/}
            <SignUpForm />
        </div>
    );
};

export default Authentication;