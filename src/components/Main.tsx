"use client"

import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
      <>
          <main>
              <section className="pt-11 bg-[rgb(14,19,23)]">
                  <div className="section_content max-w-[1200px]  mx-auto">
                      <div className="whats_on flex flex-col pb-44">
                          <div className="features flex flex-col items-center justify-between">
                              <p className="features_text font-balestya">Features</p>
                              <div className="features_main_text flex justify-center items-center mt-3">
                                  <p className="font-abrilfatface">VICTORIA’S</p>
                                  <h2 className="font-abrilfatface">WHAT’S ON</h2>
                              </div>
                          </div>
                          <div className="features_img flex items-center justify-between mt-28 gap-4">
                              <div className="features_card flex flex-col items-start">
                                  <Image src="/images/whats_on1.png" alt="features" width={392} height={597}/>
                                  <p className="mt-[22px]">Restaurant</p>
                              </div>
                              <div className="features_card flex flex-col items-start">
                                  <Image src="/images/whats_on2.png" alt="features" width={392} height={597}/>
                                  <p className="mt-[22px]">Bar & Lounge</p>
                              </div>
                              <div className="features_card flex flex-col items-start">
                                  <Image src="/images/whats_on3.png" alt="features" width={392} height={597}/>
                                  <p className="mt-[22px]">Events & Functions</p>
                              </div>
                          </div>
                          <div className="features_content2 flex mt-[185px] items-center">
                              <div className="max-w-[392px] max-h-[531px]">
                                  <Image src="/images/section1.png" alt="sectionImg" width={392} height={531}/>
                              </div>
                              <div
                                  className="middle_content mt-[-30px] mb-[30px] max-w-[484px] max-h-[620px] bg-[rgb(22,27,33)] flex flex-col items-center px-[70px] pt-[116px] pb-[139px] ">
                                  <p className="font-balestya">About Us</p>
                                  <h2 className="font-abrilfatface mt-3">VICTORIA’S STORY</h2>
                                  <p className="middle_content_text font-gilroy mt-[37px]">A deep dive into decadence,
                                      sophisticated, refined
                                      and dripping with chandeliers,for intimate cocktail,
                                      inspired dining and an extraordinary wine list, with
                                      live ambience, from blues to burlesque, and curated
                                      private experiences.</p>
                                  <button className="font-gilroy mt-[37px] ">Read More</button>
                              </div>
                              <div className="max-w-[392px] max-h-[531px]">
                                  <Image src="/images/section2.png" alt="sectionImg" width={392} height={531}/>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <div className="menu_wrapper w-full">
                  <div className="menu pt-20 mx-auto max-w-[1440px]">
                      <div className="features flex flex-col items-center justify-between">
                          <p className="features_text font-balestya">More At Victoria’s</p>
                          <div className="features_main_text flex justify-center items-center mt-3">
                              <p className="font-abrilfatface">MENU</p>
                              <h2 className="font-abrilfatface">Check Our Menu</h2>
                          </div>
                      </div>
                      <div className="menu_img flex items-center gap-6 mt-36 mx-auto justify-center">
                          <div className="menu_img_content">
                              <Image src="/images/menu-1.png" alt="menu" width={282} height={482}/>
                          </div>
                          <div className="menu_img_content flex justify-center items-center w-[392px] h-[482px]">
                              <Link href="#" className="font-abrilfatface">Food Menu</Link>
                          </div>
                          <div className="menu_img_content flex justify-center items-center w-[392px] h-[482px]">
                              <Link href="#" className="font-abrilfatface">Drink Menu</Link>
                          </div>
                          <div className="menu_img_content">
                              <Image src="/images/menu-4.png" alt="menu" width={282} height={482}/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="menu_about_wrapper bg-[rgb(14,19,23)] max-w-full pt-44">
                  <div className="menu_about flex justify-center items-center max-w-[1200px] mx-auto gap-6">
                      <div className="menu_about_card pt-[34px] px-8 pb-7 flex flex-col justify-center items-center">
                          <h2 className="font-abrilfatface">BAR/LOUNGE</h2>
                          <p className="font-gilroy mt-4">Sheer Opulence | Expect The
                              Unexpected</p>
                          <p className="about_card_text font-gilroy  mt-5">Linger over wickedly delicious signature
                              cocktails, a sneaky aperitif or late night
                              nip of whiskey, in sumptuous surrounds
                              with live music vibes, cheeky burlesque
                              and occasional magic.</p>
                          <button className="mt-3 px-3 py-2">&#8594;</button>
                      </div>
                      <div className="menu_about_card  pt-[34px] px-8 pb-7 flex flex-col justify-center items-center">
                          <h2 className="font-abrilfatface">EXPERIENCES</h2>
                          <p className="font-gilroy mt-4">Sheer Opulence | Expect The
                              Unexpected</p>
                          <p className="about_card_text font-gilroy  mt-5">Linger over wickedly delicious signature
                              cocktails, a sneaky aperitif or late night
                              nip of whiskey, in sumptuous surrounds
                              with live music vibes, cheeky burlesque
                              and occasional magic.</p>
                          <button className="mt-3 px-3 py-2">&#8594;</button>
                      </div>
                      <div className="menu_about_card pt-[32px] px-5 pb-7 flex flex-col justify-center items-center">
                          <h2 className="font-abrilfatface w-max">LIVE ENTERTAINMENT</h2>
                          <p className="font-gilroy mt-4">Sheer Opulence | Expect The
                              Unexpected</p>
                          <p className="about_card_text font-gilroy mt-5">Linger over wickedly delicious signature
                              cocktails, a sneaky aperitif or late night
                              nip of whiskey, in sumptuous surrounds
                              with live music vibes, cheeky burlesque
                              and occasional magic.</p>
                          <button className="mt-3 px-3 py-2">&#8594;</button>
                      </div>
                      <div className="menu_about_card  pt-[34px] px-8 pb-7 flex flex-col justify-center items-center">
                          <h2 className="font-abrilfatface">GALLERY</h2>
                          <p className="font-gilroy mt-4">Sheer Opulence | Expect The
                              Unexpected</p>
                          <p className="about_card_text font-gilroy mt-5">Linger over wickedly delicious signature
                              cocktails, a sneaky aperitif or late night
                              nip of whiskey, in sumptuous surrounds
                              with live music vibes, cheeky burlesque
                              and occasional magic.</p>
                          <button className="mt-3 px-3 py-2">&#8594;</button>
                      </div>
                  </div>
              </div>
              <div className="video_container mt-[168px]">
                  <iframe src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=Mw9YrIAnnNvUCP34" title="Youtube Video"
                          allow="autoplay" allowFullScreen={true}></iframe>
              </div>
              <div className="section_blogs">
                  <div
                      className="section_blogs_content flex flex-col items-center max-w-[1200px] mx-auto pt-32 flex-wrap">
                      <p className="font-balestya">Our Lateste News</p>
                      <h2 className="font-abrilfatface mt-3">Check Our Blogs</h2>
                      <div className="blogs_content flex gap-6 mt-14">
                          <div className="blogs_card">
                              <Image src="/images/blog1.png" width={392} height={295} alt="blog"/>
                              <h2 className="font-gilroy">New Year’s Eve Waitlist</h2>
                              <p className="font-gilroy">10 Sept 2022</p>
                              <Link href="#" className="font-gilroy">Go out on a high and ring in 2023 from the best
                                  spot in town!</Link>
                              <span>&#8594;</span>
                          </div>
                          <div className="blogs_card">
                              <Image src="/images/blog2.png" width={392} height={295} alt="blog"/>
                              <h2 className="font-gilroy">New Year’s Eve Waitlist</h2>
                              <p className="font-gilroy">10 Sept 2022</p>
                              <Link href="#" className="font-gilroy">Go out on a high and ring in 2023 from the best
                                  spot in town!</Link>
                              <span>&#8594;</span>
                          </div>
                          <div className="blogs_card">
                              <Image src="/images/blog3.png" width={392} height={295} alt="blog"/>
                              <h2 className="font-gilroy">New Year’s Eve Waitlist</h2>
                              <p className="font-gilroy">10 Sept 2022</p>
                              <Link href="#" className="font-gilroy">Go out on a high and ring in 2023 from the best
                                  spot in town!</Link>
                              <span>&#8594;</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="reservation_wrapper bg-full">
                  <div className="reservation max-w-[1200px] mx-auto flex flex-col items-center mt-[7rem] pt-[51px]">
                      <h1 className="font-abrilfatface">Make A <span className="font-abrilfatface">Reservation</span>
                      </h1>
                      <div className="reservation_info flex justify-between items-center mt-11 gap-11">
                          <input type="text" placeholder="Full Name*"/>
                          <input type="number" placeholder="Phone Number*"/>
                      </div>
                      <div className="reservation_info2 flex justify-between items-center mt-9 gap-7">
                          <input type="number" placeholder="Number of People*"/>
                          <input type="date" placeholder="Pick a date"/>
                          <input type="time" placeholder="Pack time"/>
                      </div>
                      <button className="font-gilroy mt-11">BOOK A TABLE</button>
                  </div>
              </div>
          </main>
      </>
  );
};

export default Main;
