const LegalHero = ({ title, description }) => {
  return (
    <section className="pt-36 pb-14">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          {title}
        </h1>

        <p className="text-lg text-neutral-600">
          {description}
        </p>
      </div>
    </section>
  );
};

export default LegalHero;