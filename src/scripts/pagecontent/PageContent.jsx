import PageTop from './top/PageTop'
import PageMenu from './menu/PageMenu'
import './PageContent.css'
import './about/PageAbout.css'


function PageContent() {
    return (
      <>
        <div className="main-content">
          <div className="navbar-spacer"></div>
          <PageTop/>    
          <PageMenu/>
      
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
  