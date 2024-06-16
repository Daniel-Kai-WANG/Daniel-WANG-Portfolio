// @flow strict
import Link from "next/link";

function Footer() {
  return (
    <div className="relative border-t border-[#353951] bg-[#0d1224] text-white">
      <div className="mx-auto px-6 py-6 sm:px-12 lg:max-w-[70rem] lg:py-10 xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="-z-40 flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm">
            © Developer Portfolio by{" "}
            <Link target="_blank" href="https://www.linkedin.com/in/daniel-kai-wang/" className="text-[#16f2b3]">
              Daniel WANG
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
