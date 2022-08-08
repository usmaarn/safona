
const links = ['politics', 'sports', 'news', 'world', 'business', 'health'];
const links2 = ['sports', 'news', 'education', 'security', 'entertainment'];

export default function MenuSection(){
    return(
        <div className="menu">
            <div className="menu-section">
                <ul className="">
                    <li className="heading">heading</li>
                    {links.map(link=> (
                        <li key={link}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="menu-section">
                <ul className="">
                    <li className="heading">heading</li>
                    {links2.map(link=> (
                        <li key={link}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="menu-section">
                <ul className="">
                    <li className="heading">heading</li>
                    {links.map(link=> (
                        <li key={link}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="menu-section">
                <ul className="">
                    <li className="heading">heading</li>
                    {links2.map(link=> (
                        <li key={link}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
