import PageTop from './top/PageTop'
import PageMenu from './menu/PageMenu'
import PageAbout from './about/PageAbout'
import Footer from '../footer/Footer'
import './PageContent.css'

function PageContent() {
    return (
      <>
        <div className="main-content">
          <div className="navbar-spacer"></div>
          <PageTop/>    
          <PageMenu/>
          <PageAbout/>
          <Footer/>
        </div>
      </>
      
    )
  }
  
  export default PageContent;
  