
export default function CampusGist() {
    return (
        <div className="mt-5">

            <h2 className="mb-2 text-xl capitalize text-sky-600 font-medium border-b">
                Campus Gist
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {[1,2,3,4,5].map(el => (
                    <div className="rounded overflow-hidden" key={el}>
                        <div className="h-auto h-28 bg-gray-300">
                            <img className="rounded w-full h-full object-cover" src="" alt="cover"/>
                        </div>
                        <div className="flex col-span-2 flex-col py-1">
                            <div className="uppercase text-xs text-sky-700">Kasu</div>
                            <h5 className="text-slate-700 text-sm border-b">
                                Update on Lil Tjay's health status revealed
                            </h5>
                            <p className="text-xs mt-1 text-gray-600">23 mins ago</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
