import {AiOutlineTags} from "react-icons/ai";

export default function Trending(){
    return (
        <div className="">

            <h2 className="mb-2 text-xl capitalize text-sky-600 font-medium">
               Trending
            </h2>

            <div className="grid grid-cols-2 gap-5">
                {[1,2,3,4].map(el => (
                    <div className="rounded overflow-hidden" key={el}>
                        <div className="h-56 w-full bg-gray-300">
                            <img className="rounded w-full h-full object-cover" src="" alt="cover"/>
                        </div>
                        <div className="flex flex-col p-1">
                            <h5 className="text-slate-700 border-b">
                                Update on Lil Tjay's health status revealed
                            </h5>
                            <p className="text-xs text-gray-600">23 mins ago</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
}
