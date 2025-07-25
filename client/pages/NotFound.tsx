import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-icreative-purple mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold text-icreative-purple mb-6 font-roboto">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. The page
              might have been moved or doesn't exist.
            </p>

            <div className="space-y-4">
              <Link
                to="/"
                className="inline-block bg-icreative-green text-black font-bold text-lg px-8 py-3 rounded-2xl hover:bg-opacity-90 transition-colors mr-4"
              >
                Go Home
              </Link>

              <Link
                to="/programs"
                className="inline-block bg-icreative-purple text-white font-bold text-lg px-8 py-3 rounded-2xl hover:bg-opacity-90 transition-colors"
              >
                View Programs
              </Link>
            </div>

            <div className="mt-12 bg-icreative-light-pink rounded-2xl p-8">
              <h3 className="text-xl font-bold text-icreative-purple mb-4">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4">
                If you think this is an error, please contact us and we'll help
                you find what you're looking for.
              </p>
              <Link
                to="/register"
                className="inline-block bg-icreative-magenta text-white font-medium text-base px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
