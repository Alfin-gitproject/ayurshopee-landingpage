export default function Preloader() {
    return (
        <div className="loader-wrap">
            <div className="loader-container">
                <div 
                    className="spinner-border" 
                    style={{ color: '#1a6d31' }} 
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}