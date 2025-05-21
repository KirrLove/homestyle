
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";

const MEASUREMENT_REQUESTS_KEY = "local_measurement_requests";

export const MeasurementsTab = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Load measurement requests from localStorage
    const loadRequests = () => {
      try {
        const requestsJSON = localStorage.getItem(MEASUREMENT_REQUESTS_KEY);
        const requestsData = requestsJSON ? JSON.parse(requestsJSON) : [];
        setRequests(requestsData);
      } catch (error) {
        console.error("Error loading measurement requests:", error);
        toast.error("Ошибка при загрузке заявок на замер");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadRequests();
  }, []);
  
  const updateRequestStatus = (requestId: number, newStatus: string) => {
    try {
      // Find the request and update its status
      const updatedRequests = requests.map(request => 
        request.id === requestId ? { ...request, status: newStatus } : request
      );
      
      // Save back to localStorage
      localStorage.setItem(MEASUREMENT_REQUESTS_KEY, JSON.stringify(updatedRequests));
      setRequests(updatedRequests);
      toast.success("Статус заявки обновлен");
    } catch (error) {
      toast.error("Ошибка при обновлении статуса");
    }
  };

  if (isLoading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Заявки на замер</h2>
      {requests.length === 0 ? (
        <p className="text-muted-foreground">Заявок на замер пока нет</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-secondary">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Клиент</th>
                <th className="px-4 py-3 text-left">Тип мебели</th>
                <th className="px-4 py-3 text-left">Адрес</th>
                <th className="px-4 py-3 text-left">Дата и время</th>
                <th className="px-4 py-3 text-left">Статус</th>
                <th className="px-4 py-3 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b border-gray-200 hover:bg-muted/30">
                  <td className="px-4 py-3">#{request.id}</td>
                  <td className="px-4 py-3">
                    <div>{request.name}</div>
                    <div className="text-sm text-gray-500">{request.phone}</div>
                  </td>
                  <td className="px-4 py-3">{request.furniture_type}</td>
                  <td className="px-4 py-3">{request.address}</td>
                  <td className="px-4 py-3">
                    {request.preferred_date && request.preferred_time 
                      ? `${request.preferred_date}, ${request.preferred_time}`
                      : 'Не указано'
                    }
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      request.status === 'Выполнено' 
                        ? 'bg-green-100 text-green-800'
                        : request.status === 'В работе'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select 
                      value={request.status}
                      onChange={(e) => updateRequestStatus(request.id, e.target.value)}
                      className="px-2 py-1 border rounded-md text-sm"
                    >
                      <option value="Новая">Новая</option>
                      <option value="Запланирована">Запланирована</option>
                      <option value="В работе">В работе</option>
                      <option value="Выполнено">Выполнено</option>
                      <option value="Отменено">Отменено</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
