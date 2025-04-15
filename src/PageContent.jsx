import './PageMain.css'
import './PageTop.css'
import './PageMenu.css'
import MenuLists from './MenuLists'

function PageContent() {
    return (
      <>
        <div className="main-content">
          <div className="navbar-spacer"></div>
          <div className="top-banner">
            <div className="captions">
                <h1 className="caption-main">Your lavender patch</h1>
                <h1 className="caption-main">from the daily bustles.</h1>    
                <h4 id="caption-main">Fresh from the jar, straight to your cup.</h4>
                <button className="btn-bordered">CHECK OUR MENU</button>  
            </div>
          </div>    
          
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
        </div>
      </>
      
    )
  }
  
  export default PageContent;
  