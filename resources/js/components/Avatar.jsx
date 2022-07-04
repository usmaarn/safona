export default function Avatar(){
    return(
        <div className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="/images/avatar.jpg"
                         alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate dark:text-white">
                        Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        20 mins ago
                    </p>
                </div>
            </div>
        </div>
)
}
