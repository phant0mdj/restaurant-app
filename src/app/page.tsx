"use client"
import Link from "next/link";
import Menu from "@/components/Menu";
const Home = () => {
  return (
      <>
          <header className="w-[100%]">
              <div className="content_container pt-8 pb-[370px] mx-auto max-w-[1200px]">
                  <div className="header_content flex items-center justify-between">
                      <Menu/>
                      <button className="py-5 px-[30px] border-solid border-2 border-white rounded-full">
                          <Link href="/" className="font-gilroy"> Reservations</Link>
                      </button>
                  </div>
                  <div className="main_content flex flex-col items-center justify-center mt-[200px]">
                      <h2 className="font-balestya">Welcome to</h2>
                      <h1 className="font-abrilfatface">Victoria’s Darlinghurst</h1>
                      <p className="font-gilroy mt-[54px]">COCKTAILS . LIVE MUSIC . RESTAURANT . EVENTS</p>
                  </div>
              </div>
          </header>
      </>
  );
}

export default Home;