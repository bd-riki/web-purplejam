import MenuLists from './MenuLists'

function PageMenu() {
    return (
        <>
            {/* MENU SECTION */}
            <div className="section-menu" id="page-menu">
                <div className="menu-banner">
                <div className="txt-menu-banner">
                    <div className="txt-menu-container">
                    <h1>Our Selection</h1>
                    <h4>Treats to induldge your appetite or soothe your soul.</h4>
                    </div>
                </div>
                </div>
                <div className="list-container">
                <MenuLists/>
                </div>
            </div>
        </>
    )
}

export default PageMenu;