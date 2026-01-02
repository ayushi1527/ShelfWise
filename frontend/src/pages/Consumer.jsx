import FeatureCard from "../components/FeatureCard";

export default function Consumer() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-consumerPrimary text-white p-6 text-center">
        <h1 className="text-2xl font-semibold">
          ShelfWise – Smart Shopping
        </h1>
      </header>

      <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard icon="🎯" text="Personalized Recommendations" borderColor="border-consumerAction" />
        <FeatureCard icon="🤖" text="AI Shopping Assistant" borderColor="border-consumerAction" />
        <FeatureCard icon="📱" text="QR Product Education" borderColor="border-consumerAction" />
        <FeatureCard icon="🎁" text="Smart Offers" borderColor="border-consumerAction" />
        <FeatureCard icon="🛍" text="Product Comparison" borderColor="border-consumerAction" />
        <FeatureCard icon="🎙" text="Voice Assistance" borderColor="border-consumerAction" />
      </main>
    </div>
  );
}
