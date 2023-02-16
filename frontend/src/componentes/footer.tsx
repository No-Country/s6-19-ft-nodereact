import React from 'react';
import 'footer.css/'

const Footer = () => {
    return (
      <>
      <footer className="md:container md:mx-auto">
          <div>
           <div className="logo-container">
              <div className="logo-container_app ">
              </div>
          </div>
              <div className="redes-container "> 
                <h3> MIS REDES</h3>
                  <div className="columns-2">
                    <div className="redes-container_instagram">
                      <div className="logo-instagram ">
                        <img src="../img/ant-design_instagram-filled.png" className="opacity-0" alt=""/>
                      </div> 
                        <h5>Instagram</h5>
                    </div>
                  </div>
                    <div className="columns-2 ">
                      <div className="redes-container_facebook">
                        <div className="logo-facebook">
                          <img src="../img/ri_facebook-box-fill.svg" className="opacity-0" alt=""/>
                        </div> 
                          <h5>Facebook</h5>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="container-twitter">
                <div className="columns-2">
                  <div className="redes-container_twitter">
                    <div className="logo-twitter">
                      <img src="../img//vaadin_twitter-square.png" className="opacity-0" alt=""/>
                    </div>
                      <h5>Twitter</h5>
                    </div>
                  </div>
              </div>
              
          </footer>
          
              
      </>
    )
  }
  
  export default Footer;