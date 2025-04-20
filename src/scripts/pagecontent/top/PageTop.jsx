import './PageTop.css'

function PageTop() 
{
    return (
    <>
        {/* TOP SECTION */}
        <div className="top-banner">
            <div className="captions">
                <h1 className="caption-main">Your lavender patch</h1>
                <h1 className="caption-main">from the daily bustles.</h1>    
                <h4 id="caption-main">Fresh from the jar, straight to your cup.</h4>
                <a href="#page-menu" className="btn-bordered">Check Our Menu</a>  
            </div>
        </div>    
    </>)
}

export default PageTop;