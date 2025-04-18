import MenuLists from './MenuLists'
import './PageMenu.css'

function PageMenu() {
    return (
        <>
            {/* MENU SECTION */}
            <div className="section-menu" id="page-menu">
                {/* SECTION BANNER */}
                <div className="banner-bg">
                    <div className="banner-alpha">
                        &nbsp; {/* PREVENTS MARGIN COLLAPSE. */}
                        <div className="txt-menu-container">
                            <h1>Our Selection</h1>
                            <h4>Treats to induldge your appetite or soothe your soul.</h4>
                        </div>
                    </div>
                </div>

                {/* LISTS HERE */}
                <div className="list-container">
                    <MenuLists/>
                </div>
            </div>
        </>
    )
}

export default PageMenu;