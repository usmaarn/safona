import {GrGoogle, GrTwitter} from 'react-icons/gr'

export default function Login(){
    return(
        <div className="grid grid-cols-2 min-h-screen">

            <div className="col-span-1 bg-dark flex items-center justify-center p-10">
                <a href={route('register')} className="bg-light w-full text-center py-3 rounded-lg w-96 text-dark hover:opacity-80">
                    Sign In
                </a>
            </div>

            <div className="flex flex-col gap-10 items-center justify-center">
                <a href="#" className="text-h2 text-primary uppercase font-bold">
                    Safona Media
                </a>
                <img src="https://drive.google.com/file/d/1En5RInmGa3-mmFydx9HSIzc0iysFY8FB/view?usp=sharing" alt="" />
                <h3 className="text-h3 font-medium">Login</h3>

                <div className="flex flex-col gap-5">

                    <form className="pb-5 border-b">
                        <Input error label="Email Address" />
                        <Input label="Password" />
                        <label htmlFor="check" className="flex items-center gap-2 py-2">
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <button className="bg-dark w-full text-center py-3 rounded-lg text-white hover:opacity-80">
                            Sign In
                        </button>
                        <a href="#" className="float-right mt-2 text-primary hover:underline    ">forgot password?</a>
                    </form>

                    <div className="flex flex-col gap-3">
                        <a href="#" className='py-3 text-red-500 rounded-lg border flex items-center justify-center gap-3 text-zinc-600'>
                            <GrGoogle /> Sign In With Google
                        </a>
                        <a href="#" className='py-3 text-sky-500 rounded-lg border flex items-center justify-center gap-3 text-zinc-600'>
                            <GrTwitter /> Sign In With Twitter
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}


const Input = ({error, label}) => (
    <div className="text-zinc-600 mb-2">
        <input type="text" placeholder={label}
            className={`px-3 py-3 rounded-lg border border-zinc-300 ${error && 'border-red-500'}`} />
            {error && <p className='text-red-500 text-sm'>
                Invalid Username Entered
            </p>}
    </div>
)
