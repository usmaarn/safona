
export default function Politics() {
    return (
        <div className="">

            <h2 className="mb-2 text-xl capitalize text-sky-600 font-medium border-b">
                Politics
            </h2>

            <div className="grid grid-cols-1">
                {[1,2,3,4,5].map(el => (
                    <div className="py-3 border-b" key={el}>
                        <div className="flex flex-col items-start px-1">
                            <a href="#"
                               className="uppercase text-white px-2 py-0.5 text-xs bg-sky-700">Kasu</a>
                            <h5 className="text-slate-700 text-sm">
                                Nigeria Civil Defence Corps, NSCDC Deputy Commandant
                                Arraigned Over Alleged N27m Fraud
                            </h5>
                            <p className="text-xs mt-1 text-gray-600">23 mins ago</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
