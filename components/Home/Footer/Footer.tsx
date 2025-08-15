import { Navlinks } from '@/constant/constant';
import { FaGoogle, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className="bg-emerald-200 dark:bg-purple-700 text-blue-600 dark:text-white py-12 px-6" id='footer'>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* 1. Logo + Company Info */}
        <div className="space-y-4">
          <div className='flex items-center space-x-2 gap-2'>
                         <div className='w-10 h-10 bg-fuchsia-500 rounded-full flex items-center justify-center flex-col'>
                             <GiBrain className='w-6 h-6 text-white'/>
                         </div>
                         <h1 className='text-xl hidden sm:block md:text-2xl text-red-500 font-bold'>Brain Ai</h1>
                     </div>
          <p className="font-medium text-base sm:text-lg md:text-xl max-w-xs mt-5">
            Get in touch with us for AI-driven solutions that transform your business.
          </p>

   <div className="flex gap-5 mt-9">
  {/* Google */}
  <a 
    href="#" 
    className="bg-white text-blue-500 rounded-full p-3 hover:scale-110 transition-transform shadow-md animate-bounce"
  >
    <FaGoogle size={20} />
  </a>

  {/* YouTube */}
  <a 
    href="#" 
    className="bg-red-600 text-white rounded-full p-3 hover:scale-110 transition-transform shadow-md animate-bounce"
  >
    <FaYoutube size={20} />
  </a>

  {/* Twitter */}
  <a 
    href="#" 
    className="bg-sky-500 text-white rounded-full p-3 hover:scale-110 transition-transform shadow-md animate-bounce"
  >
    <FaTwitter size={20} />
  </a>

  {/* LinkedIn */}
  <a 
    href="#" 
    className="bg-blue-700 text-white rounded-full p-3 hover:scale-110 transition-transform shadow-md animate-bounce"
  >
    <FaLinkedin size={20} />
  </a>
</div>


        </div>

        {/* 2. Nav Links */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-500">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {Navlinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.url} 
                  className="hover:text-pink-500 transition-colors text-lg sm:text-xl font-bold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Newsletter */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-500">Subscribe to our Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-3 rounded-md border border-gray-800 focus:outline-none focus:ring-2
               focus:ring-pink-500 text-black dark:text-gray-300 font-bold w-full"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-2xl sm:text-xl font-bold text-gray-800 dark:text-gray-300">
        © {new Date().getFullYear()} Brain AI. All rights reserved.
      </div>
    </footer>
  );
}
