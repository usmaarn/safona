import { GrGoogle, GrTwitter } from 'react-icons/gr'
import Auth from "@/Layouts/Auth"
import Form, { Input, CheckBox, SubmitButton } from '@/Components/Form'
import { useForm } from '@inertiajs/inertia-react'

export default function Login() {

    const { data, setData, post, errors } = useForm({
        username: '',
        password: '',
        remember: false,
    })

    const handleChange = (e) => {
        e.target.type == 'checkbox'
            ? setData(e.target.name, !data[e.target.name])
            : setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('login'))
    }

    return (

        <Auth title="Login">

            <form onSubmit={submit} className="form">

                <Input label="Username or Email Address" name='username' value={data.username}
                    onChange={handleChange} error={errors.username} />

                <Input type='password' label="Password" onChange={handleChange}
                    value={data.password} name='password' error={errors.password} />

                <CheckBox label="Remember Me" name="remember" onChange={handleChange}
                    checked={data.remember} error={errors.remember} />

                <SubmitButton text="Sign In" />

                <div className="flex items-center gap-5 justify-end">
                    <a href={route('login')}>Forgot Password?</a>
                    <a href={route('register')}>Register</a>
                </div>

            </form>

            {/* <div className="social-login cols">
                <a href="#" className='text-red-500'>
                    <GrGoogle /> Sign In With Google
                </a>
                <a href="#" className='text-sky-500'>
                    <GrTwitter /> Sign In With Twitter
                </a>
            </div> */}

        </Auth>
    )
}
