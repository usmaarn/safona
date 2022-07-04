import Avatar from "../Avatar";

export default function Slider() {
    return(
        <div className="md:grid md:grid-cols-6 gap-6">

            <div className="md:col-span-4">
                <div className="h-64 md:h-96 bg-black">
                    <img className="w-full object-cover h-full opacity-50" src="" alt="cover"/>
                </div>
                <div className="py-2">
                    <h3 className="font-medium text-lg border-b">
                        <a href="#">Abuja-Kaduna train: Kidnap victims’ families beg Reps for intervention</a>
                    </h3>
                    <p className="text-sm font-medium text-gray-500">22 hours ago</p>
                </div>
            </div>

            <div className="md:col-span-2 flex md:flex-col gap-2 mt-3 md:mt-0">
                {[1,2].map(el => (
                    <div className="rounded overflow-hidden flex-grow" key={el}>
                        <div className="w-full bg-gray-300" >
                            <img className="w-full h-40 h-full object-cover" src="" alt="cover"/>
                        </div>
                        <div className="flex flex-col p-1">
                          <h5 className="text-sm text-slate-700 border-b">
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
