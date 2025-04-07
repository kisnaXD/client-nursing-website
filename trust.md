# Heart Disease Risk Analysis Report

## Objective of the Analysis

The objective of this analysis is to explore and analyze the "Heart_monitoring.csv" dataset to uncover key health indicators and risk factors associated with heart disease. As a Sales Manager in a healthcare-related business, this report aims to provide actionable insights that can guide marketing strategies, product development, and customer outreach. By understanding the distribution of health attributes, their correlations, and their interactions with heart disease, we can better target our services and products to at-risk populations.

## Data Exploration

The dataset contains 21 attributes related to heart health, including Age, Gender, Blood Pressure, Cholesterol Level, Smoking Habits, and Heart Disease Status. We focused on six numerical attributes for detailed exploration: Blood Pressure, Cholesterol Level, Triglyceride Level, Fasting Blood Sugar, CRP Level, and Homocysteine Level.

- **Initial Findings**:
  - **Blood Pressure**: Ranges from 120 to 180 mmHg, with a mean of approximately 150 mmHg.
  - **Cholesterol Level**: Ranges from 151 to 300 mg/dL, with a mean of 225 mg/dL.
  - **Triglyceride Level**: Highly variable, ranging from 101 to 399 mg/dL, with a mean of 240 mg/dL.
  - **Fasting Blood Sugar**: Ranges from 80 to 160 mg/dL, with some missing values.
  - **CRP Level**: A marker of inflammation, ranging from 0.02 to 14.96 mg/L.
  - **Homocysteine Level**: Ranges from 5 to 20 µmol/L, with a mean of 12 µmol/L.
  - **Missing Values**: Fasting Blood Sugar, CRP Level, and Homocysteine Level had 2, 3, and 2 missing values, respectively.

## Data Cleaning

To ensure the dataset was ready for analysis, we performed the following cleaning steps:

- **Missing Values**: Filled missing values in numerical attributes with their respective medians to maintain data integrity. For example, Fasting Blood Sugar's missing values were filled with the median value of 119 mg/dL.
- **Noisy Data**: Checked for unrealistic values (e.g., negative values) in the specified attributes. No negative values were found, indicating good data quality in this aspect.
- **Post-Cleaning Summary**:
  - After cleaning, there were no missing values.
  - Summary statistics remained consistent, with slight adjustments due to median imputation (e.g., Fasting Blood Sugar's mean shifted slightly to 120 mg/dL).

## Analysis and Insights

### Distribution of Attributes
- **Blood Pressure**: Most individuals have blood pressure between 130-170 mmHg, but there are outliers above 180 mmHg, indicating potential hypertension risks.
- **Cholesterol Level**: The distribution is slightly right-skewed, with most values between 150-300 mg/dL. Outliers above 350 mg/dL suggest a subset of individuals at higher risk.
- **Triglyceride Level**: Right-skewed, with many individuals having levels above 300 mg/dL, a known risk factor for heart disease.
- **Fasting Blood Sugar**: Normally distributed around 120 mg/dL, with outliers above 160 mg/dL indicating potential diabetes risk.
- **CRP Level**: Right-skewed, with most values below 10 mg/L, but outliers above 14 mg/L suggest high inflammation in some individuals.
- **Homocysteine Level**: Normally distributed around 12 µmol/L, with outliers above 18 µmol/L indicating potential vascular health issues.

### Correlation Among Attributes
- **Blood Pressure and Cholesterol Level**: Show a weak positive correlation (0.1), suggesting they may not strongly influence each other.
- **Triglyceride Level and Cholesterol Level**: Have a moderate positive correlation (0.3), indicating that individuals with high cholesterol often have high triglycerides, a combined risk factor for heart disease.
- **Heart Disease Correlation**: CRP Level (0.15) and Homocysteine Level (0.12) show weak positive correlations with heart disease, suggesting they contribute to risk but are not the sole factors.

### Feature Interactions
- **Cholesterol Level and Heart Disease**: Individuals with heart disease have slightly higher cholesterol levels (median 230 mg/dL) compared to those without (median 220 mg/dL). This suggests cholesterol management products could be targeted at this group.
- **Smoking and Heart Disease**: Smokers have a higher proportion of heart disease (60%) compared to non-smokers (40%). This highlights smoking cessation programs as a potential sales opportunity.
- **Age, Blood Pressure, and Heart Disease**: Older individuals (above 50 years) with high blood pressure (>160 mmHg) have a significantly higher incidence of heart disease, particularly in the 50-70 and >70 age groups. This group could benefit from blood pressure monitoring devices and heart health supplements.

## Conclusion

This analysis of the Heart_monitoring.csv dataset reveals several actionable insights for our sales strategy:

1. **Target High-Risk Groups**: Focus on individuals with high cholesterol (>230 mg/dL), high triglycerides (>300 mg/dL), and high blood pressure (>160 mmHg), as they are more likely to have heart disease. Products like cholesterol-lowering supplements, blood pressure monitors, and heart health programs could be marketed to this group.
2. **Smoking Cessation Opportunities**: Smokers have a 60% incidence of heart disease, compared to 40% for non-smokers. We can promote smoking cessation aids and wellness programs to this demographic.
3. **Age-Based Marketing**: Older individuals (above 50 years) with high blood pressure are at higher risk. Tailor marketing campaigns for blood pressure management tools and heart health services to this age group.
4. **Inflammation and Vascular Health**: Elevated CRP and Homocysteine levels are weakly correlated with heart disease. Consider offering products that address inflammation (e.g., anti-inflammatory supplements) and vascular health.

By leveraging these insights, we can better position our products and services to meet the needs of at-risk populations, ultimately driving sales and improving customer health outcomes.

Submission by Krishna Gera, 240905282, Section PD, Roll Number 10