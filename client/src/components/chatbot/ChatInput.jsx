import { useRef, useState } from "react";
import { ArrowUp, Mic } from "lucide-react";

const MAX_HEIGHT = 100;

const ChatInput = ({ onSend, disabled }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const resize = (el) => {
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT)}px`;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    resize(e.target);
  };

  const submit = () => {
    if (!value.trim() || disabled) return;

    onSend(value);
    setValue("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="border-t border-gray-100 bg-white px-3 py-3">
      <div className="flex items-end gap-1 rounded-3xl border border-gray-200 bg-gray-50 px-3 py-1.5">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Message Waves AI Agent..."
          disabled={disabled}
          className="max-h-[100px] flex-1 resize-none bg-transparent px-1 py-1.5 text-[13.5px] text-gray-800 placeholder:text-gray-400 outline-none disabled:opacity-50"
        />

        <button
          type="button"
          aria-label="Voice input"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-600"
        >
          <Mic size={16} strokeWidth={1.75} />
        </button>

        <button
          type="button"
          onClick={submit}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-200 hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          <ArrowUp size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
