import { GraduationCap, BookOpen, FileText, Users, Award, Download, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function Research() {
  const useCases = [
    {
      icon: GraduationCap,
      title: 'Final Year Projects',
      description: 'Perfect for computer science and medical students working on ML-based healthcare projects',
      features: ['Complete dataset access', 'Model documentation', 'Implementation guides', 'Project support'],
    },
    {
      icon: BookOpen,
      title: 'Academic Research',
      description: 'Conduct research studies on AI in healthcare and disease prediction',
      features: ['Research datasets', 'Model metrics', 'Citation support', 'Publication assistance'],
    },
    {
      icon: FileText,
      title: 'Educational Use',
      description: 'Learn about machine learning applications in healthcare',
      features: ['Tutorial content', 'Code examples', 'Video guides', 'Community support'],
    },
  ];

  const publications = [
    {
      title: 'Machine Learning Approaches for Diabetes Prediction: A Comparative Study',
      authors: 'Smith J., et al.',
      journal: 'Journal of Medical AI',
      year: '2025',
      citations: '127',
    },
    {
      title: 'Neural Networks for Breast Cancer Detection Using FNA Data',
      authors: 'Johnson M., et al.',
      journal: 'AI in Healthcare Research',
      year: '2024',
      citations: '203',
    },
    {
      title: 'COVID-19 Risk Assessment Using Symptom-Based ML Models',
      authors: 'Williams R., et al.',
      journal: 'Pandemic Informatics',
      year: '2024',
      citations: '156',
    },
  ];

  const stats = [
    { number: '100+', label: 'Student Projects' },
    { number: '15+', label: 'Research Papers' },
    { number: '20+', label: 'Universities' },
    { number: '500+', label: 'Researchers' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl">Research & Academic Use</h1>
          </div>
          <p className="text-xl text-blue-100">
            Empowering students and researchers with AI-powered healthcare tools
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
              <div className="text-3xl md:text-4xl text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Academic Use Cases</h2>
            <p className="text-xl text-gray-600">
              How students and researchers are using MediPredict AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 mb-12 border border-blue-100">
          <h2 className="text-3xl mb-6 text-gray-900">Getting Started with Your Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-gray-900">For Students</h3>
              <ol className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-gray-900">Create a free account</p>
                    <p className="text-sm text-gray-600">Sign up using your university email</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-gray-900">Access datasets and documentation</p>
                    <p className="text-sm text-gray-600">Download model info and research materials</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-gray-900">Start building your project</p>
                    <p className="text-sm text-gray-600">Use our APIs and examples</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <p className="text-gray-900">Get support and feedback</p>
                    <p className="text-sm text-gray-600">Join our student community</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-gray-900">For Researchers</h3>
              <ol className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-gray-900">Submit research proposal</p>
                    <p className="text-sm text-gray-600">Outline your research objectives</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-gray-900">Access extended datasets</p>
                    <p className="text-sm text-gray-600">Get full model parameters and metrics</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-gray-900">Conduct your research</p>
                    <p className="text-sm text-gray-600">Use our platform for experiments</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <p className="text-gray-900">Publish and cite</p>
                    <p className="text-sm text-gray-600">Share your findings with the community</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6 text-gray-900">Related Publications</h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg mb-2 text-gray-900">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{pub.journal}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                  <span>•</span>
                  <span>{pub.citations} citations</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl mb-4 text-gray-900">Available Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-900">Technical Documentation</span>
                <Download className="w-5 h-5 text-blue-600" />
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-900">Dataset Information</span>
                <Download className="w-5 h-5 text-blue-600" />
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-900">Model Architectures</span>
                <Download className="w-5 h-5 text-blue-600" />
              </li>
              <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-900">Sample Code & Examples</span>
                <Download className="w-5 h-5 text-blue-600" />
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <h3 className="text-xl mb-4 text-gray-900">Citation Information</h3>
            <div className="bg-white rounded-lg p-4 text-sm mb-4 font-mono text-gray-700">
              @misc&#123;medipredict2026,<br />
              &nbsp;&nbsp;title = &#123;MediPredict AI: ML-Based Disease Prediction System&#125;,<br />
              &nbsp;&nbsp;author = &#123;MediPredict Team&#125;,<br />
              &nbsp;&nbsp;year = &#123;2026&#125;,<br />
              &nbsp;&nbsp;url = &#123;https://medipredict.ai&#125;<br />
              &#125;
            </div>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Copy Citation</span>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Research?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students and researchers using MediPredict AI for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            >
              Create Research Account
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all border-2 border-blue-500"
            >
              Contact Research Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
