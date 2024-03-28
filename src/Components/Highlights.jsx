import "../Styles/Highlights.css";

export default function Highlights() {
  const data = {
    income: "5000 CAD",
    expenses: "2000 CAD",
  };

  const completedActivities = [
    { 
        activityID: 1,
        activityType: "Completed",
        loadNumber: "I-I-AAA-1325",
        userID: 1,
        timestamp: "[Timestamp]",
        description: "Gurpreet Singh (Dispatch team) created Load No. I-I-AAA-1325"
    },
    { 
        activityID: 2,
        activityType: "Completed",
        loadNumber: "I-I-AAA-1325",
        userID: 2,
        timestamp: "[Timestamp]",
        description: "Aman (Driver) picked up goods at Location_Name for Load No. I-I-AAA-1325"
    },
    // Add more completed activities here
  ];

  const scheduledActivities = [
    { 
        activityID: 3,
        activityType: "Scheduled",
        loadNumber: "I-I-AAA-1325",
        userID: 2,
        timestamp: "[Timestamp]",
        description: "Load No. I-I-AAA-1325 will be delivered by Aman (Driver)"
    },
    { 
        activityID: 4,
        activityType: "Scheduled",
        loadNumber: "I-I-AAA-1325",
        userID: 1,
        timestamp: "[Timestamp]",
        description: "Aman (Driver) will pick up goods at Location_Name for Load No. I-I-AAA-1325"
    },
    // Add more scheduled activities here
  ];

  const TodaysHighlights = () => {
    return (
      <div className="highlight-container">
        <h3 className="highlight-title">Today's Highlights (14)</h3>
        <div className="income">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="highlight-item">
              <div>{key.charAt(0).toUpperCase() + key.slice(1)}</div>
              <div style={key==="expenses" ? {color:"#D04141"} : {color:"#148714"}}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ActivityList = ({ title, activities }) => {
    return (
      <div className="highlight-container">
        <h3 className="highlight-title">{title} ({activities.length})</h3>
        {activities.map(activity => (
          <div key={activity.activityID} className="highlight-item">
            {activity.description}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="sideCom">
      <TodaysHighlights />
      <ActivityList title="Completed Activities" activities={completedActivities} />
      <ActivityList title="Scheduled Activities" activities={scheduledActivities} />
    </div>
  );
}
