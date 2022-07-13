import React, { useContext } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../utils/DataContext';


function RadialBarChartScore() {
    const { mainData } = useContext(DataContext)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="100%" barSize={10} data={mainData.data}>
                <RadialBar
                    minAngle={15}
                    dataKey="score"
                    fill='#FF0000'
                />
            </RadialBarChart>
        </ResponsiveContainer>
    );

}

export default RadialBarChartScore