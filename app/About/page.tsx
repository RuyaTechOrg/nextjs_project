import Link from "next/link";
import Image from "next/image";
import aboutImgSrc from "../../public/images/hero-image-01.jpg";
import Footer from "@/components/ui/footer";

export const metadata = {
    title: 'About - Gumonda',
    description: 'Page Description',
  }

export default function AboutUs() {
    return(
        <>
        <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">About us</h1>
            <p className="text-xl text-green-600">"What we do? and how we do them?"</p>
          </div>
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={600}/>
          </div>
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision</p>
          </div>

          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">Internet of Things</h1>
            <p className="text-xl text-green-600">"Connecting your devices for direct autonomy and control"</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision</p>
          </div>

          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">Web3 Technologies</h1>
            <p className="text-xl text-green-600">"Building and pioneering decentralized systems"</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision</p>
          </div>
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <h1 className="h1 mb-4">Development</h1>
            <p className="text-xl text-green-600">"Building Quality Software to solve problems and handle tasks"</p>
          </div>
          {/* <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <Image src={aboutImgSrc} alt={"image here"} width={1100} height={1000}/>
          </div> */}
          <div className="max-w-6xl mx-start pb-12 md:pb-20">
            <p className="text-xl text-white">“Take these,” said the old man, holding out a white stone and a 
            black stone that had been embedded at the center of the 
            breastplate. “They are called Urim and Thummim. The black 
            signifies ‘yes,’ and the white ‘no.’ When you are unable to read the 
            omens, they will help you to do so. Always ask an objective 
            question.
            “But, if you can, try to make your own decisions. The treasure is 
            at the Pyramids; that you already knew. But I had to insist on the 
            payment of six sheep because I helped you to make your decision.”
            The boy put the stones in his pouch. From then on, he would 
            make his own decision</p>
          </div>
        </div>
      </div>
      <Footer/>
        </section>  
        </>
    )
}