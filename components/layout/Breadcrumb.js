import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

            <section className="page-title p_relative centred">
                <div className="bg-layer" style={{ backgroundColor: '#0a2200' }}></div>
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
                    <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                    <div className="pattern-4 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="content-box py-4">
                        <h1>{breadcrumbTitle}</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>


        </>
    )
}
