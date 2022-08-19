

export default function Auth({ children, title }) {
    return (
        <div className="auth-page">
            <div className="wrapper">
                <a href="/" className="site-logo">
                    Safona Media
                </a>

                <div className="main">
                    <h3 className="page-title">{title}</h3>
                    
                    {children}
                </div>
            </div>
        </div>
    )
}
