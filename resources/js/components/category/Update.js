import { useState } from "react";
import Modal from "@/components/Modal";
import { Input } from "@/components/Form";

export default function Update({ cat, onUpdate }) {
    const [error, setError] = useState();
    const [category, setCategory] = useState(cat ?? null);
    const [open, setOpen] = useState(false);

    const handleChange = (e) =>
        setCategory({ ...category, [e.target.name]: e.target.value });

    const createCategory = (e) => {
        e.preventDefault();
        axios
            .put(route("category.update", category.id), category)
            .then((r) => {
                setOpen(false);
                onUpdate(r.data.item);
            })
            .catch((e) => setError(e.response.data.message.split(".")[0]));
    };

    if (!category) return null;

    return (
        <div className="">
            <button onClick={() => setOpen(true)} className="text-blue-500">
                edit
            </button>
            <Modal
                title="New Category"
                open={open}
                onClose={() => setOpen(false)}
            >
                <form onSubmit={createCategory} className="flex flex-col gap-3">
                    <p className="text-sm text-red-500 mb-5">{error}</p>
                    <Input
                        name="name"
                        value={category.name}
                        onChange={handleChange}
                        label="Category Name"
                    />
                    <Input
                        name="slug"
                        value={category.slug}
                        onChange={handleChange}
                        label="Category Slug"
                    />
                    <button className="btn">Update Category</button>
                </form>
            </Modal>
        </div>
    );
}
