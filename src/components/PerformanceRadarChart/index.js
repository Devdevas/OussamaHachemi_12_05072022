import React, { useContext } from 'react';
import { DataContext } from "../../utils/DataContext"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Create a RadarChart for performance
 * @return {Component} - Personalized RadarChart from Recharts
*/
function PerformanceRadarChart() {
    const { performanceData } = useContext(DataContext)

    return <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={performanceData} startAngle={210} endAngle={570}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" fontSize={12} fontWeight={500} tickLine={false} />
            <Radar dataKey='value' stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.7} />
        </RadarChart>
    </ResponsiveContainer>
}

export default PerformanceRadarChart