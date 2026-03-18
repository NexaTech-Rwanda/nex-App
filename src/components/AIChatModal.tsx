import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AIChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hello! I'm NexaBot. I can explain NexatechRwanda, its four products, and how to get in touch with the company.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      let botResponse =
        "NexatechRwanda is a Rwanda-first consumer technology holding company building products across commerce, mobility, services, and agriculture. Would you like to explore the portfolio or learn how the company works?";

      const input = userMessage.content.toLowerCase();
      if (input.includes("who") || input.includes("nexatech")) {
        botResponse =
          "NexatechRwanda is a holding company that incubates, owns, and scales consumer-first products. Its current portfolio includes Shoppa, Tugendane, Hanoserve, and Verline.";
      } else if (input.includes("service") || input.includes("what you do")) {
        botResponse =
          "NexatechRwanda does not sell client services. It builds and owns products in commerce, mobility, services, and agriculture.";
      } else if (
        input.includes("contact") ||
        input.includes("partner") ||
        input.includes("invest")
      ) {
        botResponse =
          "You can reach the company at info@nexatech.co.rw or through the contact page for investor, partner, ecosystem, or product-related inquiries.";
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 z-[9999] bg-[#0057B8] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] flex flex-row-reverse items-center justify-center group transition-all duration-300"
      >
        <Bot className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium">
          Ask NexaBot
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9, x: 50 }}
            className="fixed bottom-[120px] right-16 z-[10000] w-[350px] md:w-[400px] h-[500px] bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col overflow-hidden"
          >
            <div className="p-6 bg-[#0057B8] text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-lg leading-tight">
                    NexaBot
                  </h3>
                  <p className="text-white/60 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online | AI Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.role === "bot" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${
                    msg.role === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`flex gap-2 max-w-[80%] ${
                      msg.role === "bot" ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                        msg.role === "bot"
                          ? "bg-blue-100 text-[#0057B8]"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {msg.role === "bot" ? (
                        <Bot className="w-4 h-4" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                    </div>
                    <div
                      className={`p-4 rounded-[20px] text-sm leading-relaxed ${
                        msg.role === "bot"
                          ? "bg-white text-gray-800 shadow-sm rounded-tl-none"
                          : "bg-[#0057B8] text-white rounded-tr-none"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative flex items-center gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me something..."
                  className="rounded-full bg-gray-100 border-none px-6 pr-12 focus-visible:ring-1 focus-visible:ring-[#0057B8]"
                />
                <Button
                  onClick={handleSend}
                  className="absolute right-1 top-1 w-8 h-8 rounded-full bg-[#0057B8] p-0 flex items-center justify-center hover:bg-[#004694] transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatModal;
