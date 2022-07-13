import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import { DataContext } from '../../utils/DataContext';

function BarChartActivity() {
    const { activityData } = useContext(DataContext)

    return <ResponsiveContainer width="100%" height='65%'>
        <BarChart
            data={activityData.data.sessions}
            margin={{
                top: 15,
                right: 30,
                left: 30,
                bottom: 5,
            }}
        >
            <CartesianGrid vertical={false} horizontalPoints={[15, 95]} strokeDasharray="3 3" />
            <XAxis dataKey="day" tickMargin={15} tickLine={false} />
            <YAxis orientation="right" tickMargin={25} axisLine={false} tickLine={false} />
            <Tooltip itemStyle={{ fontSize: "7px", color: "white", margin: "10px 5px 0 0" }} contentStyle={{ background: "#E60000", color: "white", fontSize: "7px" }} />
            <Bar dataKey="kilogram" fill="#282D30" radius={[7, 7, 0, 0]} barSize={7} />
            <Bar dataKey="calories" fill="#E60000" radius={[7, 7, 0, 0]} barSize={7} />
        </BarChart>
    </ResponsiveContainer>

}
export default BarChartActivity
