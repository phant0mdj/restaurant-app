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
              <a href="#" className="font-gilroy">MENU</a>
          </div>
          {isOpen && (
              <div className="burger_menu flex justify-between h-full w-full fixed left-0 top-0">
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
                  <div className="nav">
                      <div className="logo flex justify-end">
                          <Image src="/icons/menuLogo.svg" width={56} height={60} alt="logo"/>
                      </div>
                      <nav>
                          <ul className="flex flex-col items-center justify-center gap-[52px]">
                              <li>
                                  <Link href="#">HOME</Link>
                              </li>
                              <li>
                                  <Link href="#">ABOUT US</Link>
                              </li>
                              <li>
                                  <Link href="#">MELBOURNE CUP</Link>
                              </li>
                              <li>
                                  <Link href="#">MENU</Link>
                              </li>
                              <li>
                                  <Link href="#">FUNCTIONS & WHAT’S ON</Link>
                              </li>
                              <li>
                                  <Link href="#">BOOK NOW</Link>
                              </li>
                              <li>
                                  <Link href="#">CONTACT US</Link>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div className="burger_menu_img">
                      <Image src="/images/menu.jpeg" width={100} height={100} alt="logo"/>
                  </div>
              </div>
          )};
      </>
  );
};

export default Menu;
