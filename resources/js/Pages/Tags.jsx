import PageLayout from '@/Layouts/PageLayout';
import LoadMore from '../Components/LoadMore';

export default function Categories({ tags }) {
    return (
        <PageLayout>

            <div className="grid sm:grid-cols-2 gap-10">
                {tags.map(tag => (
                    <h3 className="text-h3 uppercase text-center" key={tag.id}>
                        <a href={route('tag.show', tag.slug)}
                            className="p-10 rounded border bg-zinc-100 block">
                            {tag.name}
                        </a>
                    </h3>
                ))}
            </div>

            <LoadMore show={tags.length > 0} />

        </PageLayout>
    )
}