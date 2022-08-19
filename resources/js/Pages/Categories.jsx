import LoadMore from '../Components/LoadMore';
import PageLayout from '@/Layouts/PageLayout';

export default function Categories({ cats }) {
    return (
        <PageLayout title="All Categories">

            <div className="grid sm:grid-cols-2 gap-10">
                {cats.map(cat => (
                    <h3 className="text-h3" key={cat.id}>
                        <a href={route('cat.show', cat.slug)}
                            className="p-10 rounded border bg-zinc-100 block">
                            {cat.name}
                        </a>
                    </h3>
                ))}
            </div>

            <LoadMore show={cats.length > 0} />

        </PageLayout>
    )
}