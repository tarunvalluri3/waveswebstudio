import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { History, MoreHorizontal, SquarePen, X, XCircle } from "lucide-react";
import { useChatContext } from "../../context/ChatContext";

const ChatHeader = () => {
  const { messages, startNewChat, endChat, closeChat } = useChatContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState("menu");

  const hasConversation = messages.length > 0;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setView("menu");
  };

  const handleNewChat = () => {
    startNewChat();
    setMenuOpen(false);
  };

  const handleEndChat = () => {
    if (!hasConversation) return;

    endChat();
    setMenuOpen(false);
  };

  return (
    <div className="relative flex items-center justify-between border-b border-gray-100 px-5 py-4">
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
          <img src="/favicon.png" alt="" className="h-full w-full object-cover" />
        </div>

        <p className="font-heading text-[14px] font-semibold text-gray-900">Waves AI Agent</p>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="More options"
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
          <MoreHorizontal size={18} strokeWidth={1.75} />
        </button>

        <button
          type="button"
          onClick={closeChat}
          aria-label="Close chat"
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
          <X size={18} strokeWidth={1.75} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />

            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-5 top-14 z-20 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white py-1.5 shadow-xl shadow-black/10"
            >
              {view === "menu" ? (
                <>
                  <button
                    type="button"
                    onClick={handleNewChat}
                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-gray-800 transition-colors duration-150 hover:bg-gray-50"
                  >
                    <SquarePen size={15} strokeWidth={1.75} />
                    Start a new chat
                  </button>

                  <button
                    type="button"
                    onClick={handleEndChat}
                    disabled={!hasConversation}
                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-gray-800 transition-colors duration-150 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent"
                  >
                    <XCircle size={15} strokeWidth={1.75} />
                    End chat
                  </button>

                  <button
                    type="button"
                    onClick={() => setView("recents")}
                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] text-gray-800 transition-colors duration-150 hover:bg-gray-50"
                  >
                    <History size={15} strokeWidth={1.75} />
                    View recent chats
                  </button>
                </>
              ) : (
                <div className="px-4 py-3">
                  <p className="text-[12px] text-gray-400">No recent chats yet</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatHeader;
