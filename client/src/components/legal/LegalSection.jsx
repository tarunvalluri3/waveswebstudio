const LegalSection = ({ title, content }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <p className="text-neutral-700 leading-8 whitespace-pre-line">
        {content}
      </p>
    </div>
  );
};

export default LegalSection;