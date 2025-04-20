import jambread from '/src/assets/jambread.jpg'
import sPizza from '/src/assets/s_pizza.jpg'
import jammin from '/src/assets/jammin.jpg'
import bday from '/src/assets/bday.jpg'
import './PageAbout.css'

function PageAbout() {
    return(
        <>
            <div className="section-about" id="page-about">

                <div className="navbar-spacer">
                    {/* TO-DO: ADD HORIZONTAL DESIGN HERE */}
                </div>
                
                <div className="ab-container">
                    <div id="pic-collage1">
                        <div className="pic-container">
                            <img src={jambread} alt="Purplejam Cafe" id="jambread-wide"/>
                        </div>
                        <div className="pic-container">
                            <img src={sPizza} alt="Purplejam Cafe" id="s_pizza"/>
                        </div>
                    </div>
                    <h3>A Nice Food Cafe in Manila...</h3>
                    <p className="ab-paragraph">Purplejam Cafe is located in the vintage streets of Escolta, Manila. Offering a relax atmosphere and great food at affordable prices, you don't have to strain your wallet when going here to eat alone or with a company of friends.</p>
                    <p className="ab-paragraph">The cafe also offers its specialty: Purplejam Sandwich and Lavender Teas whose ingredients are sourced locally. Importing from its home country helps of ensure quality of the shop's goods.</p>
                    
                </div>

                <div className="ab-container">
                    <div id="pic-collage2">
                        <div className="pic-container">
                            <img src={jammin} alt="Purplejam Cafe" id="jammin"/>
                        </div>
                        <div className="pic-container">
                            <img src={bday} alt="Purplejam Cafe" id="bday"/>
                        </div>
                    </div>
                    <p className="ab-paragraph">Purplejam Cafe is also host to local singing talents, Be sure to check out, listen and support our gifted artists. The cafe is also open for reservations should people need a venue to hold their parties and important gatherings.</p>
                </div>
                
            </div>        
        </>
    );
}

export default PageAbout