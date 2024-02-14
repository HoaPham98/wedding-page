import {useEffect, useState} from "react";

type Props = {
    date: Date,
}

interface TimeDisplayValuesType {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function Countdown(props: Props) {
    const { date } = props;
    const targetDate = date.getTime();

    const generateTimeDisplay = () : TimeDisplayValuesType => {
        const rightJustNow = new Date().getTime();
        const runway = targetDate - rightJustNow;
        return {
            days: Math.floor(runway / (1000 * 60 * 60 * 24)),
            hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((runway % (1000 * 60)) / 1000)
        };
    };
    const [timeDisplay, setTimeDisplay]  = useState<TimeDisplayValuesType>(
        generateTimeDisplay
    );

    const updateCounters = () => setTimeDisplay(generateTimeDisplay);

    useEffect(() => {
        setInterval(() => setTimeDisplay(generateTimeDisplay), 1000);
    }, []);

    return <div className="clock-grids">
        <div id="clock">
            <div className="box">
                <div>
                    <div className="time">{timeDisplay.days.toString().padStart(2, '0')}</div>
                    <span>Days</span>{" "}
                </div>
            </div>
            <div className="box">
                <div>
                    <div className="time">{timeDisplay.hours.toString().padStart(2, '0')}</div>
                    <span>Hours</span>{" "}
                </div>
            </div>
            <div className="box">
                <div>
                    <div className="time">{timeDisplay.minutes.toString().padStart(2, '0')}</div>
                    <span>Mins</span>{" "}
                </div>
            </div>
            <div className="box">
                <div>
                    <div className="time">{timeDisplay.seconds.toString().padStart(2, '0')}</div>
                    <span>Secs</span>{" "}
                </div>
            </div>
        </div>
    </div>;
}