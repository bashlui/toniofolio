import Image from 'next/image';
import TestImage from '../assets/test.jpg';

export const About = () => {
    return (
      <section className="pt-20 pb-20 w-full h-[50vh] bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* Left Column - Image */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-8 lg:mb-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                    src={TestImage}
                    className="w-full h-full object-cover object-center"
                    alt="Profile Picture"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
              <h1 className="title-text" id='about'>Who's Toño?</h1>
              <p className="text-lg text-gray-700 mb-6">
                Hi, you can call me Antonio, i&apos;m a full time student at Tecnológico de Monterrey university.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I specialize in front-end development, but I&apos;m also comfortable working across the full stack. Whether it's crafting pixel-perfect UIs or optimizing backend performance, I'm always eager to tackle new challenges and learn new technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                When I&apos;m not coding, you can find me exploring the outdoors, experimenting in the kitchen, or diving into a good book. I believe in continuous learning and strive to grow both personally and professionally every day.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };