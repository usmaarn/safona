import { useState } from "react";
import Modal from "@/components/Modal";
import { Input } from "@/components/Form";

export default function Create({ onCreate }) {
    const [error, setError] = useState();
    const [newCategory, setNewCategory] = useState();

    const updateNewCategory = (e) =>
        setNewCategory({ ...newCategory, [e.target.name]: e.target.value });

    const createCategory = (e) => {
        e.preventDefault();
        axios
            .post(route("category.store"), newCategory)
            .then((r) => {
                setNewCategory(null);
                onCreate(r.data.item);
            })
            .catch((e) => setError(e.response.data.message.split(".")[0]));
    };

    return (
        <div className="">
            <button
                className="btn mb-5"
                onClick={() => setNewCategory({ name: "", slug: "" })}
            >
                Add Category
            </button>

            <Modal
                title="New Category"
                open={newCategory}
                onClose={() => setNewCategory(null)}
            >
                <form onSubmit={createCategory} className="flex flex-col gap-3">
                    <p className="text-sm text-red-500 mb-5">{error}</p>
                    <Input
                        name="name"
                        value={newCategory?.name}
                        onChange={updateNewCategory}
                        label="Category Name"
                    />
                    <Input
                        name="slug"
                        value={newCategory?.slug}
                        onChange={updateNewCategory}
                        label="Category Slug"
                    />
                    <button className="btn">Create Category</button>
                </form>
            </Modal>
        </div>
    );
}
