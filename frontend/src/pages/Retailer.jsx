import FeatureCard from "../components/FeatureCard";

export default function Retailer() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-retailerPrimary text-white p-6 text-center">
        <h1 className="text-2xl font-semibold">
          ShelfWise – Retailer Dashboard
        </h1>
      </header>

      <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard icon="📈" text="Demand Forecasting" borderColor="border-retailerAction" />
        <FeatureCard icon="📦" text="Inventory Optimization" borderColor="border-retailerAction" />
        <FeatureCard icon="⏰" text="Near-Expiry Alerts" borderColor="border-retailerAction" />
        <FeatureCard icon="📊" text="Retail Analytics" borderColor="border-retailerAction" />
        <FeatureCard icon="🔔" text="Stock Notifications" borderColor="border-retailerAction" />
        <FeatureCard icon="🤖" text="AI Retail Assistant" borderColor="border-retailerAction" />
      </main>
    </div>
  );
}
