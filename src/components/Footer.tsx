import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
        <footer className="pt-40 pb-36">
                <div className="footer_content mx-auto flex justify-between items-center max-w-[1200px]">
                    <div className="contact_us flex flex-col items-start">
                        <h2 className="font-gilroy">Contact Us</h2>
                        <nav className="mt-6">
                            <ul>
                                <li>
                                    <Image src="/icons/location.svg" alt="location" width={13} height={17}/>
                                    <Link className="font-gilroy" href="#">10 Ettrick, Wisconsin(WI), 54627</Link>
                                </li>
                                <li>
                                    <Image src="/icons/phone.svg" alt="phone" width={16} height={16}/>
                                    <Link className="font-gilroy" href="tel:+440 835-5599">+440 835-5599</Link>
                                </li>
                                <li>
                                    <Image src="/icons/mail.svg" alt="mail" width={14} height={14}/>
                                    <Link className="font-gilroy"
                                          href="mailto:mail@thevictorias.co.au">mail@thevictorias.co.au</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="middle_content flex flex-col items-center ">
                        <h2 className="font-abrilfatface">VICTORIA’S</h2>
                        <div className="footer_social_media flex gap-2 mt-7">
                            <Image className="cursor-pointer" src="icons/facebook.svg" width={21} height={21} alt="facebook"/>
                            <Image className="cursor-pointer" src="icons/instagram.svg" width={21} height={21} alt="instagram"/>
                        </div>
                    </div>
                    <div className="working_hours flex flex-col items-end ">
                        <h2 className="font-gilroy">Working Hours</h2>
                        <div className="mt-6 flex flex-col items-end gap-[18px]">
                            <p className="font-gilroy"><span>Mon - Fri</span> 5:00pm - 12:00pm</p>
                            <p className="font-gilroy"><span>Sat</span> 5:00pm - 12:00pm</p>
                            <p className="font-gilroy"><span>Sun</span> 5:00pm - 12:00pm</p>
                        </div>
                    </div>
                </div>
        </footer>
    </>
  );
};

export default Footer;
