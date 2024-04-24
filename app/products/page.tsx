import Footer from "@/components/ui/footer"
import Image from 'next/image'

import TestimonialImage01 from '@/public/images/AidPlugBglogo-01-removebg-preview (1).png';
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';

export const metadata =  {
    title : 'Development  - Gumonda',
    description : 'Page description',
}

export default function DevPage () {
    return (
        <>
        <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">Products</h1>
            <p className="text-xl text-green-600">"What we do? and how we do them?"</p>
            <p className="text-xl text-white">"“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision"</p>
          </div>

          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">1. Aid-Plug</h1>
            <p className="text-xl text-green-600">"Decentralised Fundraiser Platform"</p>
            <p className="text-xl text-white">A decentralised fundraising platform, where users can create campaigns and receive funds via the decentralised network.
            Campaigners can receive funds in several supported crypto currencies, such as - Ethereum, Solana, BitCoin, Tron, e.t.c.
            Aid Plug is user friendly and prioritises anonymosity amongst other customer preferred features. Simple Connect your wallet and begin receiving funds in your preferred cryto currency from benefactors
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Aid-Plug - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Coming soon...</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Aid-Plug - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Coming soon...</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Aid-Plug - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Coming soon...</a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">2. Getsome</h1>
            <p className="text-xl text-green-600">"Decentralised Fundraiser Platform"</p>
            <p className="text-xl text-white">
              Getsome is a platform where users
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Getsome - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">coming soon...</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Getsome - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">coming soon...</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Getsome - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">coming soon...</a>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">3. Load Monitoring System</h1>
            <p className="text-xl text-green-600">"Decentralised Fundraiser Platform"</p>
            <p className="text-xl text-white">"“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision"</p>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">NILM - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Coming soon...</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">NILM - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Coming soon...</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">NILM - Gumonda,</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Coming soon...</a>
              </div>
            </div>

          </div>

        </div>
      </div>
        <Footer/>
        </div>
        </div>
        </section>
        </>
    )
}