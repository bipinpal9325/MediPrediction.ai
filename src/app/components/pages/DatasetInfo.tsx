// File: C:/Users/palbi/OneDrive/Documents/GitHub/MediPrediction.ai/src/app/components/pages/DatasetInfo.tsx

const datasets = [
  {
    title: 'Diabetes Dataset',
    color: 'from-purple-500 to-pink-500',
    description: 'Contains diagnostic measurements for predicting diabetes onset in Pima Indian women.',
    features: [
      'Pregnancies', 'Glucose', 'Blood Pressure', 'Skin Thickness', 
      'Insulin', 'BMI', 'Diabetes Pedigree Function', 'Age'
    ]
  },
  {
    title: 'Heart Disease Dataset',
    color: 'from-red-500 to-rose-500',
    description: 'Cleveland database for predicting the presence of heart disease in patients.',
    features: [
      'Age', 'Sex', 'Chest Pain Type', 'Resting BP', 'Cholesterol', 
      'Fasting Blood Sugar', 'Resting ECG', 'Max Heart Rate', 
      'Exercise Angina', 'Oldpeak', 'Slope', 'CA', 'Thal'
    ]
  },
  {
    title: 'COVID-19 Dataset',
    color: 'from-blue-500 to-cyan-500',
    description: 'Comprehensive symptom-based dataset for COVID-19 infection risk assessment.',
    features: [
      'Age', 'Temperature', 'Cough', 'Breathing Difficulty', 'Fatigue', 
      'Loss of Smell/Taste', 'Sore Throat', 'Body Aches', 
      'Exposure History', 'Travel History'
    ]
  },
  {
    title: 'Breast Cancer Dataset',
    color: 'from-orange-500 to-amber-500',
    description: 'Features computed from digitized images of fine needle aspirate (FNA) of breast masses.',
    features: [
      'Radius', 'Texture', 'Perimeter', 'Area', 'Smoothness', 
      'Compactness', 'Concavity', 'Concave Points', 'Symmetry', 
      'Fractal Dimension'
    ]
  }
];

export default datasets;