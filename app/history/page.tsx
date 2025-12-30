import Navigation from "@/components/Navigation";
import { Award } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "History - Bleck Engineering",
  description: "A legacy of engineering excellence since 1945",
};

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative mt-16 flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-32 md:pb-20 min-h-[80vh] md:aspect-auto md:min-h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/IMG_2208-2-2.jpg"
            alt="Bleck Engineering History"
            fill
            className="object-cover md:object-center"
            style={{ objectPosition: "30% center" }}
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 text-center">
          <div className="mb-6 md:mb-8 inline-block">
            <div className="flex items-center gap-2 md:gap-3 text-xs font-light tracking-[0.3em] text-white/80 uppercase">
              <div className="h-px w-6 md:w-8 bg-gradient-to-r from-transparent to-white/60"></div>
              Est. 1945
              <div className="h-px w-6 md:w-8 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
          </div>
          <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-7xl font-light text-white">
            Our History
          </h1>
          <p className="mx-auto max-w-3xl text-sm md:text-lg font-light leading-relaxed text-white/90 px-2">
            Founded in 1945 by Henry Bleck and his son John, Bleck Engineering
            has been a family-run firm for over 80 years, known for personalized
            service, technical excellence, and integrity.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-8 py-24 space-y-40">
        {/* Section 1: The Origins */}
        <section className="space-y-12">
          <div className="space-y-8 max-w-3xl">
            <h2 className="text-4xl font-light text-gray-900">
              <span className="block text-[#893002] text-lg font-medium tracking-wider uppercase mb-2">
                The Origins
              </span>
              A Foundation in Engineering
            </h2>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Long before the firm was officially established, Henry Bleck was
              already distinguishing himself in the field. His journey began at
              Marquette University, where he was an active member of the Sigma
              Phi engineering fraternity in 1921. These early years laid the
              academic and professional groundwork for what would eventually
              become a multi-generational legacy.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 max-w-2xl">
            <figure className="relative aspect-[3/4] w-full bg-zinc-100 rounded-sm overflow-hidden shadow-sm transform translate-y-8">
              <Image
                src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/Henry%20Bleck%20Senior%20Picture.jpg"
                alt="Henry Bleck Senior Picture"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-2 text-xs text-gray-600 text-center">
                Henry Bleck
              </div>
            </figure>
            <figure className="relative aspect-[3/4] w-full bg-zinc-100 rounded-sm overflow-hidden shadow-sm transform -translate-y-8">
              <Image
                src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/Henry%20Bleck%201921%20Sigma%20Phi.jpg"
                alt="Henry Bleck with Sigma Phi Engineering Fraternity, 1921"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-2 text-xs text-gray-600 text-center">
                Sigma Phi, 1921
              </div>
            </figure>
          </div>
        </section>

        {/* Section 2: The Partnership */}
        <section className="space-y-12">
          <div className="space-y-8 max-w-3xl">
            <h2 className="text-4xl font-light text-gray-900">
              <span className="block text-[#893002] text-lg font-medium tracking-wider uppercase mb-2">
                1945
              </span>
              A Father & Son Partnership
            </h2>
            <div className="space-y-4 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                In 1945, Henry Bleck and his son John (Jack) founded Bleck
                Engineering in Waukegan. This photograph captures the two
                founders together, that marked the beginning of a company built
                on integrity, precision, and family values.
              </p>
              <p>
                Their partnership established the core principles that continue
                to guide us today. It was more than just a business; it was a
                commitment to the community and to excellence in every project
                they undertook.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] w-full max-w-4xl bg-zinc-100 rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/jack-henry.jpg"
              alt="Founders Henry Bleck and John (Jack) Bleck"
              fill
              className="object-contain p-4"
            />
          </div>
        </section>

        {/* Section 3: A Look Back */}
        <section className="space-y-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              A Look Back
            </h2>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              These photographs capture moments from our past—snapshots of the
              people and work that have shaped Bleck Engineering over the
              decades. There's a deep nostalgia in looking back at where we've
              been, seeing the faces of those who built this company, and
              remembering the dedication that has carried us forward through the
              years.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
            {/* Old Surveyor */}
            <div className="space-y-4 group">
              <div className="relative aspect-[4/5] bg-zinc-100 rounded-sm overflow-hidden shadow-sm transition-transform duration-500 hover:-translate-y-2">
                <Image
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/Surveyor.jpeg"
                  alt="Early surveying work"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="text-sm text-gray-500 font-light text-center">
                Early days in the field
              </p>
            </div>

            {/* Jack measuring */}
            <div className="space-y-4 group lg:mt-12">
              <div className="relative aspect-[4/5] bg-zinc-100 rounded-sm overflow-hidden shadow-sm transition-transform duration-500 hover:-translate-y-2">
                <Image
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/jack-surveying.jpg"
                  alt="Jack Bleck measuring a drain"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="text-sm text-gray-500 font-light text-center">
                Jack Bleck measuring a drain
              </p>
            </div>

            {/* Jack Surveying 2 */}
            <div className="space-y-4 group">
              <div className="relative aspect-[4/5] bg-zinc-100 rounded-sm overflow-hidden shadow-sm transition-transform duration-500 hover:-translate-y-2">
                <Image
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/jack-surveying-2.jpg"
                  alt="Jack Bleck surveying"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="text-sm text-gray-500 font-light text-center">
                Jack Bleck with equipment
              </p>
            </div>

            {/* Bill Surveying */}
            <div className="space-y-4 group lg:mt-12">
              <div className="relative aspect-[4/5] bg-zinc-100 rounded-sm overflow-hidden shadow-sm transition-transform duration-500 hover:-translate-y-2">
                <Image
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/Bill-surveying.jpg"
                  alt="Bill Bleck surveying"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="text-sm text-gray-500 font-light text-center">
                Bill Bleck continuing the tradition
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Family & Future */}
        <section className="relative overflow-hidden rounded-sm bg-zinc-50 p-8 md:p-12 lg:p-24">
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-8">
              <Award className="w-12 h-12 text-[#893002] mx-auto opacity-50" />
              <h2 className="text-3xl font-light text-gray-900">
                A Lasting Family Legacy
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg max-w-4xl mx-auto text-left">
              <p>
                What began with Henry and Jack grew into a robust family
                enterprise. Jack's four sons—
                <a
                  href="/people/william-j-bleck/"
                  className="text-[#893002] hover:underline"
                >
                  William (Bill)
                </a>
                ,{" "}
                <a
                  href="/people/jack-r-bleck/"
                  className="text-[#893002] hover:underline"
                >
                  Jack R.
                </a>
                ,{" "}
                <a
                  href="/people/michael-g-bleck/"
                  className="text-[#893002] hover:underline"
                >
                  Michael
                </a>
                , and{" "}
                <a
                  href="/people/patrick-j-bleck/"
                  className="text-[#893002] hover:underline"
                >
                  Patrick
                </a>
                —all played a role in carrying the torch forward.
              </p>
              <p>
                Today, that legacy is in the hands of the next generation, led
                by{" "}
                <a
                  href="/people/matthew-g-bleck/"
                  className="text-[#893002] hover:underline"
                >
                  Matthew G. Bleck
                </a>
                . While the faces and tools change, the spirit of Bleck
                Engineering remains timeless: honoring our history while
                building for the future.
              </p>
            </div>

            {/* Photos */}
            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              {/* Photo of the four brothers */}
              <div>
                <figure className="relative w-full bg-zinc-100 rounded-sm overflow-hidden shadow-md p-2">
                  <Image
                    src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/1964%20Mike%20with%20Pat%20Bill%20Skip.JPG"
                    alt="The four Bleck brothers as children: Mike, Pat, Bill, and Skip, 1964"
                    width={500}
                    height={700}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </figure>
                <p className="text-sm text-gray-500 font-light text-center mt-4">
                  The four brothers, 1964
                </p>
              </div>

              {/* Three generations photo */}
              <div>
                <figure className="relative w-full bg-zinc-100 rounded-sm overflow-hidden shadow-md p-2">
                  <Image
                    src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/2003-12-24%20Grandpa%20Jack%20Dad%20Matt.JPG"
                    alt="Three generations: Jack, Mike, and Matt, 2003"
                    width={500}
                    height={700}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </figure>
                <p className="text-sm text-gray-500 font-light text-center mt-4">
                  Three generations: Jack, Mike, and Matt, 2003
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
