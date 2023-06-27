import Benefits from 'src/pricing/components/Benefits';
import Plans from 'src/pricing/components/Plans';

const plans = [
  {
    name: 'Basic',
    price: 30,
    interval: 'month',
    features: [
      '1 User',
      'Unlimited Projects',
      'Unlimited Storage',
      'Unlimited Support',
    ],
  },
  {
    name: 'Pro',
    price: 300,
    interval: 'year',
    features: [
      '5 Users',
      'Unlimited Projects',
      'Unlimited Storage',
      'Unlimited Support',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="grid-halves h-screen-navbar">
      <Plans plans={plans} />
      <Benefits />
    </div>
  );
}
