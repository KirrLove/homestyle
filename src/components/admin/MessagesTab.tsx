
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";

const CONTACT_MESSAGES_KEY = "local_contact_messages";

export const MessagesTab = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Load contact messages from localStorage
    const loadMessages = () => {
      try {
        const messagesJSON = localStorage.getItem(CONTACT_MESSAGES_KEY);
        const messagesData = messagesJSON ? JSON.parse(messagesJSON) : [];
        setMessages(messagesData);
      } catch (error) {
        console.error("Error loading messages:", error);
        toast.error("Ошибка при загрузке сообщений");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadMessages();
  }, []);

  if (isLoading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Сообщения от клиентов</h2>
      {messages.length === 0 ? (
        <p className="text-muted-foreground">Сообщений пока нет</p>
      ) : (
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{message.name}</h3>
                <span className="text-sm text-gray-500">{formatDate(message.created_at)}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <div>{message.email}</div>
                <div>{message.phone}</div>
              </div>
              <p className="text-gray-800 mt-2">{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
