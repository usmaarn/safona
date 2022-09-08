import axios from "axios";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Create from "@/components/category/Create";
import Update from "@/components/category/Update";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get(route("category.all"))
            .then((response) => setCategories(response.data))
            .catch((error) => console.warn(error.response));
    }, []);

    const addCategory = (cat) => setCategories((p) => [...p, cat]);

    const updateCategory = (cat) => {
        const cats = categories.filter((c) => c.id !== cat.id);
        setCategories([...cats, cat]);
    };

    const handleDelete = (id) => {
        const response = confirm("are you sure you want to delete category?");
        if (response) {
            axios
                .delete(route("category.delete", id))
                .then(() => setCategories((p) => p.filter((c) => c.id != id)))
                .catch((e) => console.log(e.response.data));
        }
    };

    return (
        <div className="">
            <Create onCreate={addCategory} />

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className="">
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.slug}</td>
                            <td>
                                <Update
                                    onUpdate={updateCategory}
                                    cat={category}
                                />
                                <button
                                    className=" text-red-500"
                                    onClick={() => handleDelete(category.id)}
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

let root = document.getElementById("admin.categories");

if (root) {
    root = createRoot(root);
    root.render(<Categories />);
}
