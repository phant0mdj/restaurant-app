import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

const Menu = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () =>{
        setisOpen(!isOpen);
    }
  return (
      <>
          <div onClick={toggleMenu} className="menu_button  flex items-center gap-2">
              <Image src="/icons/burgerButton.svg" width={26} height={18} alt="menu"
                     className=" cursor-pointer pt-[5px]"/>
              <a className=" cursor-pointer font-gilroy">MENU</a>
          </div>
          {isOpen && (
              <div className="burger_menu flex justify-between  h-full w-full fixed left-0 top-0">
                  <div className="flex flex-col justify justify-between items-cneter p-[6%] border-r-white">
                      <div
                          onClick={toggleMenu}
                          className="close_button rounded-full w-[60px] h-[60px] border border-white flex items-center justify-center cursor-pointer">
                          <span className="cursor-pointer text-3xl text-white_rgb">&#10799;</span>
                      </div>
                      <div className="flex-2 rotate-[-90deg] justify-items-start items-start w-[60px] p text-center">
                          <a
                              href="mailto:mail@thevictorias.co.au"
                              className="mail font-gilroy">
                              mail@thevictorias.co.au
                          </a>
                      </div>
                      <div className="social_media gap-6 flex flex-col">
                          <div
                              className="facebook_icon rounded-full w-[60px] h-[60px]  border border-white flex items-center justify-center">
                              <Image
                                  src="/icons/facebook.svg"
                                  alt="facebook_logo"
                                  width={30}
                                  height={30}/>
                          </div>
                          <div
                              className="instagram_icon rounded-full w-[60px] h-[60px]  border border-white flex items-center justify-center">
                              <Image
                                  src="/icons/menu_instagram.svg"
                                  alt="instagram_logo"
                                  width={24}
                                  height={24}/>
                          </div>
                      </div>
                  </div>
                  <div className="nav py-[6%] w-96 ">
                      <div className="logo flex justify-end">
                          <Image src="/icons/menuLogo.svg" width={56} height={60} alt="logo"/>
                      </div>
                      <nav>
                          <ul className="flex flex-col items-start justify-start gap-[52px]">
                              <li>
                                  <Link className="font-abrilfatface" href="#">HOME</Link>
                              </li>
                              <li>
                                  <Link className="font-abrilfatface" href="#">ABOUT US</Link>
                              </li>
                              <li>
                                  <Link className="font-abrilfatface" href="#">MELBOURNE CUP</Link>
                              </li>
                              <li>
                                  <Link className="font-abrilfatface" href="#">MENU</Link>
                              </li>
                              <li>
                                  <Link className="font-abrilfatface" href="#">FUNCTIONS & WHAT’S ON</Link>
                              </li>
                              <li>
                                  <Link className="font-abrilfatface" href="#">BOOK NOW</Link>
                              </li>
                              <li>
                                  <Link className="font-abrilfatface" href="#">CONTACT US</Link>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div className="burger_menu_img flex items-end justify-center py-[6%] w-[690px] ">
                          <h2 className="font-balestya">Victoria’s <br/> Darlinghurst</h2>
                  </div>
              </div>
          )};
      </>
  );
};

export default Menu;
