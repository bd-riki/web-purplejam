import './PageMain.css'
import './top/PageTop.css'
import './PageMenu.css'
import './PageAbout.css'
import MenuLists from './MenuLists'
import PageTop from './top/PageTop'

function PageContent() {
    return (
      <>
        <div className="main-content">
          <div className="navbar-spacer"></div>
          <PageTop/>    
          
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
          {/* ABOUT SECTION */}
          {/* <div className="section-about">
            <h1>A Nice Food Cafe in Manila...</h1>
          </div> */}
          {/* CONTACT SECTION */}
        
        
        </div>
      </>
      
    )
  }
  
  export default PageContent;
  