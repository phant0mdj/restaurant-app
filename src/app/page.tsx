"use client"
import Link from "next/link";
import Menu from "@/components/Menu";
import Image from "next/image";
const Home = () => {
  return (
      <>
          <header className="w-[100%]">
              <div className="main_content_container pt-8 pb-[370px] mx-auto max-w-[1200px]">
                  <div className="header_content flex items-center justify-between">
                      <Menu/>
                      <button className="py-5 px-[30px] border-solid border border-white rounded-full">
                          <Link href="/" className="font-gilroy"> Reservations</Link>
                      </button>
                  </div>
                  <div className="main_content flex flex-col items-center justify-center mt-48 mb-96">
                      <h2 className="font-balestya">Welcome to</h2>
                      <h1 className="font-abrilfatface">Victoria’s Darlinghurst</h1>
                      <p className="font-gilroy mt-[54px]">COCKTAILS . LIVE MUSIC . RESTAURANT . EVENTS</p>
                  </div>
              </div>
          </header>
          <section className="pt-11 bg-[rgb(14,19,23)]">
              <div className="section_content max-w-[1200px]  mx-auto">
                  <div className="whats_on flex flex-col ">
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
                          <div className="middle_content mt-[-30px] mb-[30px] max-w-[484px] max-h-[620px] bg-[rgb(22,27,33)] flex flex-col items-center px-[70px] pt-[116px] pb-[139px] ">
                              <p className="font-balestya">About Us</p>
                              <h2 className="font-abrilfatface mt-3">VICTORIA’S STORY</h2>
                              <p className="middle_content_text font-gilroy mt-[37px]">A deep dive into decadence, sophisticated, refined
                                  and dripping with  chandeliers,for intimate cocktail,
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
      </>
  );
}

export default Home;