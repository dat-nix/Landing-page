import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Top section */}
      <div className="flex flex-wrap justify-between items-center px-6 md:px-16 mb-6">
        {/* Logos */}
        <div className="flex gap-4">
          <Image src="/assets/rec1.png" alt="Logo 1" width={80} height={80} />
          <Image src="/assets/rec2.png" alt="Logo 2" width={80} height={80} />
        </div>

        {/* Icons on the right */}
        <div className="flex flex-col gap-4">
          <Image src="/assets/cir1.png" alt="Circle 1" width={40} height={40} className="rounded-full" />
          <Image src="/assets/cir2.png" alt="Circle 2" width={40} height={40} className="rounded-full" />
        </div>
      </div>

      {/* Navigation links */}
      <div className="flex flex-wrap justify-around px-6 md:px-16 text-center md:text-left">
        <div className="flex flex-col">
          <Link href="/faqs" className="hover:text-orange-400">FAQs</Link>
          <Link href="/contact" className="hover:text-orange-400">Contact Us</Link>
        </div>
        <div className="flex flex-col">
          <Link href="/about" className="hover:text-orange-400">About Us</Link>
          <Link href="/address" className="hover:text-orange-400">Address</Link>
        </div>
        <div className="text-orange-400 font-bold">RITK</div>
      </div>

      <hr className="border-gray-700 my-4 mx-6 md:mx-16" />

      {/* Bottom Section */}
      <div className="flex justify-center gap-6 text-sm">
        <Link href="/cookies" className="hover:text-orange-400">Cookies Policy</Link>
        <span className="text-gray-500">|</span>
        <Link href="/privacy" className="hover:text-orange-400">Privacy Policy</Link>
        <span className="text-gray-500">|</span>
        <Link href="/legal" className="hover:text-orange-400">Legal Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
