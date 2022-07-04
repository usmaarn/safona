
export default function TopVideos() {
    return(
        <div className="bg-black/90 px-3 py-10 md:px-10 my-10">

            <div className="max-w-[940px] mx-auto">

                <h2 className="mb-2 text-xl text-sky-600 font-medium border-b border-gray-500 uppercase">
                    Top Videos
                </h2>

                <div className="flex flex-col md:grid grid-cols-3 gap-5">

                    <div className="col-span-2">
                        <div className="h-52 md:h-96 bg-gray-300">
                            <img src="" alt="cover"/>
                        </div>
                        <div className="">
                            <h1 className="text-gray-300 text-sm md:text-lg border-b border-gray-500">
                                Police Broke Into My House Through Ceiling,
                                Arrested My Husband, Woman Narrates Her Experience
                            </h1>
                            <p className="text-gray-400">2 days ago</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                        {[1,2].map(el => (
                            <div className="" key={el}>
                                <div className="h-24 md:h-40 bg-gray-300">
                                    <img src="" alt="cover"/>
                                </div>
                                <div className="">
                                    <h1 className="text-gray-300 text-xs md:text-sm border-b border-gray-500">
                                        Police Broke Into My House Through Ceiling,
                                    </h1>
                                    <p className="text-gray-400 text-xs">2 days ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                    {[1,2,3,4].map(el => (
                        <div className="" key={el}>
                            <div className="h-24 md:h-40 bg-gray-300">
                                <img src="" alt="cover"/>
                            </div>
                            <div className="">
                                <h1 className="text-gray-300 text-xs md:text-sm border-b border-gray-500">
                                    Police Broke Into My House Through Ceiling,
                                </h1>
                                <p className="text-gray-400 text-xs">2 days ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
