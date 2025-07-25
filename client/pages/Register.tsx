import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    childName: "",
    phoneNumber: "",
    emailAddress: "",
    parentName: "",
    childGrade: "",
    programs: [] as string[],
    hearAbout: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProgramChange = (program: string) => {
    setFormData(prev => ({
      ...prev,
      programs: prev.programs.includes(program)
        ? prev.programs.filter(p => p !== program)
        : [...prev.programs, program]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for registering! We'll contact you soon to schedule your free assessment.");
  };

  return (
    <div className="min-h-screen bg-icreative-pink">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-icreative-purple mb-4 font-roboto">
            Registration
          </h1>
          <p className="text-2xl lg:text-3xl text-black font-roboto">
            Register here to receive iCreative Learning Program Curriculum and Demo Class
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-20">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Child's Name */}
            <div>
              <label className="block text-2xl text-black mb-2 font-roboto">
                Child's Name?
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleInputChange}
                placeholder="Text Here"
                className="w-full px-4 py-3 border border-black rounded-lg bg-icreative-grey text-2xl placeholder-black focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-2xl text-black mb-2 font-roboto">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Text Here"
                className="w-full px-4 py-3 border border-black rounded-lg bg-icreative-grey text-2xl placeholder-black focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-2xl text-black mb-2 font-roboto">
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                placeholder="Text Here"
                className="w-full px-4 py-3 border border-black rounded-lg bg-icreative-grey text-2xl placeholder-black focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                required
              />
            </div>

            {/* Parent's Full Name */}
            <div>
              <label className="block text-2xl text-black mb-2 font-roboto">
                Parent's Full Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                placeholder="Text Here"
                className="w-full px-4 py-3 border border-black rounded-lg bg-icreative-grey text-2xl placeholder-black focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                required
              />
            </div>

            {/* Child's Grade */}
            <div>
              <label className="block text-2xl text-black mb-2 font-roboto">
                Child's Grade?
              </label>
              <input
                type="text"
                name="childGrade"
                value={formData.childGrade}
                onChange={handleInputChange}
                placeholder="Text Here"
                className="w-full px-4 py-3 border border-black rounded-lg bg-icreative-grey text-2xl placeholder-black focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                required
              />
            </div>

            {/* Select Program */}
            <div>
              <label className="block text-2xl text-black mb-4 font-roboto">
                Select the program?
              </label>
              <div className="space-y-4">
                {[
                  "Abacus Arithmetic (Grades 1-5)",
                  "Language Arts (Grades 1-5)",
                  "Math Program (Grades 1-5)"
                ].map(program => (
                  <label key={program} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-8 h-8 rounded border-2 border-gray-400 focus:ring-icreative-purple"
                      checked={formData.programs.includes(program)}
                      onChange={() => handleProgramChange(program)}
                    />
                    <span className="text-2xl text-black font-roboto">{program}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* How Did You Hear About Us */}
            <div>
              <label className="block text-2xl text-black mb-2 font-roboto">
                How Did you hear about us?
              </label>
              <select
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-black rounded-lg bg-white text-2xl focus:outline-none focus:ring-2 focus:ring-icreative-purple"
                required
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="friend-referral">Friend Referral</option>
                <option value="school">School</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Disclaimer */}
            <div className="text-center py-8">
              <p className="text-2xl text-black font-roboto max-w-4xl mx-auto">
                By submitting your information, you're giving us permission to email you. You may unsubscribe at any time.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-icreative-green text-black font-bold text-xl px-8 py-4 rounded-2xl hover:bg-opacity-90 transition-colors shadow-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
