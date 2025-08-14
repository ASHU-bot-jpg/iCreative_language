import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-icreative-light-pink">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-icreative-purple font-roboto leading-tight">
                Building bright futures, One child at a time
              </h1>

              <p className="text-xl lg:text-2xl text-black font-roboto text-center mt-6 -ml-1 px-3.5">
                At iCreative Learning, we believe that the early years of
                learning lay the foundation for a lifetime of success. That's
                why our after-school enrichment program for Grades 1–5 is
                thoughtfully designed to strengthen core skills in Math and
                English Language Arts (ELA) — not just for the present, but to
                set your child up for excellence in middle school, high school,
                and beyond.
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
                src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F963a8dc1af974c21b0eea8fef96024f2"
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
                src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F207fa1fe890448b0bab08c6c477ca4cd"
                alt="Students learning together"
                className="w-full h-66 object-cover rounded-2xl shadow-lg"
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
                src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F50cd460d113f444195bd8d947322c08e"
                alt="Teacher"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-icreative-purple mb-2">
                Ms. Nandita Mishra
              </h3>
              <p className="text-sm text-gray-500">
                Hi! I have done Master's degree in Psychology. I am board
                certified teacher working with elementary students for the last
                13 years. I'm part of iCreative Learning for the last 3 years!
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F8b0275fd07f24b09b0d9e4980f00203f"
                alt="Teacher"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-icreative-purple mb-2">
                Ms. Santhoshi Kumar
              </h3>
              <p className="text-sm text-gray-500">
                Certified early childhood educator with 8 years of Montessori
                experience and 6 years at iCreative Learning, passionate about
                teaching young children and nurturing their curiosity to foster
                lifelong learning.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F4581441d34fa44e18bbcc89adbb93d62"
                alt="Teacher"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-icreative-purple mb-2">
                Ms. Bhagya
              </h3>
              <p className="text-sm text-gray-500">
                With a Diploma in Elementary Teacher Education, I am a board
                certified Elementary Teacher. I have been working as a
                Mathematics teacher for Middle School students at the Public
                School for the past three years and have been part of iCreative
                Learning for the past year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
