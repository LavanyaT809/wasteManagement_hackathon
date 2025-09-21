# Waste Management System



This project aims to address urban waste management challenges through a comprehensive digital solution. Developed during a hackathon, the system facilitates efficient waste collection, segregation, and disposal, promoting sustainability and community participation.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)


## Features

- **Accurate Waste Classification**: AI correctly identifies Plastic, Metal, Glass, Organic, Paper with confidence scores. Real-time results via webcam or uploaded images.
- **Efficient Waste Management**: Users can request pickups for reusable/recyclable items. NGOs/recyclers receive alerts and efficiently collect waste.
- **Community Engagement & Awareness**: Gamification motivates users to segregate properly. Awareness messages and recycling tips educate citizens..
- **Data-Driven Insights**: Dashboard shows daily, weekly, and type-wise segregation stats. Helps track citizen participation and monitor waste trends in Pune..

## Website 
<img width="948" height="488" alt="home_preeti" src="https://github.com/user-attachments/assets/57bbf254-ac5a-48d4-a870-e3736b749944" />
<img width="878" height="488" alt="complai<img width="620" height="493" alt="pickup_preeti" src="https://github.com/user-attachments/assets/e246a8be-0a33-44a7-99fa-0053ee71572b" />
<img width="701" height="462" alt="complaint" src="https://github.com/user-attachments/assets/fcbb278a-80ee-48b4-8c53-401ea9d98282" />
<img width="950" height="263" alt="features" src="https://github.com/user-attachments/assets/63edf4b7-3505-4b93-b8f3-b8f77ea7cbd3" />

## How We Solve the Problem

#### 1. Waste Image Input
- User uploads a photo or uses the live camera.  
- System captures the image for processing.

#### 2. AI-Based Waste Classification
- Image processed through a pre-trained deep learning model.  
- Classifies into categories: Plastic, Metal, Glass, Organic, Paper.  
- Provides confidence score (e.g., Plastic – 87%).

#### 3. User Feedback & Disposal Instructions
- Display the classification result on the web/mobile interface.  
- Show bin color, recycling tips, and proper disposal instructions.

#### 4. NGO / Recycler Matching
- If item is reusable, alert nearby NGOs/recyclers using location data or a mock database.  
- Users can request pickups; backend assigns requests to the nearest NGO.

#### 5. Data Storage & Analytics
- Store user interactions and classified waste in a database.  
- Display waste statistics dashboard: daily trends, type-wise segregation, and active users.

#### 6. Gamification & Engagement
- Users earn points for correct segregation.  
- Points can be redeemed with mocked partner rewards to encourage continued participation.






## Tech Stack

- **Frontend**: React / HTML, CSS, React for web interface
- **Backend**:Node.js 
- **Database**:  MongoDB / SQLite 
- **AI Model**: TensorFlow / PyTorch / pre-trained CNN (MobileNet / EfficientNet).
- **Location & Notifications**:Google Maps API (for location) / SMTP or Twilio (for alerts).
- **Visualization**:Chart.js / Recharts for dashboards.

## Machine Learning Model

The project uses a pre-trained ML model for garbage classification to assist waste sorting.  
You can access the trained model here:  

[Trained Garbage Classification Model](https://github.com/truptisonwane0603/GARBAGE-CLASSIFICATION)

## Future Enhancements / Expansion

### 1. Advanced AI Classification
- Detect more detailed waste categories (e.g., e-waste, hazardous waste, compostable materials).  
- Implement multi-object detection for multiple items in a single image.

### 2. Live Integration with Municipal Systems
- Connect directly with Pune Municipal Corporation for real-time waste truck tracking.  
- Integrate with official collection schedules for automated pickups.

### 3. Mobile App Enhancements
- Add voice-based waste identification and AR guidance for bin placement.  
- Provide personalized recycling tips and notifications based on user habits.

### 4. Community & Corporate Engagement
- Partner with schools, offices, and housing societies for large-scale awareness campaigns.  
- Introduce leaderboards and city-wide gamification to encourage healthy competition.

### 5. Data-Driven Environmental Impact Analysis
- Use collected data to predict waste trends, optimize collection routes, and measure carbon footprint reduction.  
- Share public dashboards to encourage citizen participation.






