import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-icreative-purple">
                <span className="text-icreative-green">i</span>Creative Learning
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-xl font-normal ${
                isActive("/")
                  ? "text-icreative-purple"
                  : "text-black hover:text-icreative-purple"
              }`}
            >
              Home
            </Link>
            <Link
              to="/programs"
              className={`px-3 py-2 text-xl font-normal ${
                isActive("/programs")
                  ? "text-icreative-purple"
                  : "text-black hover:text-icreative-purple"
              }`}
            >
              Programs
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-xl font-normal ${
                isActive("/about")
                  ? "text-icreative-purple"
                  : "text-black hover:text-icreative-purple"
              }`}
            >
              About
            </Link>
            <Link
              to="/cart"
              className={`px-3 py-2 text-xl font-normal flex items-center gap-2 ${
                isActive("/cart")
                  ? "text-icreative-purple"
                  : "text-black hover:text-icreative-purple"
              }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 19 19"
                fill="none"
                className="w-5 h-5"
              >
                <path
                  d="M5.60156 18.5326C5.0974 18.5326 4.6658 18.353 4.30677 17.994C3.94774 17.635 3.76823 17.2034 3.76823 16.6992C3.76823 16.1951 3.94774 15.7635 4.30677 15.4044C4.6658 15.0454 5.0974 14.8659 5.60156 14.8659C6.10573 14.8659 6.53733 15.0454 6.89635 15.4044C7.25538 15.7635 7.4349 16.1951 7.4349 16.6992C7.4349 17.2034 7.25538 17.635 6.89635 17.994C6.53733 18.353 6.10573 18.5326 5.60156 18.5326ZM14.7682 18.5326C14.2641 18.5326 13.8325 18.353 13.4734 17.994C13.1144 17.635 12.9349 17.2034 12.9349 16.6992C12.9349 16.1951 13.1144 15.7635 13.4734 15.4044C13.8325 15.0454 14.2641 14.8659 14.7682 14.8659C15.2724 14.8659 15.704 15.0454 16.063 15.4044C16.422 15.7635 16.6016 16.1951 16.6016 16.6992C16.6016 17.2034 16.422 17.635 16.063 17.994C15.704 18.353 15.2724 18.5326 14.7682 18.5326ZM4.8224 3.86589L7.0224 8.44922H13.4391L15.9599 3.86589H4.8224ZM3.95156 2.03255H17.4724C17.8238 2.03255 18.0911 2.18915 18.2745 2.50234C18.4578 2.81554 18.4655 3.13255 18.2974 3.45339L15.0432 9.32005C14.8752 9.62561 14.6498 9.86241 14.3672 10.0305C14.0845 10.1985 13.7752 10.2826 13.4391 10.2826H6.6099L5.60156 12.1159H16.6016V13.9492H5.60156C4.91406 13.9492 4.39462 13.6475 4.04323 13.044C3.69184 12.4405 3.67656 11.8409 3.9974 11.2451L5.2349 8.99922L1.9349 2.03255H0.101562V0.199219H3.08073L3.95156 2.03255Z"
                  fill="currentColor"
                />
              </svg>
              Cart
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/register"
              className="bg-icreative-magenta text-white px-4 py-2 rounded-lg text-base font-normal hover:bg-opacity-90 transition-colors"
            >
              Schedule a Free Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black p-2"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-4">
              <Link
                to="/"
                className="block px-4 py-2 text-base font-bold text-black hover:text-icreative-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/programs"
                className="block px-4 py-2 text-base font-bold text-black hover:text-icreative-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-base font-bold text-black hover:text-icreative-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/cart"
                className="block px-4 py-2 text-base font-bold text-black hover:text-icreative-purple flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 19 19"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    d="M5.60156 18.5326C5.0974 18.5326 4.6658 18.353 4.30677 17.994C3.94774 17.635 3.76823 17.2034 3.76823 16.6992C3.76823 16.1951 3.94774 15.7635 4.30677 15.4044C4.6658 15.0454 5.0974 14.8659 5.60156 14.8659C6.10573 14.8659 6.53733 15.0454 6.89635 15.4044C7.25538 15.7635 7.4349 16.1951 7.4349 16.6992C7.4349 17.2034 7.25538 17.635 6.89635 17.994C6.53733 18.353 6.10573 18.5326 5.60156 18.5326ZM14.7682 18.5326C14.2641 18.5326 13.8325 18.353 13.4734 17.994C13.1144 17.635 12.9349 17.2034 12.9349 16.6992C12.9349 16.1951 13.1144 15.7635 13.4734 15.4044C13.8325 15.0454 14.2641 14.8659 14.7682 14.8659C15.2724 14.8659 15.704 15.0454 16.063 15.4044C16.422 15.7635 16.6016 16.1951 16.6016 16.6992C16.6016 17.2034 16.422 17.635 16.063 17.994C15.704 18.353 15.2724 18.5326 14.7682 18.5326ZM4.8224 3.86589L7.0224 8.44922H13.4391L15.9599 3.86589H4.8224ZM3.95156 2.03255H17.4724C17.8238 2.03255 18.0911 2.18915 18.2745 2.50234C18.4578 2.81554 18.4655 3.13255 18.2974 3.45339L15.0432 9.32005C14.8752 9.62561 14.6498 9.86241 14.3672 10.0305C14.0845 10.1985 13.7752 10.2826 13.4391 10.2826H6.6099L5.60156 12.1159H16.6016V13.9492H5.60156C4.91406 13.9492 4.39462 13.6475 4.04323 13.044C3.69184 12.4405 3.67656 11.8409 3.9974 11.2451L5.2349 8.99922L1.9349 2.03255H0.101562V0.199219H3.08073L3.95156 2.03255Z"
                    fill="currentColor"
                  />
                </svg>
                Cart
              </Link>
              <div className="px-4 pt-4">
                <Link
                  to="/register"
                  className="block w-full bg-icreative-magenta text-white text-center px-4 py-3 rounded-lg text-base font-normal hover:bg-opacity-90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule a Free Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
