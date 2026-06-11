import { useParams, Navigate } from "react-router-dom";

import legalContent from "../data/legalContent";

import LegalHero from "../components/legal/LegalHero";
import LegalSection from "../components/legal/LegalSection";

const LegalPage = () => {
  const { slug } = useParams();

  const page = legalContent[slug];

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <LegalHero
        title={page.title}
        description={page.description}
      />

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-sm text-neutral-500 mb-12">
            Last Updated: June 11, 2026
          </p>

          {page.sections.map(section => (
            <LegalSection
              key={section.title}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default LegalPage;