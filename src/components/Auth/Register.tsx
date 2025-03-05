import Form from 'next/form';
import Input from '../Input';
import Button from '../Button';

export default function Register() {
    return (
        <div className='auth__content'>
            <p className="auth__title">Enter your email and password to register.</p>
            <Form action="/login" className='auth__form'>
                <Input name='username' placeholder='Username' />
                <Input name='email' placeholder='Enter your email address' />
                <Input name='password' placeholder='Password' isPassword={true} />
                <Input name='confirm-password' placeholder='Confirm Password' isPassword={true} />
                <button className="button auth__button-submit" type="submit">Register</button>
            </Form>

            <div className='auth__other-text-container'>
                <p className='auth__other-text'>Or register with</p>
            </div>

            <div className='auth__other-method-container'>
                <Button iconId='google' className='auth__other-method-button'>Continue with Google</Button>
                <Button iconId='facebook' className='auth__other-method-button'>Continue with Facebook</Button>
            </div>
        </div>
    );
}