import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../utils/DataContext';

function LineChartSessions() {
    const { sessionsData } = useContext(DataContext)

    return (
        <ResponsiveContainer width="100%" height="60%">
            <LineChart
                data={sessionsData.data.sessions}
                margin={{
                    top: 30,
                    right: 30,
                    left: 20,
                    bottom: 15,
                }}
            >
                <XAxis dataKey="day" tickMargin={15} tickLine={false} axisLine={false} stroke={'#FFFFFF'} />
                <YAxis hide={true} unit="min" />
                <Tooltip itemStyle={{ fontSize: "7px", color: "#282D30", margin: "10px 5px 0 0" }} contentStyle={{ background: "white", color: "#282D30", fontSize: "7px" }} />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartSessions
