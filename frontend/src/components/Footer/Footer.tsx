const Footer = () => {
  return (
    <>

    <footer>
        <div className="md:auto sm:auto flex justify-between ">
          <div className="w-3/4 ">
              <a className="flex items-center pt-6 pb-4 pl-16 ">
                <img className="w-[230px] h-auto relative left-4 " src="./assets/footer/logo.png" alt=""/>
              </a>
                <div className="text-start relative left-56 font-semibold ">
                  <h6> CAMILA BRONN</h6>
                </div>
                <br></br>
                <div className=" font-semibold 2xl text-end pr-6">
                  <h6>Copyright@2023. All rights reserved | CR Bronn </h6>
                </div>
            </div>
              <div className="w-2/4">
                <div className="font-bold text-xl flex flex-col justify-center  "> 
                  <h3> MIS REDES</h3>
                  <div className="columns-2">
                          <a className="flex items-center space-x-3 pt-6 pb-3 pr-5 hover:text-violeta-100 transition cursor-pointer">
                           <img className="icon" src="./assets/footer/ant-design_instagram-filled.png"  alt=""/>
                            <span>Instagram</span>
                        </a> 
                </div>
                  <div className="columns-2 ">
                        <a className="flex items-center space-x-3 pt-5 pb-3 pr-5 hover:text-violeta-100 transition  cursor-pointer">
                        <img className="icon" src="./assets/footer/ri_facebook-box-fill.svg"  alt=""/>
                            <span>Facebook</span>
                        </a> 
                    <div className="w-2/4">
                      <div className="columns-2">
                         
                          <a className="flex items-center space-x-3 pt-5 pr-5 hover:text-violeta-100 transition cursor-pointer">
                            <a className="flex items-center space-x-3  ">
                            <img className="icon" src="./assets/footer/vaadin_twitter-square.png"  alt=""/>
                              <span>Twitter</span>
                            </a>
                          </a> 
                    </div>
                </div>
        
            </div>
            </div>
          </div>
          <div/>
        </div>
    </footer>   
    </>
  )
}

export default Footer;