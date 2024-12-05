const Header = () => {
  return (
    <header className="w-[100%]">
      <div className="content_container pt-8 pb-[370px] mx-auto max-w-[1200px]">
        <div className="header_content flex items-center justify-between">
          <div className="menu_button flex items-stretch gap-2">
             <img src="/icons/burgerButton.svg" alt="menu"/>
             <a href="#" className="font-gilroy">MENU</a>
          </div>
          <button className="py-5 px-[30px] border-solid border-2 border-white rounded-full">
            <a href="#" className="font-gilroy">Reservations</a>
          </button>
        </div>
        <div className="main_content flex flex-col items-center justify-center pt-[200px]">
            <h2 className="font-balestya">Welcome to</h2>
            <h1 className="font-abrilfatface">Victoria’s Darlinghurst</h1>
            <p className="font-gilroy mt-[54px]">COCKTAILS . LIVE MUSIC . RESTAURANT . EVENTS</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
