import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-6 pb-20">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Hello,</h1>
            <p className="text-gray-400 italic">vous parlez français ?</p>
          </div>
          <Button className="bg-[#2C5F9E] hover:bg-[#234b7e] text-white font-semibold py-2 px-6 rounded shadow-sm">
            Contact me
          </Button>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
          <p>
            I am <span className="font-semibold text-[#2C5F9E]">Sébastien Saunier</span>, and I can help you start your business, build your product, get your first customers and grow a technical team. As a non-technical founder, you struggle with translating your vision into working software. I can be your <span className="font-bold text-gray-900">interim CTO</span>.
          </p>

          <p>
            On the product side, I will work with you using <span className="font-semibold text-[#2C5F9E]">Lean Startup</span> methodologies to reach the product/market fit. On the engineering side, I will layout the system architecture and get you on the right track with appropriate technology choices.
          </p>

          <p>
            Depending on where you are, I can implement <span className="font-semibold">agile</span> (Scrum) and <span className="font-semibold">best practices</span> (TDD, Continous Integration) in your existing team or contractors. This is very important especially if you are feeling lost, not knowing who's doing what, and when features will be released.
          </p>

          <p>
            My tool belt: <span className="font-semibold text-[#2C5F9E]">Ruby on Rails</span>, GitHub, a Macbook Pro, Sublime and a lot of command line.
          </p>

          <p>
            Interested? Here's my <a href="#" className="text-[#2C5F9E] hover:underline">resume</a>, and <a href="#" className="text-[#2C5F9E] hover:underline">contact me</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
