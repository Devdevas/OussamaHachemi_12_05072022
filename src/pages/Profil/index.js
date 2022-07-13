import './style.css';
import Header from '../../components/Header';
import VerticalNav from '../../components/VerticalNav';
import Loader from "../../utils/Loader";
import { useContext } from 'react';
import { DataContext } from '../../utils/DataContext';
import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'
import InfosCard from '../../components/InfosCard';
import BarChartActivity from '../../components/BarChartActivity';
import LineChartSessions from '../../components/LineChartSessions';
import PerformanceRadarChart from '../../components/PerformanceRadarChart';
import RadialBarChartScore from '../../components/RadialBarChartScore';

function Profil() {
  const { mainData, isDataLoading } = useContext(DataContext)

  const firstName = mainData.data.userInfos.firstName
  const calorieCount = mainData.data.keyData.calorieCount
  const proteinCount = mainData.data.keyData.proteinCount
  const carbohydrateCount = mainData.data.keyData.carbohydrateCount
  const lipidCount = mainData.data.keyData.lipidCount

  return (
    <div className='block-page'>
      <Header />
      <main>
        <VerticalNav />
        {isDataLoading ? <Loader />
          :
          <article>
            <div className='title'>
              <h1>Bonjour <span>{firstName}</span></h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='body'>
              <div className='graphics'>
                <div className='activity-graph'>
                  <div className='activity-graph-header'>
                    <p className='activity-graph-title'>Activité quotidienne</p>
                    <ul>
                      <li className='poid'><div className='black-dot'></div>Poids(kg)</li>
                      <li className='calories'><div className='red-dot'></div>Calories brûlées(kCal)</li>
                    </ul>
                  </div>
                  <BarChartActivity />
                </div>
                <div className='sessions-graph'>
                  <p className='sessions-graph-title'>Durée moyenne des sessions</p>
                  <LineChartSessions />
                </div>
                <div className='performance-graph'>
                  <PerformanceRadarChart />
                </div>
                <div className='score-graph'>
                  <p>Score</p>
                  <RadialBarChartScore />
                </div>
              </div>
              <div className='info-cards'>
                <InfosCard icon={caloriesIcon} nutrition="Calories" count={`${calorieCount}kCal`} />
                <InfosCard icon={proteinIcon} nutrition="Proteines" count={`${proteinCount}g`} />
                <InfosCard icon={carbsIcon} nutrition="Glucides" count={`${carbohydrateCount}g`} />
                <InfosCard icon={fatIcon} nutrition="Lipides" count={`${lipidCount}g`} />
              </div>
            </div>
          </article>
        }
      </main>
    </div >
  );
}

export default Profil;
