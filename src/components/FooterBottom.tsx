const FooterBottom = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#A52A2A] border-t border-[#A52A2A] h-[68]">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-base">
              Copyright &copy; {getCurrentYear}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-white">
                Terms of Use
              </a>
              <a href="#" className="text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
