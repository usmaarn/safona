import Avatar from "../Avatar";

export default function Slider() {
    return(
        <div className="grid grid-cols-6 gap-6">

            <div className="col-span-4 h-96 bg-black">
                <img className="w-full object-cover h-full opacity-50" src="" alt="cover"/>
                <div className="py-2">
                    <h3 className="font-medium text-lg border-b">
                        <a href="#">Abuja-Kaduna train: Kidnap victims’ families beg Reps for intervention</a>
                    </h3>
                    <p className="text-sm font-medium text-gray-500">22 hours ago</p>
                </div>
            </div>

            <div className="col-span-2 flex flex-col gap-2">
                {[1,2].map(el => (
                    <div className="rounded overflow-hidden" key={el}>
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
