import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Payments() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-16 pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-icreative-purple mb-8 font-roboto">
            Student Fee Payment
          </h1>

          <div className="bg-icreative-light-pink rounded-2xl p-12 max-w-2xl mx-auto">
            <svg
              className="w-24 h-24 text-icreative-purple mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>

            <h2 className="text-2xl font-bold text-icreative-purple mb-4">
              Payment Portal
            </h2>
            <p className="text-gray-600 mb-8">
              Secure online payment portal for existing students. Please contact
              us for payment instructions or login to your student portal.
            </p>

            <div className="space-y-4">
              <Link
                to="/register"
                className="block bg-icreative-green text-black font-bold text-lg px-8 py-3 rounded-2xl hover:bg-opacity-90 transition-colors"
              >
                Contact for Payment Info
              </Link>

              <p className="text-sm text-gray-500">
                For questions about payments, please call +1 609-608-0245
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
