import './sidebar.css';
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-link">
                <a href="#" >
                    Home
                </a>
            </div>
            <div className="sidebar-link">
                <a href="#" >
                    Services
                </a>
            </div>
            <div className="sidebar-link">
                <a href="#" >
                    News
                </a>
            </div>
            <div className="sidebar-link">
                <a href="#" >
                    Blog
                </a>
            </div>
            <div className="sidebar-link">
                <a href="#" >
                    Contact
                </a>
            </div>
            {/* <a href="#" className="sidebar-link">
                News
            </a>
            <a href="#" className="sidebar-link">
                Blog
            </a>
            <a href="#" className="sidebar-link">
                Contact
            </a> */}
        </div>
    );
}

export default SideBar;
