
export default function MoreNews() {
    return (
        <div className="mt-5">

            <h2 className="mb-2 text-xl uppercase text-sky-600 font-medium border-b">
                More News
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {[1,2,3,4,5].map(el => (
                    <div className="rounded overflow-hidden" key={el}>
                        <div className="h-auto h-24 md:h-48 bg-gray-300">
                            <img className="rounded w-full h-full object-cover" src="" alt="cover"/>
                        </div>
                        <div className="flex col-span-2 flex-col items-start py-1 gap-1">
                            <div className="uppercase bg-sky-700 text-xs text-white px-1 py-0.5">
                                Kasu
                            </div>
                            <h5 className="text-slate-700 text-sm md:text-[16px] border-b">
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
