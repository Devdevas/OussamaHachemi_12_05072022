
import { createContext, useState, useEffect } from "react";
import { MockDataSource } from "./MockDataSource";
import { ApiDataSource } from "./ApiDataSource";

export const DataContext = createContext();

function DataProvider({ children }) {
    const [mainData, setMainData] = useState();
    const [activityData, setActivityData] = useState();
    const [sessionsData, setSessionsData] = useState();
    const [performanceData, setPerformanceData] = useState();
    const [isDataLoading, setDataLoading] = useState(false);

    // Get id from the current URL (which is the last segment of the path)
    const url = new URL(window.location.href);
    const path = url.pathname
    const id = path.substring(path.lastIndexOf('/') + 1)

    // const dataSource = new MockDataSource(id)
    const dataSource = new ApiDataSource(id)

    /**
     * Get data from MockDataSource or ApiDataSource
     * @param { Object } data 
     * @param { Function } setData 
     */
    const getData = async (data, setData) => {
        setDataLoading(true);
        try {
            setData(await data);
        } catch (error) {
            console.log(error)
        } finally {
            setDataLoading(false);
        }
    }
    // Set data directly when the page is rendered
    useEffect(() => {
        getData(dataSource.fetchMainData(), setMainData) // Get mainData
        getData(dataSource.fetchActivityData(), setActivityData) // Get activityData
        getData(dataSource.fetchPerformanceData(), setPerformanceData) // Get performanceData
        getData(dataSource.fetchSessionsData(), setSessionsData) // Get sessionsData
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!mainData || !activityData || !performanceData || !sessionsData) {
        return
    }

    return (
        <DataContext.Provider value={{ mainData, activityData, performanceData, sessionsData, isDataLoading }}>
            {children}
        </DataContext.Provider>
    );

}
export default DataProvider