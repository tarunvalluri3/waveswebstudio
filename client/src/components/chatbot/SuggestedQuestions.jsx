import { motion } from "framer-motion";

const QUESTIONS = [
  "What services do you offer?",
  "How much does a website cost?",
  "Can I book a call?",
];

const SuggestedQuestions = ({ onSelect }) => (
  <div className="mt-3 flex flex-col items-end gap-2.5">
    {QUESTIONS.map((question, index) => (
      <motion.button
        key={question}
        type="button"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: index * 0.06 }}
        onClick={() => onSelect(question)}
        className="rounded-full border border-gray-200 bg-white px-4 py-2.5 text-[13px] text-gray-700 shadow-sm transition-all duration-200 hover:border-red-600/40 hover:bg-red-50 hover:text-gray-900"
      >
        {question}
      </motion.button>
    ))}
  </div>
);

export default SuggestedQuestions;
