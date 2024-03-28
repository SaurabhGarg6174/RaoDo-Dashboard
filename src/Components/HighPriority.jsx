import "../styles/HighPriority.css"

export default function HighPriority(props){

    const currdate = new Date();
    const formattedDate = currdate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
      });

    return(
        <div className="card">
            <div className="topSection">
                <div className="logo">{props.logo}</div>
                <div className="topSubsec">
                    <div className="title">{props.title}</div>
                    <span>Load No: 12454, Bill To: RoaDo demo Bangalore</span>
                </div>
                <div className="date">{formattedDate}</div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores est tempore velit maxime eum. Earum dicta ut facere nostrum!
            </p>
            <div className="buttons">
                <button className="ignore">ignore</button>
                <button className="resolve">Resolve</button>
            </div>
        </div>
    );
}