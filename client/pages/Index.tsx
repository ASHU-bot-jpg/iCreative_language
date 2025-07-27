import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-20 py-4 sm:py-8 pt-28">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-icreative-purple font-roboto leading-tight">
              Empowering Elementary Students Through Creative, Fun, and
              Effective Learning Programs.
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-roboto">
              Backed by Research, Theories of Learning, and Cognitive
              Psychology.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-icreative-green text-black font-bold text-sm sm:text-base rounded-3xl hover:bg-opacity-90 transition-colors shadow-lg shadow-white/50"
            >
              Book Your Free Assessment
            </Link>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop&auto=format"
                alt="Smiley kids in the main plan"
                className="w-full max-w-lg h-60 sm:h-80 object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-icreative-light-pink py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-16">
              <p className="text-xl lg:text-2xl text-icreative-purple font-roboto">
                At iCreative Learning, we blend creativity with curriculum to
                make Math and English Language Arts (ELA) exciting, enriching,
                and empowering for elementary school kids.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop&auto=format"
                alt="Innovation elements"
                className="w-full h-80 object-cover rounded-3xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-icreative-purple mb-8 font-roboto">
              Our Core Offerings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* CogAT */}
            <div className="bg-icreative-grey rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop&auto=format"
                alt="CogAT Program"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="text-center">
                <span className="inline-block bg-icreative-green text-black px-6 py-2 rounded-full font-normal text-base">
                  CogAT
                </span>
              </div>
            </div>

            {/* Cognitive Math */}
            <div className="bg-icreative-grey rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=300&h=200&fit=crop&auto=format"
                alt="Cognitive Math Program"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="text-center">
                <span className="inline-block bg-icreative-green text-black px-6 py-2 rounded-full font-normal text-base">
                  Cognitive Math
                </span>
              </div>
            </div>

            {/* ELA */}
            <div className="bg-icreative-grey rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&auto=format"
                alt="ELA Program"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="text-center">
                <span className="inline-block bg-icreative-green text-black px-6 py-2 rounded-full font-normal text-base">
                  ELA
                </span>
              </div>
            </div>

            {/* Abacus */}
            <div className="bg-icreative-grey rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F460004ba680a4abf941c2500c559e0a8?format=webp&width=800"
                alt="Abacus Program"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="text-center">
                <span className="inline-block bg-icreative-green text-black px-6 py-2 rounded-full font-normal text-base">
                  Abacus
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/programs"
              className="inline-flex items-center px-6 py-3 bg-icreative-green text-black font-bold text-base rounded-full hover:bg-opacity-90 transition-colors shadow-lg shadow-white/50"
            >
              Browse more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 8 12"
              >
                <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-icreative-light-pink">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-icreative-purple mb-4 font-roboto">
              Why Choose Us
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Our innovative approach to education combines personalized
              learning paths with engaging curriculum.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Focus on Cognitive Development */}
            <div className="bg-white/0 text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-icreative-magenta"
                  fill="currentColor"
                  viewBox="0 0 24 25"
                >
                  <path d="M12 22.2314C11.5667 22.2314 11.175 22.1273 10.825 21.9189C10.475 21.7106 10.2 21.4314 10 21.0814C9.45 21.0814 8.97917 20.8856 8.5875 20.4939C8.19583 20.1023 8 19.6314 8 19.0814V15.5314C7.01667 14.8814 6.22917 14.0231 5.6375 12.9564C5.04583 11.8898 4.75 10.7314 4.75 9.48145C4.75 7.46478 5.45417 5.75228 6.8625 4.34395C8.27083 2.93561 9.98333 2.23145 12 2.23145C14.0167 2.23145 15.7292 2.93561 17.1375 4.34395C18.5458 5.75228 19.25 7.46478 19.25 9.48145C19.25 10.7648 18.9542 11.9314 18.3625 12.9814C17.7708 14.0314 16.9833 14.8814 16 15.5314V19.0814C16 19.6314 15.8042 20.1023 15.4125 20.4939C15.0208 20.8856 14.55 21.0814 14 21.0814C13.8 21.4314 13.525 21.7106 13.175 21.9189C12.825 22.1273 12.4333 22.2314 12 22.2314ZM10 19.0814H14V18.1814H10V19.0814ZM10 17.1814H14V16.2314H10V17.1814ZM9.8 14.2314H11.25V11.5314L9.05 9.33145L10.1 8.28145L12 10.1814L13.9 8.28145L14.95 9.33145L12.75 11.5314V14.2314H14.2C15.1 13.7981 15.8333 13.1606 16.4 12.3189C16.9667 11.4773 17.25 10.5314 17.25 9.48145C17.25 8.01478 16.7417 6.77311 15.725 5.75645C14.7083 4.73978 13.4667 4.23145 12 4.23145C10.5333 4.23145 9.29167 4.73978 8.275 5.75645C7.25833 6.77311 6.75 8.01478 6.75 9.48145C6.75 10.5314 7.03333 11.4773 7.6 12.3189C8.16667 13.1606 8.9 13.7981 9.8 14.2314Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">
                Focus on Cognitive Development
              </h3>
              <p className="text-sm text-gray-600">
                We don't just teach subjects—we develop minds. Every session is
                designed to strengthen memory, attention, logical reasoning,
                critical thinking, and problem-solving skills.
              </p>
            </div>

            {/* Advanced Curriculum */}
            <div className="bg-white/0 text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-icreative-magenta"
                  fill="currentColor"
                  viewBox="0 0 24 25"
                >
                  <path d="M12 22.2314C11.5667 22.2314 11.175 22.1273 10.825 21.9189C10.475 21.7106 10.2 21.4314 10 21.0814C9.45 21.0814 8.97917 20.8856 8.5875 20.4939C8.19583 20.1023 8 19.6314 8 19.0814V15.5314C7.01667 14.8814 6.22917 14.0231 5.6375 12.9564C5.04583 11.8898 4.75 10.7314 4.75 9.48145C4.75 7.46478 5.45417 5.75228 6.8625 4.34395C8.27083 2.93561 9.98333 2.23145 12 2.23145C14.0167 2.23145 15.7292 2.93561 17.1375 4.34395C18.5458 5.75228 19.25 7.46478 19.25 9.48145C19.25 10.7648 18.9542 11.9314 18.3625 12.9814C17.7708 14.0314 16.9833 14.8814 16 15.5314V19.0814C16 19.6314 15.8042 20.1023 15.4125 20.4939C15.0208 20.8856 14.55 21.0814 14 21.0814C13.8 21.4314 13.525 21.7106 13.175 21.9189C12.825 22.1273 12.4333 22.2314 12 22.2314ZM10 19.0814H14V18.1814H10V19.0814ZM10 17.1814H14V16.2314H10V17.1814ZM9.8 14.2314H11.25V11.5314L9.05 9.33145L10.1 8.28145L12 10.1814L13.9 8.28145L14.95 9.33145L12.75 11.5314V14.2314H14.2C15.1 13.7981 15.8333 13.1606 16.4 12.3189C16.9667 11.4773 17.25 10.5314 17.25 9.48145C17.25 8.01478 16.7417 6.77311 15.725 5.75645C14.7083 4.73978 13.4667 4.23145 12 4.23145C10.5333 4.23145 9.29167 4.73978 8.275 5.75645C7.25833 6.77311 6.75 8.01478 6.75 9.48145C6.75 10.5314 7.03333 11.4773 7.6 12.3189C8.16667 13.1606 8.9 13.7981 9.8 14.2314Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">
                Advanced Curriculum that Inspires
              </h3>
              <p className="text-sm text-gray-600">
                We go beyond standard classroom instruction. Our Math and ELA
                programs teach concepts that are one to two grade levels ahead
                of public school curriculum.
              </p>
            </div>

            {/* Smart Fun */}
            <div className="bg-white/0 text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-icreative-magenta"
                  fill="currentColor"
                  viewBox="0 0 20 21"
                >
                  <path d="M5.8 20.2314H2C1.45 20.2314 0.979167 20.0356 0.5875 19.6439C0.195833 19.2523 0 18.7814 0 18.2314V14.4314C0.8 14.4314 1.5 14.1773 2.1 13.6689C2.7 13.1606 3 12.5148 3 11.7314C3 10.9481 2.7 10.3023 2.1 9.79395C1.5 9.28561 0.8 9.03145 0 9.03145V5.23145C0 4.68145 0.195833 4.21061 0.5875 3.81895C0.979167 3.42728 1.45 3.23145 2 3.23145H6C6 2.53145 6.24167 1.93978 6.725 1.45645C7.20833 0.973112 7.8 0.731445 8.5 0.731445C9.2 0.731445 9.79167 0.973112 10.275 1.45645C10.7583 1.93978 11 2.53145 11 3.23145H15C15.55 3.23145 16.0208 3.42728 16.4125 3.81895C16.8042 4.21061 17 4.68145 17 5.23145V9.23145C17.7 9.23145 18.2917 9.47311 18.775 9.95645C19.2583 10.4398 19.5 11.0314 19.5 11.7314C19.5 12.4314 19.2583 13.0231 18.775 13.5064C18.2917 13.9898 17.7 14.2314 17 14.2314V18.2314C17 18.7814 16.8042 19.2523 16.4125 19.6439C16.0208 20.0356 15.55 20.2314 15 20.2314H11.2C11.2 19.3981 10.9375 18.6898 10.4125 18.1064C9.8875 17.5231 9.25 17.2314 8.5 17.2314C7.75 17.2314 7.1125 17.5231 6.5875 18.1064C6.0625 18.6898 5.8 19.3981 5.8 20.2314ZM2 18.2314H4.125C4.525 17.1314 5.16667 16.3564 6.05 15.9064C6.93333 15.4564 7.75 15.2314 8.5 15.2314C9.25 15.2314 10.0667 15.4564 10.95 15.9064C11.8333 16.3564 12.475 17.1314 12.875 18.2314H15V12.2314H17C17.1333 12.2314 17.25 12.1814 17.35 12.0814C17.45 11.9814 17.5 11.8648 17.5 11.7314C17.5 11.5981 17.45 11.4814 17.35 11.3814C17.25 11.2814 17.1333 11.2314 17 11.2314H15V5.23145H9V3.23145C9 3.09811 8.95 2.98145 8.85 2.88145C8.75 2.78145 8.63333 2.73145 8.5 2.73145C8.36667 2.73145 8.25 2.78145 8.15 2.88145C8.05 2.98145 8 3.09811 8 3.23145V5.23145H2V7.43145C2.9 7.76478 3.625 8.32311 4.175 9.10645C4.725 9.88978 5 10.7648 5 11.7314C5 12.6814 4.725 13.5481 4.175 14.3314C3.625 15.1148 2.9 15.6814 2 16.0314V18.2314Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">
                Smart Fun That Sticks
              </h3>
              <p className="text-sm text-gray-600">
                By combining academic advancement with cognitive training and
                creativity, our students learn more, retain more, and enjoy the
                process.
              </p>
            </div>

            {/* Proven Results */}
            <div className="bg-white/0 text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-icreative-magenta"
                  fill="currentColor"
                  viewBox="0 0 24 25"
                >
                  <path d="M8.6 22.7314L6.7 19.5314L3.1 18.7314L3.45 15.0314L1 12.2314L3.45 9.43145L3.1 5.73145L6.7 4.93145L8.6 1.73145L12 3.18145L15.4 1.73145L17.3 4.93145L20.9 5.73145L20.55 9.43145L23 12.2314L20.55 15.0314L20.9 18.7314L17.3 19.5314L15.4 22.7314L12 21.2814L8.6 22.7314ZM9.45 20.1814L12 19.0814L14.6 20.1814L16 17.7814L18.75 17.1314L18.5 14.3314L20.35 12.2314L18.5 10.0814L18.75 7.28145L16 6.68145L14.55 4.28145L12 5.38145L9.4 4.28145L8 6.68145L5.25 7.28145L5.5 10.0814L3.65 12.2314L5.5 14.3314L5.25 17.1814L8 17.7814L9.45 20.1814ZM10.95 15.7814L16.6 10.1314L15.2 8.68145L10.95 12.9314L8.8 10.8314L7.4 12.2314L10.95 15.7814Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">
                Designed for Real Results
              </h3>
              <p className="text-sm text-gray-600">
                Parents see improved problem-solving skills, vocabulary, reading
                comprehension, and math confidence within weeks.
              </p>
            </div>

            {/* Experienced Educators */}
            <div className="bg-white/0 text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-icreative-magenta"
                  fill="currentColor"
                  viewBox="0 0 24 25"
                >
                  <path d="M1 20.2314V17.4314C1 16.8648 1.14583 16.3439 1.4375 15.8689C1.72917 15.3939 2.11667 15.0314 2.6 14.7814C3.63333 14.2648 4.68333 13.8773 5.75 13.6189C6.81667 13.3606 7.9 13.2314 9 13.2314C10.1 13.2314 11.1833 13.3606 12.25 13.6189C13.3167 13.8773 14.3667 14.2648 15.4 14.7814C15.8833 15.0314 16.2708 15.3939 16.5625 15.8689C16.8542 16.3439 17 16.8648 17 17.4314V20.2314H1ZM19 20.2314V17.2314C19 16.4981 18.7958 15.7939 18.3875 15.1189C17.9792 14.4439 17.4 13.8648 16.65 13.3814C17.5 13.4814 18.3 13.6523 19.05 13.8939C19.8 14.1356 20.5 14.4314 21.15 14.7814C21.75 15.1148 22.2083 15.4856 22.525 15.8939C22.8417 16.3023 23 16.7481 23 17.2314V20.2314H19ZM9 12.2314C7.9 12.2314 6.95833 11.8398 6.175 11.0564C5.39167 10.2731 5 9.33145 5 8.23145C5 7.13145 5.39167 6.18978 6.175 5.40645C6.95833 4.62311 7.9 4.23145 9 4.23145C10.1 4.23145 11.0417 4.62311 11.825 5.40645C12.6083 6.18978 13 7.13145 13 8.23145C13 9.33145 12.6083 10.2731 11.825 11.0564C11.0417 11.8398 10.1 12.2314 9 12.2314ZM19 8.23145C19 9.33145 18.6083 10.2731 17.825 11.0564C17.0417 11.8398 16.1 12.2314 15 12.2314C14.8167 12.2314 14.5833 12.2106 14.3 12.1689C14.0167 12.1273 13.7833 12.0814 13.6 12.0314C14.05 11.4981 14.3958 10.9064 14.6375 10.2564C14.8792 9.60645 15 8.93145 15 8.23145C15 7.53145 14.8792 6.85645 14.6375 6.20645C14.3958 5.55645 14.05 4.96478 13.6 4.43145C13.8333 4.34811 14.0667 4.29395 14.3 4.26895C14.5333 4.24395 14.7667 4.23145 15 4.23145C16.1 4.23145 17.0417 4.62311 17.825 5.40645C18.6083 6.18978 19 7.13145 19 8.23145ZM3 18.2314H15V17.4314C15 17.2481 14.9542 17.0814 14.8625 16.9314C14.7708 16.7814 14.65 16.6648 14.5 16.5814C13.6 16.1314 12.6917 15.7939 11.775 15.5689C10.8583 15.3439 9.93333 15.2314 9 15.2314C8.06667 15.2314 7.14167 15.3439 6.225 15.5689C5.30833 15.7939 4.4 16.1314 3.5 16.5814C3.35 16.6648 3.22917 16.7814 3.1375 16.9314C3.04583 17.0814 3 17.2481 3 17.4314V18.2314ZM9 10.2314C9.55 10.2314 10.0208 10.0356 10.4125 9.64395C10.8042 9.25228 11 8.78145 11 8.23145C11 7.68145 10.8042 7.21061 10.4125 6.81895C10.0208 6.42728 9.55 6.23145 9 6.23145C8.45 6.23145 7.97917 6.42728 7.5875 6.81895C7.19583 7.21061 7 7.68145 7 8.23145C7 8.78145 7.19583 8.75228 7.5875 9.14395C7.97917 10.0356 8.45 10.2314 9 10.2314Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">
                Experienced, Caring Educators
              </h3>
              <p className="text-sm text-gray-600">
                Our teachers are passionate about making a difference and use
                gentle, encouraging methods.
              </p>
            </div>

            {/* Small Group Classes */}
            <div className="bg-white/0 text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-icreative-pink rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-icreative-magenta"
                  fill="currentColor"
                  viewBox="0 0 22 17"
                >
                  <path d="M0 16.2314V12.2314C0 11.6648 0.195833 11.1898 0.5875 10.8064C0.979167 10.4231 1.45 10.2314 2 10.2314H5.275C5.60833 10.2314 5.925 10.3148 6.225 10.4814C6.525 10.6481 6.76667 10.8731 6.95 11.1564C7.43333 11.8064 8.02917 12.3148 8.7375 12.6814C9.44583 13.0481 10.2 13.2314 11 13.2314C11.8167 13.2314 12.5792 13.0481 13.2875 12.6814C13.9958 12.3148 14.5833 11.8064 15.05 11.1564C15.2667 10.8731 15.5208 10.6481 15.8125 10.4814C16.1042 10.3148 16.4083 10.2314 16.725 10.2314H20C20.5667 10.2314 21.0417 10.4231 21.425 10.8064C21.8083 11.1898 22 11.6648 22 12.2314V16.2314H15V13.9564C14.4167 14.3731 13.7875 14.6898 13.1125 14.9064C12.4375 15.1231 11.7333 15.2314 11 15.2314C10.2833 15.2314 9.58333 15.1189 8.9 14.8939C8.21667 14.6689 7.58333 14.3481 7 13.9314V16.2314H0ZM11 12.2314C10.3667 12.2314 9.76667 12.0856 9.2 11.7939C8.63333 11.5023 8.15833 11.0981 7.775 10.5814C7.49167 10.1648 7.1375 9.83561 6.7125 9.59395C6.2875 9.35228 5.825 9.23145 5.325 9.23145C5.69167 8.61478 6.46667 8.12728 7.65 7.76895C8.83333 7.41061 9.95 7.23145 11 7.23145C12.05 7.23145 13.1667 7.41061 14.35 7.76895C15.5333 8.12728 16.3083 8.61478 16.675 9.23145C16.1917 9.23145 15.7333 9.35228 15.3 9.59395C14.8667 9.83561 14.5083 10.1648 14.225 10.5814C13.8583 11.1148 13.3917 11.5231 12.825 11.8064C12.2583 12.0898 11.65 12.2314 11 12.2314ZM3 9.23145C2.16667 9.23145 1.45833 8.93978 0.875 8.35645C0.291667 7.77311 0 7.06478 0 6.23145C0 5.38145 0.291667 4.66895 0.875 4.09395C1.45833 3.51895 2.16667 3.23145 3 3.23145C3.85 3.23145 4.5625 3.51895 5.1375 4.09395C5.7125 4.66895 6 5.38145 6 6.23145C6 7.06478 5.7125 7.77311 5.1375 8.35645C4.5625 8.93978 3.85 9.23145 3 9.23145ZM19 9.23145C18.1667 9.23145 17.4583 8.93978 16.875 8.35645C16.2917 7.77311 16 7.06478 16 6.23145C16 5.38145 16.2917 4.66895 16.875 4.09395C17.4583 3.51895 18.1667 3.23145 19 3.23145C19.85 3.23145 20.5625 3.51895 21.1375 4.09395C21.7125 4.66895 22 5.38145 22 6.23145C22 7.06478 21.7125 7.77311 21.1375 8.35645C20.5625 8.93978 19.85 9.23145 19 9.23145ZM11 6.23145C10.1667 6.23145 9.45833 5.93978 8.875 5.35645C8.29167 4.77311 8 4.06478 8 3.23145C8 2.38145 8.29167 1.66895 8.875 1.09395C9.45833 0.518945 10.1667 0.231445 11 0.231445C11.85 0.231445 12.5625 0.518945 13.1375 1.09395C13.7125 1.66895 14 2.38145 14 3.23145C14 4.06478 13.7125 4.77311 13.1375 5.35645C12.5625 5.93978 11.85 6.23145 11 6.23145Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">
                Personalized Small Group Classes
              </h3>
              <p className="text-sm text-gray-600">
                We keep our class sizes small to give every child the attention
                they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-icreative-purple font-roboto">
              What Parents Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-lg border-t-4 border-t-purple-400">
              <p className="text-xs text-black mb-4 text-justify leading-relaxed">
                To all the teachers at iCreative Learning: Thank you for
                providing such wonderful learning experience for Reyansh. It's
                been 3 years now since he joined iCreative Learning programs and
                we have noticed a lot of improvements in his skill set, earlier
                at Math and now in Language Art. He has grown more confident in
                problem solving and tackling challenges. One specific example
                that stands out is he has started doing his school homework and
                the research related to it independently which wasn't the case
                earlier :) We do help sometimes but there is a significant
                change in him! We appreciate the dedication and effort you all
                put in and we look forward to seeing Reyansh continue to grow.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-black">Aarti</h4>
                <p className="text-xs text-gray-500">Reyansh's Mom</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-lg border-t-4 border-t-purple-400">
              <p className="text-xs text-black mb-4 text-justify leading-relaxed">
                We've had a wonderful experience with your program! Shaunak has
                shown great improvement in writing and comprehension, thanks to
                Ms. Haripriya and Ms. Arpana for an accommodating approach and
                personalized guidance. He's become more focused, taking the time
                to read carefully instead of rushing to answers. His confidence
                has also grown—he was especially proud when he wrote more words
                than his classmates! Thank you for making learning such a
                positive and enriching experience.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-black">Nikita</h4>
                <p className="text-xs text-gray-500">Shaunak's Mom</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-lg border-t-4 border-t-purple-400">
              <p className="text-xs text-black mb-4 text-justify leading-relaxed">
                Iraa is having fun learning in her class. Teachers are very nice
                and supportive. I can see improvement in her academics. Thank
                you ICreative Learning.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-black">Pavani</h4>
                <p className="text-xs text-gray-500">Iraa's Mom</p>
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
            Join our community of successful learners and watch your child's
            confidence and abilities soar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-icreative-purple font-medium text-base rounded-3xl hover:bg-gray-100 transition-colors"
            >
              Book Your Free Assessment
            </Link>
            <Link
              to="/payments"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-icreative-purple font-medium text-base rounded-3xl hover:bg-gray-100 transition-colors"
            >
              Pay Student Fees
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
