import { Head, Link, useForm } from '@inertiajs/inertia-react';
import {AiFillFacebook} from "react-icons/ai";
import Guest from "@/components/Layout";

export default function Login() {

    return (
        <Layout>
            <div className="mt-5">
                <Head title="Log in" />

                <div className="mx-auto w-[350px] flex flex-col gap-3">

                    <div className="flex flex-col gap-4 border p-10">
                        <Link href="/">
                            <h3 className="engagement text-center text-5xl">Safona Media</h3>
                        </Link>

                        <div className="flex flex-col gap-2">
                            <input type="text" className="text-xs border-gray-200 p-2 w-full"
                                   placeholder="Phone number, email or username" />
                            <input type="password" className="text-xs border-gray-200 p-2 w-full"
                                   placeholder="Password" />
                            <button className="mt-2 text-xs font-bold bg-blue-500 rounded p-2 text-white">
                                Log In
                            </button>
                        </div>

                        <div className="relative h-10">
                            <div className="absolute top-1/2 -translate-y-1/2 h-[0.5px] w-full bg-gray-200" />
                            <div className="w-10 h-10 absolute top-1/2 -translate-y-1/2
                        left-1/2 -translate-x-1/2 bg-white text-xs flex items-center
                        justify-center text-gray-400">OR</div>
                        </div>

                        <div className="flex items-center gap-1 justify-center text-sm font-bold text-blue-900">
                            <span className="text-xl"><AiFillFacebook /></span>
                            <span>Log in with Facebook</span>
                        </div>

                        <p className="text-xs text-center text-blue-900">
                            <Link href="/">forgot password?</Link>
                        </p>
                    </div>

                    <div className="p-10 border">
                        <p className="text-sm flex items-center justify-center gap-1 text-gray-600">
                            <span>Don't have account?</span>
                            <Link href="#"><span className="font-bold text-blue-600">Sign up</span></Link>
                        </p>
                    </div>

                </div>

            </div>
        </Layout>
    );
}
