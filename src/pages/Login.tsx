import { LoginForm } from '../components/Login/LoginForm';
import { LoginInfo } from '../components/Login/LoginInfo';

export function Login() {
    

    return (
        <div className="flex min-h-screen w-full bg-white">
            <LoginInfo/>
            <LoginForm/>
        </div>
    );
}