import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, RotateCcw } from "lucide-react";
import SourceList from "./SourceList";

const TypingDots = () => (
  <div className="flex items-center gap-1 py-1">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

const ChatMessage = ({ message, onRetry }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";
  const isError = message.status === "error";
  const isPending = message.status === "pending" && !message.content;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group flex items-start gap-3 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <img
          src="/widget.png"
          alt=""
          className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-9 sm:w-9"
        />
      )}

      <div className={`flex max-w-[75%] flex-col ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-[20px] px-4 py-3 text-[13.5px] leading-[1.6] ${
            isUser
              ? "bg-red-600 text-white"
              : isError
                ? "border border-red-200 bg-red-50 text-red-700"
                : "bg-gray-100 text-gray-800"
          }`}
        >
          {isPending ? (
            <TypingDots />
          ) : (
            <p
              className={`whitespace-pre-wrap break-words ${
                isUser ? "text-white" : isError ? "text-red-700" : "text-gray-800"
              }`}
            >
              {message.content}
            </p>
          )}

          {!isUser && !isPending && <SourceList sources={message.sources} />}
        </div>

        {!isUser && !isPending && (
          <div className="mt-1 flex items-center gap-2 px-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {isError ? (
              <button
                type="button"
                onClick={() => onRetry(message.id)}
                className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-red-600 transition-colors"
              >
                <RotateCcw size={11} strokeWidth={1.75} />
                Retry
              </button>
            ) : (
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-700 transition-colors"
              >
                {copied ? <Check size={11} strokeWidth={1.75} /> : <Copy size={11} strokeWidth={1.75} />}
                {copied ? "Copied" : "Copy"}
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
