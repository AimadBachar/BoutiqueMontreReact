import { useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return (
        <div className="time">
            <span className="time-clock">{ time }</span>
        </div>
    );
};

export default Clock;
