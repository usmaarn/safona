

export const TagLink = ({ text, slug, className }) => (
    <a href={route('tag.show', slug)}
        className={'capitalize text-primary ' + className}>
        {text}
    </a>
)

export const CatLink = ({ text, slug, className }) => (
    <a href={route('cat.show', slug)}
        className={'capitalize text-primary ' + className}>
        {text}
    </a>
)


export const PostLink = ({ text, slug, className }) => (
    <h3 className={className}>
        <a href={route('post.show', slug)}>
            {text}
        </a>
    </h3>
)