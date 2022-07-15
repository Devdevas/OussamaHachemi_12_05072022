import React, { useContext } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../utils/DataContext';

/**
 * Create a RadialBarChart for score
 * @return {Component} - Personalized RadialBarChart from Recharts
*/
function RadialBarChartScore() {
    const { mainData } = useContext(DataContext)

    // data contains the user's score value and a comparison value(1)
    // since the user's score is between 0 and 1, then 1 may represent 100%.
    const data = [{ score: mainData.score }, { score: 1 }]

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="30%" barSize={10} data={data}>
                <RadialBar
                    dataKey="score"
                    fill='#FF0000'
                    cornerRadius='5'
                />
            </RadialBarChart>
        </ResponsiveContainer>
    );

}

export default RadialBarChartScore