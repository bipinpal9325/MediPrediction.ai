import { Check, Zap, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router';

export default function Pricing() {
  const plans = [
    {
      name: 'Student',
      price: 'Free',
      period: 'forever',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      description: 'Perfect for students and academic research',
      features: [
        '10 predictions per month',
        'Access to all 4 disease models',
        'Basic analytics',
        'PDF reports',
        'Dataset information',
        'Community support',
        'Educational resources',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Researcher',
      price: '$29',
      period: 'per month',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'For active researchers and healthcare professionals',
      features: [
        'Unlimited predictions',
        'Advanced analytics dashboard',
        'Detailed PDF reports',
        'API access',
        'Historical data export',
        'Priority support',
        'Research documentation',
        'Custom model parameters',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Institution',
      price: 'Custom',
      period: 'contact us',
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
      description: 'For universities and healthcare organizations',
      features: [
        'Everything in Researcher',
        'Multi-user accounts',
        'Custom model training',
        'White-label solution',
        'On-premise deployment',
        'Dedicated support team',
        'SLA guarantee',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Is the Student plan really free?',
      answer: 'Yes! The Student plan is completely free for students and educators. Just sign up with your university email address.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change your plan at any time. Upgrades are immediate, and downgrades take effect at the end of your billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for institutional plans.',
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes! The Researcher plan comes with a 14-day free trial. No credit card required.',
    },
    {
      question: 'Can I use this for commercial purposes?',
      answer: 'Our platform is designed for educational and research purposes. For commercial use, please contact our sales team for a custom enterprise plan.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'Student plan includes community support, Researcher plan has priority email support, and Institution plan includes dedicated support with guaranteed response times.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100">
            Choose the plan that's right for you
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border-2 ${
                plan.popular ? 'border-blue-500 relative' : 'border-gray-100'
              } overflow-hidden transition-transform hover:scale-105`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-2 text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">/ {plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/auth"
                  className={`block w-full px-6 py-3 rounded-lg text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16 border border-gray-100">
          <h2 className="text-3xl mb-8 text-center text-gray-900">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-700">Feature</th>
                  <th className="text-center py-4 px-6 text-gray-700">Student</th>
                  <th className="text-center py-4 px-6 text-gray-700">Researcher</th>
                  <th className="text-center py-4 px-6 text-gray-700">Institution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-6 text-gray-900">Monthly Predictions</td>
                  <td className="text-center py-4 px-6 text-gray-700">10</td>
                  <td className="text-center py-4 px-6 text-gray-700">Unlimited</td>
                  <td className="text-center py-4 px-6 text-gray-700">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">Disease Models</td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">PDF Reports</td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">API Access</td>
                  <td className="text-center py-4 px-6 text-gray-400">—</td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">Advanced Analytics</td>
                  <td className="text-center py-4 px-6 text-gray-400">—</td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">Multi-user Accounts</td>
                  <td className="text-center py-4 px-6 text-gray-400">—</td>
                  <td className="text-center py-4 px-6 text-gray-400">—</td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900">Custom Training</td>
                  <td className="text-center py-4 px-6 text-gray-400">—</td>
                  <td className="text-center py-4 px-6 text-gray-400">—</td>
                  <td className="text-center py-4 px-6"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-12 text-center border border-blue-100">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the right plan for your needs
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
