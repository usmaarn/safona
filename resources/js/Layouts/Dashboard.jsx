import Sidenav from "@/Components/Dashboard/Sidenav/Index";

export default function Index({ children, title }) {
    return (
        <div className="dashboard grid grid-cols-[250px_auto]">
            <Sidenav />
            <div className="">

                <nav className="h-20 bg-white border-b">

                </nav>

                <div className="p-5">
                    <h1 className="text-h2">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}
