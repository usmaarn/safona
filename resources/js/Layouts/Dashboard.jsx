import Sidenav from "@/Components/Dashboard/Sidenav/Index";

export default function Index({ children }) {
    return (
        <div className="dashboard grid grid-cols-[250px_auto]">
            <Sidenav />
            <div className="">

                <nav className="h-20">

                </nav>

                <div className="p-20">
                    {children}
                </div>
            </div>
        </div>
    )
}
