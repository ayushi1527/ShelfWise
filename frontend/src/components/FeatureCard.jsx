export default function FeatureCard({ icon, text, borderColor }) {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md font-semibold border-l-4 ${borderColor}`}
    >
      {icon} {text}
    </div>
  );
}
