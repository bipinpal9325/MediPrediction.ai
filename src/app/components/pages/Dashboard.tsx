import { Link } from 'react-router';
import { Activity, Heart, Shield, Droplet, ArrowRight, TrendingUp, Clock, AlertCircle } from 'lucide-react';

export default function Dashboard() {
  const predictions = [
    {
      name: 'Diabetes Prediction',
      icon: Droplet,
      description: 'Assess diabetes risk based on glucose levels, BMI, age, and other factors',
      path: '/predict/diabetes',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      parameters: ['Glucose', 'BMI', 'Age', 'Blood Pressure', 'Insulin'],
      accuracy: '96.2%',
    },
    {
      name: 'Heart Disease Prediction',
      icon: Heart,
      description: 'Evaluate cardiovascular risk using clinical and lifestyle parameters',
      path: '/predict/heart-disease',
      color: 'from-red-500 to-rose-500',
      bgColor: 'from-red-50 to-rose-50',
      parameters: ['Cholesterol', 'Blood Pressure', 'Heart Rate', 'Age', 'Exercise'],
      accuracy: '94.8%',
    },
    {
      name: 'COVID-19 Risk Assessment',
      icon: Shield,
      description: 'Predict COVID-19 infection risk based on symptoms and exposure',
      path: '/predict/covid',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      parameters: ['Symptoms', 'Temperature', 'Exposure', 'Age', 'Comorbidities'],
      accuracy: '92.5%',
    },
    {
      name: 'Cancer Risk Screening',
      icon: Activity,
      description: 'Multi-factor cancer risk analysis using biomarkers and genetics',
      path: '/predict/cancer',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
      parameters: ['Cell Features', 'Tumor Size', 'Age', 'Family History', 'Lifestyle'],
      accuracy: '95.1%',
    },
  ];

  const recentActivity = [
    { disease: 'Diabetes', date: '2 hours ago', risk: 'Low' },
    { disease: 'Heart Disease', date: '1 day ago', risk: 'Medium' },
    { disease: 'COVID-19', date: '3 days ago', risk: 'Low' },
  ];

  const stats = [
    { label: 'Total Predictions', value: '12', icon: TrendingUp },
    { label: 'Last Prediction', value: '2h ago', icon: Clock },
    { label: 'Active Models', value: '4', icon: Activity },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Disease Prediction Dashboard</h1>
          <p className="text-xl text-blue-100">
            Select a disease type to start your risk assessment
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl text-gray-900">{stat.value}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-3 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prediction Cards */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-900">Available Predictions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {predictions.map((prediction) => (
              <div
                key={prediction.path}
                className={`bg-gradient-to-br ${prediction.bgColor} rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${prediction.color} flex items-center justify-center`}>
                    <prediction.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                    {prediction.accuracy} accurate
                  </div>
                </div>
                <h3 className="text-2xl mb-2 text-gray-900">{prediction.name}</h3>
                <p className="text-gray-600 mb-4">{prediction.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">Key Parameters:</p>
                  <div className="flex flex-wrap gap-2">
                    {prediction.parameters.map((param) => (
                      <span
                        key={param}
                        className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-200"
                      >
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={prediction.path}
                  className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${prediction.color} text-white rounded-lg hover:shadow-md transition-all`}
                >
                  <span>Start Prediction</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl mb-4 text-gray-900">Recent Predictions</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Activity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900">{activity.disease}</p>
                      <p className="text-sm text-gray-600">{activity.date}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      activity.risk === 'Low'
                        ? 'bg-green-100 text-green-700'
                        : activity.risk === 'Medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {activity.risk} Risk
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/results"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <span>View All Results</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start space-x-3 mb-4">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Important Notice</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  These predictions are for educational and research purposes. Always consult with
                  healthcare professionals for medical advice.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
              <h4 className="text-sm mb-2 text-gray-900">Need Help?</h4>
              <p className="text-xs text-gray-600 mb-3">
                View our comprehensive documentation and model information
              </p>
              <Link
                to="/dataset-info"
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
              >
                <span>View Dataset Info</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
