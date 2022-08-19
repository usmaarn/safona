import { GrGoogle, GrTwitter } from 'react-icons/gr'
import { Input } from '@/Components/Form'
import Auth from '@/Layouts/Auth'
import { CheckBox, SubmitButton } from '@/Components/Form'
import { useForm } from '@inertiajs/inertia-react'


export default function Register() {

    const { data, setData, errors, post } = useForm({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
        newsletter: false,
    });

    const handleChange = (e) => {
        e.target.type == 'checkbox'
            ? setData(e.target.name, !data[e.target.name])
            : setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('register'))
        console.log(errors)
    }

    return (
        <Auth title="Register">

            <form onSubmit={submit} className="auth-form">

                <div className="input-groups">
                    <Input label="First Name" error={errors.firstname} onChange={handleChange}
                        name="firstname" value={data.firstname} />

                    <Input label="Last Name" onChange={handleChange} error={errors.lastname}
                        name="lastname" value={data.lastname} />

                    <Input label="Username" onChange={handleChange} error={errors.username}
                        name="username" value={data.username} />

                    <Input label="Email Address" onChange={handleChange} error={errors.email}
                        name="email" value={data.email} type="email" />

                    <Input type="password" label="Password" onChange={handleChange}
                        name="password" value={data.password} error={errors.password} />

                    <Input type="password" label="Confirm Password" onChange={handleChange}
                        name="password_confirmation" value={data.password_confirmation}
                        error={errors.password} />
                </div>

                <CheckBox name="newsletter" onChange={handleChange} checked={data.newsletter}
                    label="Sign up for the Reuters Daily Briefing newsletter to get all the news you need to start your day." />
                <CheckBox name="terms" onChange={handleChange} checked={data.terms} error={errors.terms}
                    label="I agree to the Terms & Conditions and Privacy Statement." />
                <SubmitButton text="Register" />

                <div className="pages-links">
                    <a href={route('login')}>Sign In</a>
                </div>

            </form>

            <div className="social-login cols">
                <a href="#" className='text-red-500'>
                    <GrGoogle /> Sign In With Google
                </a>
                <a href="#" className='text-sky-500'>
                    <GrTwitter /> Sign In With Twitter
                </a>

            </div>

        </Auth>
    )
}
