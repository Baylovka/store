import Form from 'next/form';
import Input from '../Input';
import Button from '../Button';

export default function Login() {
    return (
        <div className='auth__content'>
            <p className="auth__title">Enter your username and password to login.</p>
            <Form action="/login" className='auth__form'>
                <Input name='email' placeholder='almamun_uxui@outlook.com' />
                <Input name='password' placeholder='Password' isPassword={true} />
                <button className='auth__forgot-password' type='button'>Forgot Password?</button>
                <button className="button auth__button-submit" type="submit">Login</button>
            </Form>

            <div className='auth__other-text-container'>
                <p className='auth__other-text'>Or login with</p>
            </div>

            <div className='auth__other-method-container'>
                <Button iconId='google' className='auth__other-method-button'>Login with Google</Button>
                <Button iconId='facebook' className='auth__other-method-button'>Login with Facebook</Button>
            </div>
        </div>
    );
}