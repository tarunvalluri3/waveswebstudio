import { motion } from "framer-motion";
import { useChatContext } from "../../context/ChatContext";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  const { messages, isSending, sendMessage, retryMessage } = useChatContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white shadow-2xl shadow-black/20 sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[640px] sm:w-[400px] sm:rounded-[28px] sm:border sm:border-gray-100"
    >
      <ChatHeader />

      <ChatMessages messages={messages} onRetry={retryMessage} onSelectSuggestion={sendMessage} />

      <ChatInput onSend={sendMessage} disabled={isSending} />
    </motion.div>
  );
};

export default ChatWindow;
