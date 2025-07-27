import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-icreative-purple mb-8 font-roboto">
            Shopping Cart
          </h1>

          <div className="bg-icreative-light-pink rounded-2xl p-12 max-w-2xl mx-auto">
            <svg
              className="w-24 h-24 text-icreative-purple mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>

            <h2 className="text-2xl font-bold text-icreative-purple mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Start by exploring our programs and adding items to your cart.
            </p>

            <Link
              to="/programs"
              className="inline-block bg-icreative-green text-black font-bold text-lg px-8 py-3 rounded-2xl hover:bg-opacity-90 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
