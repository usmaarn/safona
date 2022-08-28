import Sidenav from "@/Components/Dashboard/Sidenav/Index";

export default function Index({ children, title }) {
    return (
        <div className="dashboard grid grid-cols-[250px_auto]">
            <div className="">
                <div className="sticky top-0">
                    <Sidenav />
                </div>
            </div>
            <div className="">

                <nav className="h-20 bg-white border-b">

                </nav>

                <div className="p-5">
                    <h1 className="text-h2 mb-5">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}
