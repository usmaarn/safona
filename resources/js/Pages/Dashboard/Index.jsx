import Dashboard from "@/Layouts/Dashboard"
import Editor from "../../Components/Editor"

export default function Index() {

    const handleChange = (data) => {
        console.log(data);
    }

    return (
        <Dashboard>
            <Editor onChange={handleChange} data='baba is here' />
        </Dashboard>
    )
}