import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-icreative-light-pink">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-icreative-purple font-roboto leading-tight">
                Welcome to iCreative Learning
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-icreative-purple font-roboto text-right">
                -Where Fun Meets Fundamentals
              </h2>

              <p className="text-xl lg:text-2xl text-black font-roboto text-center">
                At ICreative Learning, we transform traditional Math and ELA
                education into an exciting and engaging adventure. Our
                after-school enrichment programs are designed to:
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <span className="bg-icreative-purple text-white px-4 py-2 rounded-xl text-base">
                  Improve Academic Skills
                </span>
                <span className="bg-icreative-purple text-white px-4 py-2 rounded-xl text-base">
                  Build Confidence
                </span>
                <span className="bg-icreative-purple text-white px-4 py-2 rounded-xl text-base">
                  Spark A Love for Learning
                </span>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop&auto=format"
                alt="Lovely little girl with a book pointing up"
                className="w-full max-w-sm h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-icreative-green text-black font-bold text-base rounded-3xl hover:bg-opacity-90 transition-colors shadow-lg shadow-white/50"
            >
              Book Your Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-icreative-purple mb-6 font-roboto">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe every child has unlimited potential. Our mission is
                to unlock that potential through innovative, research-backed
                educational programs that make learning both effective and
                enjoyable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By combining cognitive development with academic excellence, we
                prepare students not just for tests, but for life-long success
                in learning and problem-solving.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=400&fit=crop&auto=format"
                alt="Students learning together"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-icreative-light-pink">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-icreative-purple mb-4 font-roboto">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything we do is guided by our core values that put students
              first.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-icreative-purple"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-icreative-purple mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we do, from
                curriculum design to student support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-icreative-purple"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-icreative-purple mb-3">
                Care
              </h3>
              <p className="text-gray-600">
                Every child is unique and deserves personalized attention and
                support to reach their full potential.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-icreative-purple"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-icreative-purple mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously explore new ways to make learning more
                effective, engaging, and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-icreative-purple mb-4 font-roboto">
              Meet Our Expert Educators
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our dedicated team of passionate educators brings years of
              experience and genuine care for every student's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format"
                alt="Teacher"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-icreative-purple mb-2">
                Ms. Sarah Chen
              </h3>
              <p className="text-gray-600 mb-2">Lead Math Instructor</p>
              <p className="text-sm text-gray-500">
                15+ years of experience in elementary mathematics education with
                a focus on cognitive development.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&auto=format"
                alt="Teacher"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-icreative-purple mb-2">
                Ms. Emily Rodriguez
              </h3>
              <p className="text-gray-600 mb-2">ELA Specialist</p>
              <p className="text-sm text-gray-500">
                Masters in Educational Psychology with expertise in creative
                writing and reading comprehension.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format"
                alt="Teacher"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-icreative-purple mb-2">
                Mr. David Kim
              </h3>
              <p className="text-gray-600 mb-2">CogAT Instructor</p>
              <p className="text-sm text-gray-500">
                Certified in gifted education with specialization in cognitive
                abilities testing and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
