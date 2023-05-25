import '../styles/partners.css'
import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

import henthorn from '../images/partners/henthorn.png'
import leelewis from '../images/partners/leelewis.png'
import tegrity from '../images/partners/tegrity.png'
import teinert from '../images/partners/teinert.png'
import wrc from '../images/partners/wrc.png'
import crawford from '../images/partners/crawford.png'
import elliot from '../images/partners/elliot.png'

 


function Partners() {

    const [isHoveredHenthorn, setIsHoveredHenthorn] = useState(false);
    const [isHoveredLeeLewis, setIsHoveredLeeLewis] = useState(false);
    const [isHoveredTegrity, setIsHoveredTegrity] = useState(false);
    const [isHoveredTeinert, setIsHoveredTeinert] = useState(false);
    const [isHoveredWRC, setIsHoveredWRC] = useState(false);
    const [isHoveredCrawford, setIsHoveredCrawford] = useState(false);
    const [isHoveredElliot, setIsHoveredElliot] = useState(false);
   

    return(
        <>
        {/* <div className="container-partners-main">
                <div>
                    Our Services:
                </div>
                <div>
                    <p>Send bid invites to:</p>
                    <a href="mailto: kim@n2ec.com" >Kim Cargill</a>
                </div>
            </div> */}



            <div className="partners-container-main">
                    
                    <div className="partners-container-title">
                        <h1>Industry Partners</h1>
                    </div>
                    
                    <div className="partners-container-category">
                        <div className='partners-container-job'>
                            <a style={{ textDecoration: 'none', color:'black' }} href='https://henthorncommercialconstruction.com/'>
                                <div className='category-box'>
                                    <img width={250} height={250} src={henthorn} alt="" 
                                        onMouseEnter={() => setIsHoveredHenthorn(true)}
                                        onMouseLeave={() => setIsHoveredHenthorn(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredHenthorn ? 'hidden' : ''}`}>
                                        <h4>Henthorn Construction</h4>
                                    </div>
                                </div>
                            </a> 
                        </div>
                       
                        <div className='container-job'>
                            <a style={{ textDecoration: 'none', color:'black' }} href='https://www.leelewis.com/'>
                                <div className='category-box'>
                                    <img width={250} height={250} src={leelewis} alt="" 
                                    onMouseEnter={() => setIsHoveredLeeLewis(true)}
                                    onMouseLeave={() => setIsHoveredLeeLewis(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredLeeLewis ? 'hidden' : ''}`}>
                                        <h4>Lee Lewis Construction</h4>
                                    </div>
                                </div>
                            </a> 
                        </div>
                        <div className='container-job'>
                            <a style={{ textDecoration: 'none', color:'black' }} href='https://www.tegrity-contractors.com/'>
                                <div className='category-box'>
                                    <img width={250} height={250} src={tegrity} alt="" 
                                        onMouseEnter={() => setIsHoveredTegrity(true)}
                                        onMouseLeave={() => setIsHoveredTegrity(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredTegrity ? 'hidden' : ''}`}>
                                        <h4>Tegrity Contractors</h4>
                                    </div>
                                </div>
                            </a> 
                        </div>
                        <div className='container-job'>
                            <a style={{ textDecoration: 'none', color:'black' }} href='https://teinert.com/'>
                                <div className='box-lbk'>
                                    <img width={250} height={250} src={teinert} alt="" 
                                        onMouseEnter={() => setIsHoveredTeinert(true)}
                                        onMouseLeave={() => setIsHoveredTeinert(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredTeinert ? 'hidden' : ''}`}>
                                        <h4>Teinert Construction</h4>
                                    </div>
                                </div>
                            </a> 
                        </div>
                        <div className='container-job'>
                            <a style={{ textDecoration: 'none', color:'black' }} href='https://wrclubbock.com/'>
                                <div className='box-lbk'>
                                    <img width={250} height={250} src={wrc} alt="" 
                                        onMouseEnter={() => setIsHoveredWRC(true)}
                                        onMouseLeave={() => setIsHoveredWRC(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredWRC ? 'hidden' : ''}`}>
                                        <h4>W.R. Construction</h4>
                                    </div>
                                </div>
                            </a> 
                        </div>
                    </div>



                    <div className="partners-container-title">
                        <h1>Industry Suppliers</h1>
                    </div>
                    <div className="partners-container-category">
                        <div className='partners-container-job'>
                            <a style={{ textDecoration: 'none', color:'black' }} href='https://www.crawfordelectricsupply.com/'>
                                <div className='category-box'>
                                    <img width={250} height={250} src={crawford} alt="" 
                                        onMouseEnter={() => setIsHoveredCrawford(true)}
                                        onMouseLeave={() => setIsHoveredCrawford(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredCrawford ? 'hidden' : ''}`}>
                                        <h4>Crawford Electric Supply</h4>
                                    </div>
                                </div>
                            </a> 
                        </div>
                        <div className='container-job'>
                            <a style={{ textDecoration: 'none', color:'black' }} href='https://www.elliottelectric.com/locations/110/TX/Lubbock.aspx'>
                                <div className='category-box'>
                                    <img width={250} height={250} src={elliot} alt="" 
                                    onMouseEnter={() => setIsHoveredElliot(true)}
                                    onMouseLeave={() => setIsHoveredElliot(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredElliot ? 'hidden' : ''}`}>
                                        <h4>Elliot Ellectric Supply</h4>
                                    </div>
                                </div>
                            </a> 
                        </div>
                    </div>
    
                </div>
        </>
    )
}

export default Partners