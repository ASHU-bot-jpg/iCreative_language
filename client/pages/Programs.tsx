import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-icreative-purple mb-8 font-roboto">
            Our Core Offerings
          </h1>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Cognitive Math */}
            <div className="bg-icreative-grey rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=550&h=370&fit=crop&auto=format"
                alt="Cognitive Math Program"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-icreative-magenta text-white px-6 py-2 rounded-xl font-bold text-xl">
                    Cognitive Math
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Hands-on Math Activities
                  </span>
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Applied math in everyday situations
                  </span>
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Logic puzzles & brainy games
                  </span>
                </div>
                <Link
                  to="/register"
                  className="inline-block bg-icreative-green text-black font-bold text-xl px-8 py-3 rounded-2xl hover:bg-opacity-90 transition-colors"
                >
                  Register Here
                </Link>
              </div>
            </div>

            {/* English Language Arts (ELA) */}
            <div className="bg-icreative-grey rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=550&h=370&fit=crop&auto=format"
                alt="English Language Arts Program"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-icreative-magenta text-white px-6 py-2 rounded-xl font-bold text-xl">
                    English Language Arts (ELA)
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Creative writing and storytelling
                  </span>
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Grammar games and Vocabulary building
                  </span>
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Reading comprehension with interactive exercises
                  </span>
                </div>
                <Link
                  to="/register"
                  className="inline-block bg-icreative-green text-black font-bold text-xl px-8 py-3 rounded-2xl hover:bg-opacity-90 transition-colors"
                >
                  Register Here
                </Link>
              </div>
            </div>

            {/* Abacus */}
            <div className="bg-icreative-grey rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=550&h=370&fit=crop&auto=format"
                alt="Abacus Program"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-icreative-magenta text-white px-6 py-2 rounded-xl font-bold text-xl">
                    Abacus
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Mental Math Mastery
                  </span>
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Boosts Concentration and Memory
                  </span>
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Builds Confidence and Academic Readiness
                  </span>
                </div>
                <Link
                  to="/register"
                  className="inline-block bg-icreative-green text-black font-bold text-xl px-8 py-3 rounded-2xl hover:bg-opacity-90 transition-colors"
                >
                  Register Here
                </Link>
              </div>
            </div>

            {/* CogAT */}
            <div className="bg-icreative-grey rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=550&h=370&fit=crop&auto=format"
                alt="CogAT Program"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-icreative-magenta text-white px-6 py-2 rounded-xl font-bold text-xl">
                    CogAT
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Sharpens Logical and Abstract Thinking
                  </span>
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Prepares for gifted and talented testing
                  </span>
                  <span className="bg-icreative-purple text-white px-4 py-2 rounded-lg text-sm">
                    Encourages Cognitive Flexibility
                  </span>
                </div>
                <Link
                  to="/register"
                  className="inline-block bg-icreative-green text-black font-bold text-xl px-8 py-3 rounded-2xl hover:bg-opacity-90 transition-colors"
                >
                  Register Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-icreative-purple">
        <div className="max-w-5xl mx-auto px-4 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-roboto">
            Ready to Start Your Child's Learning Journey?
          </h2>
          <p className="text-base text-white mb-8 max-w-3xl mx-auto font-roboto">
            Join our community of successful learners and watch your child's confidence and abilities soar.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-icreative-purple font-medium text-base rounded-3xl hover:bg-gray-100 transition-colors"
          >
            Book Your Free Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
