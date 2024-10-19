import React from 'react';
import Toggle from './Toggle';
import PricingCard from './PricingCard';

const MainPage = () => {
  const cards = [
    {
      name: 'Trial',
      price: 'Try now',
      description: 'Get personalized template',
      features: [
        '25+ data sources',
        'GPT4, LinkedIn and others',
        'Access to slack community',
        '10+ templates to scale your outbound'
      ],
      buttonText: 'Try Now',
      footerItems: ['Explore product capabilities'],
    },
    {
      name: 'Growth',
      price: '$229',
      originalPrice: '$459',
      description: '/month',
      discount: '50% off',
      credits: '8,000 Credits',
      features: [
        'Webhook, HTTP API',
        'Credit rollover (upto 2x plan credits)',
        'Outbound email integrations like Instantly, Smartlead.',
        'Dedicated 3 hours from Bitscale expert'
      ],
      buttonText: 'Continue with Growth',
      footerItems: [
        'Unlimited leads search',
        'Fully enriched 5000 leads',
        'Personalized outreach at scale'
      ],
    },
    {
      name: 'Booster',
      price: '$499',
      originalPrice: '$999',
      description: '/month',
      discount: '50% off',
      credits: '25,000 Credits',
      popular: true,
      features: [
        'Webhook, HTTP API',
        'Credit rollover (upto 2x plan credits)',
        'Outbound email integrations like Instantly, Smartlead.',
        'Dedicated 3 hours from Bitscale expert',
        'Advanced models like Claude Sonnet',
        'Dedicated 8 hours from Bitscale expert',
        '2 way Hubspot integration'
      ],
      buttonText: 'Continue with Booster',
      footerItems: [
        'Unlimited leads search',
        'Fully enriched 15000 leads',
        'Personalized outreach at scale'
      ],
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      description: 'For individual pricing',
      features: [
        'Data privacy certification',
        'Priority Support',
        'Dedicated Bitscale expert',
        'Private Slack Channel',
        'Collaborative workspace and templates'
      ],
      buttonText: 'Try Now',
      footerItems: [
        'Perfect for High-Volume End-to-End CRM Data Enrichment',
        'Unlimited list of leads with unlimited data points'
      ],
    }
  ];

  return (
    <div className="container mx-auto px-10 py-8">
      <Toggle />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10 ">
        {cards.map((card, index) => (
          <PricingCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
