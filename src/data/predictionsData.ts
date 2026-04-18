export const predictionsData = [
  {
    id: "car-loan",
    title: "Car Loan Prediction",
    problem: "Inconsistent loan approval decisions based on customer financial attributes.",
    approach: "Developed a machine learning model analyzing factors like income, credit history, and employment details.",
    modelType: "Random Forest Classifier",
    metrics: "89% Accuracy, 0.85 F1-Score",
    outcome: "Improved consistency in evaluation and assisted in faster loan approval decisions.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"]
  },
  {
    id: "sleep-quality",
    title: "Sleep Quality Prediction",
    problem: "Lack of insights into how lifestyle and behavioral data affect sleep quality.",
    approach: "Built a classification model to analyze patterns related to stress, activity levels, and daily habits.",
    modelType: "Gradient Boosting (XGBoost)",
    metrics: "92% Accuracy",
    outcome: "Provided a basic foundation for wellness insights by identifying key factors affecting sleep.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"]
  },
  {
    id: "diabetes",
    title: "Diabetes Prediction",
    problem: "Need for early-stage analysis of patient health indicators for diabetes risk.",
    approach: "Implemented a predictive model using patient health data and structured the workflow for simple visualization.",
    modelType: "Logistic Regression & SVM",
    metrics: "86% Accuracy, 0.88 Recall",
    outcome: "Estimated the likelihood of diabetes to support early intervention and awareness.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"]
  },
  {
    id: "cloud-storage",
    title: "Cloud Storage Usage Prediction",
    problem: "Unexpected capacity issues and poor resource planning for cloud storage.",
    approach: "Developed a forecasting model using historical trends to estimate future cloud storage usage.",
    modelType: "Time-Series (ARIMA / LSTM)",
    metrics: "MAPE < 8%",
    outcome: "Supported better resource planning and avoided unexpected capacity bottlenecks.",
    tech: ["Python", "Time-Series Forecasting (ARIMA / LSTM)", "Cloud APIs"]
  }
];
