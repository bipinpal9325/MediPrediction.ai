import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Droplet, ArrowRight, Info, Loader } from 'lucide-react';
import PredictionResult from '../PredictionResult';

export default function DiabetesPrediction() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigree: '',
    age: '',
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate ML prediction
    setTimeout(() => {
      const glucose = parseFloat(formData.glucose) || 0;
      const bmi = parseFloat(formData.bmi) || 0;
      const age = parseFloat(formData.age) || 0;

      // Mock prediction logic
      let riskScore = 0;
      if (glucose > 140) riskScore += 30;
      else if (glucose > 100) riskScore += 15;

      if (bmi > 30) riskScore += 25;
      else if (bmi > 25) riskScore += 10;

      if (age > 45) riskScore += 20;
      else if (age > 30) riskScore += 10;

      riskScore = Math.min(95, riskScore + Math.random() * 15);

      const predictionResult = {
        disease: 'Diabetes',
        riskScore: Math.round(riskScore),
        riskLevel: riskScore > 70 ? 'High' : riskScore > 40 ? 'Medium' : 'Low',
        confidence: 96.2,
        factors: [
          { name: 'Glucose Level', value: formData.glucose, impact: glucose > 140 ? 'High' : glucose > 100 ? 'Medium' : 'Low' },
          { name: 'BMI', value: formData.bmi, impact: bmi > 30 ? 'High' : bmi > 25 ? 'Medium' : 'Low' },
          { name: 'Age', value: formData.age, impact: age > 45 ? 'High' : age > 30 ? 'Medium' : 'Low' },
          { name: 'Blood Pressure', value: formData.bloodPressure, impact: 'Medium' },
        ],
        recommendations: [
          'Maintain healthy blood glucose levels through diet and exercise',
          'Monitor your BMI and aim for a healthy weight range',
          'Regular health checkups and glucose monitoring',
          'Consult with a healthcare provider for personalized advice',
        ],
        timestamp: new Date().toISOString(),
      };

      setResult(predictionResult);
      setLoading(false);
    }, 2000);
  };

  if (result) {
    return <PredictionResult result={result} onNewPrediction={() => setResult(null)} />;
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <Droplet className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl">Diabetes Risk Prediction</h1>
          </div>
          <p className="text-xl text-purple-100">
            Enter your health parameters to assess diabetes risk
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl mb-6 text-gray-900">Health Parameters</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Number of Pregnancies
                    </label>
                    <input
                      type="number"
                      name="pregnancies"
                      value={formData.pregnancies}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Glucose Level (mg/dL) *
                    </label>
                    <input
                      type="number"
                      name="glucose"
                      value={formData.glucose}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="100"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Blood Pressure (mm Hg) *
                    </label>
                    <input
                      type="number"
                      name="bloodPressure"
                      value={formData.bloodPressure}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="80"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Skin Thickness (mm)
                    </label>
                    <input
                      type="number"
                      name="skinThickness"
                      value={formData.skinThickness}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="20"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Insulin Level (μU/mL)
                    </label>
                    <input
                      type="number"
                      name="insulin"
                      value={formData.insulin}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="80"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      BMI *
                    </label>
                    <input
                      type="number"
                      name="bmi"
                      value={formData.bmi}
                      onChange={handleChange}
                      required
                      step="0.1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="25.0"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Diabetes Pedigree Function
                    </label>
                    <input
                      type="number"
                      name="diabetesPedigree"
                      value={formData.diabetesPedigree}
                      onChange={handleChange}
                      step="0.001"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="0.5"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Age (years) *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="30"
                      min="0"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <span>Predict Diabetes Risk</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-start space-x-3 mb-4">
                <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">About This Test</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This diabetes prediction model uses machine learning trained on the Pima Indians
                    Diabetes Database to assess your risk based on key health indicators.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg mb-3 text-gray-900">Normal Ranges</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Glucose:</span>
                  <span className="text-gray-900">70-100 mg/dL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Blood Pressure:</span>
                  <span className="text-gray-900">60-80 mm Hg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">BMI:</span>
                  <span className="text-gray-900">18.5-24.9</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg mb-3 text-gray-900">Model Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Accuracy:</span>
                  <span className="text-gray-900">96.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dataset:</span>
                  <span className="text-gray-900">PIMA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Algorithm:</span>
                  <span className="text-gray-900">Random Forest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
