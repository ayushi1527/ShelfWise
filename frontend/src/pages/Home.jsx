import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold text-retailerPrimary">
        ShelfWise
      </h1>
      <p className="text-gray-600 mt-2">
        Smart Retail. Smarter Decisions.
      </p>

      <div className="flex gap-8 mt-12">
        <div
          onClick={() => navigate("/retailer")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition w-64"
        >
          <h2 className="text-2xl font-semibold text-retailerPrimary">
            Retailer
          </h2>
          <p className="text-gray-500 mt-2">
            Inventory • Forecasting • Analytics
          </p>
        </div>

        <div
          onClick={() => navigate("/consumer")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition w-64"
        >
          <h2 className="text-2xl font-semibold text-consumerPrimary">
            Consumer
          </h2>
          <p className="text-gray-500 mt-2">
            AI Shopping • Personalization
          </p>
        </div>
      </div>
    </div>
  );
}
