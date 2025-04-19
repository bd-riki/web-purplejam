function PageAbout() {
    return(
        <>
            <div className="section-about" id="page-about">

                <div className="navbar-spacer">
                    {/* TO-DO: ADD HORIZONTAL DESIGN HERE */}
                </div>

                <div className="ab-container">
                    <div id="pic-collage1">
                        <img src="src/assets/jambread.jpg" alt="Purplejam Cafe" className="jambread"/>
                        <div id="pic-collage-sub1">
                            <img src="src/assets/jambread.jpg" alt="Purplejam Cafe" className="jambread"/>
                            <img src="src/assets/eggtoast.jpg" alt="Purplejam Cafe" id="eggtoast"/>
                        </div>
                    </div>
                    <h3>A Nice Food Cafe in Manila...</h3>
                    <p className="ab-paragraph">Purplejam Cafe is located in the vintage streets of Escolta, Manila. Offering a relax atmosphere and great food at affordable prices, you don't have to strain your wallet when going here to eat alone or with a company of friends.</p>
                    <p className="ab-paragraph">The cafe also offers its specialty: Purplejam Sandwich and Lavender Teas whose ingredients are sourced locally. Supporting raw ingredients made from its home country is part of ensuring quality of the shop's service.</p>
                    
                </div>

                <div className="ab-container">
                    {/* <div id="pic-collage2">
                        <img src="src/assets/eggtoast.jpg" alt="Good Food" id="pic2"/>
                        <img src="src/assets/eggtoast.jpg" alt="Good Food" id="pic3"/>
                    </div> */}
                    <p>Purplejam Cafe is also host to local singing talents, Be sure to check in to listen and support our gifted artists. The cafe is also open for reservations should people need a venue to hold their parties and important gatherings.</p>
                </div>
                
            </div>        
        </>
    );
}

export default PageAbout