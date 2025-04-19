import PageTop from './top/PageTop'
import PageMenu from './menu/PageMenu'
import PageAbout from './about/PageAbout'
import './PageContent.css'
import './about/PageAbout.css'


function PageContent() {
    return (
      <>
        <div className="main-content">
          <div className="navbar-spacer"></div>
          <PageTop/>    
          <PageMenu/>
          <PageAbout/>
          {/* CONTACT SECTION */}
        
        </div>
      </>
      
    )
  }
  
  export default PageContent;
  