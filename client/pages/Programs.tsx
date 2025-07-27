import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";

const programs = [
  {
    title: "Cognitive Math",
    imageSrc:
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=550&h=370&fit=crop&auto=format",
    imageAlt: "Cognitive Math Program",
    tags: [
      "Hands-on Math Activities",
      "Applied math in everyday situations",
      "Logic puzzles & brainy games",
    ],
  },
  {
    title: "English Language Arts (ELA)",
    imageSrc:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=550&h=370&fit=crop&auto=format",
    imageAlt: "English Language Arts Program",
    tags: [
      "Creative writing and storytelling",
      "Grammar games and Vocabulary building",
      "Reading comprehension with interactive exercises",
    ],
  },
  {
    title: "Abacus",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets%2F4dea029619d64c5c95c3070ae0fffe0b%2F460004ba680a4abf941c2500c559e0a8?format=webp&width=800",
    imageAlt: "Abacus Program",
    tags: [
      "Mental Math Mastery",
      "Boosts Concentration and Memory",
      "Builds Confidence and Academic Readiness",
    ],
  },
  {
    title: "CogAT",
    imageSrc:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=550&h=370&fit=crop&auto=format",
    imageAlt: "CogAT Program",
    tags: [
      "Sharpens Logical and Abstract Thinking",
      "Prepares for gifted and talented testing",
      "Encourages Cognitive Flexibility",
    ],
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Header */}
      <section className="py-8 sm:py-16 bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-icreative-purple mb-8 font-roboto">
            Our Core Offerings
          </h1>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-8 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                imageSrc={program.imageSrc}
                imageAlt={program.imageAlt}
                tags={program.tags}
              />
            ))}
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
