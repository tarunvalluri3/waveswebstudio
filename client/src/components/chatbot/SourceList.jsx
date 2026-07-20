import { FileText, Globe } from "lucide-react";

const SourceList = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {sources.map((source) => (
        <span
          key={`${source.type}-${source.name}`}
          className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[10px] text-gray-500"
        >
          {source.type === "website" ? (
            <Globe size={11} strokeWidth={1.75} />
          ) : (
            <FileText size={11} strokeWidth={1.75} />
          )}
          {source.name}
        </span>
      ))}
    </div>
  );
};

export default SourceList;
