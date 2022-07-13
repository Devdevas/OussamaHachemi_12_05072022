
import { createContext, useState, useEffect } from "react";
import { MockDataSource } from "./MockDataSource";
import { ApiDataSource } from "./ApiDataSource";

export const DataContext = createContext();

function DataProvider({ children }) {
    const [mainData, setMainData] = useState([]);
    const [activityData, setActivityData] = useState([]);
    const [sessionsData, setSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);

    const url = new URL(window.location.href);
    const path = url.pathname
    const id = path.substring(path.lastIndexOf('/') + 1)

    const dataSource = new MockDataSource(id)
    // const dataSource = new ApiDataSource(id)

    const [isDataLoading, setDataLoading] = useState(false);

    const getMainData = async () => {
        setDataLoading(true);
        setMainData(await dataSource.getMainData());
        setDataLoading(false);
    }
    const getActivityData = async () => {
        setDataLoading(true);
        setActivityData(await dataSource.getActivityData());
        setDataLoading(false);
    }
    const getPerformanceData = async () => {
        setDataLoading(true);
        setPerformanceData(await dataSource.getPerformanceData());
        setDataLoading(false);
    }
    const getSessionsData = async () => {
        setDataLoading(true);
        setSessionsData(await dataSource.getSessionsData());
        setDataLoading(false);
    }

    useEffect(() => {
        getMainData()
        getActivityData()
        getPerformanceData()
        getSessionsData()
    }, []);

    if (!mainData.data || !activityData.data || !performanceData.data || !sessionsData.data) {
        return
    }

    return (
        <DataContext.Provider value={{ mainData, activityData, performanceData, sessionsData, isDataLoading }}>
            {children}
        </DataContext.Provider>
    );

}
export default DataProvider