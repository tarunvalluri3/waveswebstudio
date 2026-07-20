import { AnimatePresence, motion } from "framer-motion";
import { useChatContext } from "../../context/ChatContext";
import ChatWindow from "./ChatWindow";

const BASE_SHADOW = "0 12px 30px rgba(0,0,0,0.35), 0 0 22px 4px rgba(220,38,38,0.35)";
const HOVER_SHADOW = "0 12px 30px rgba(0,0,0,0.35), 0 0 32px 10px rgba(220,38,38,0.55)";

const ChatWidget = () => {
  const { isOpen, toggleOpen, hasUnread } = useChatContext();

  return (
    <>
      <AnimatePresence>{isOpen && <ChatWindow />}</AnimatePresence>

      <motion.button
        type="button"
        onClick={toggleOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        initial={{ boxShadow: BASE_SHADOW }}
        animate={{ scale: isOpen ? 1 : [1, 1.03, 1], boxShadow: BASE_SHADOW }}
        transition={{ duration: 10, repeat: isOpen ? 0 : Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06, boxShadow: HOVER_SHADOW, transition: { duration: 0.25, ease: "easeOut" } }}
        whileTap={{ scale: 0.95 }}
        style={{
          border: "1.5px solid rgba(255,255,255,0.08)",
          bottom: "max(24px, calc(env(safe-area-inset-bottom, 0px) + 12px))",
          right: "max(24px, calc(env(safe-area-inset-right, 0px) + 12px))",
        }}
        className="fixed z-50 h-[52px] w-[52px] shrink-0 cursor-pointer overflow-hidden rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16"
      >
        <img src="/widget.png" alt="Chat with Waves AI Agent" className="h-full w-full object-cover" />

        <AnimatePresence>
          {hasUnread && !isOpen && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-600"
            />
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatWidget;
