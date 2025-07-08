import {Suspense, use} from "react";
import AnalyticsLoading from "@/app/dashboard/analytics/loading";

const heavyFetch = (timeOut) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'Analytics data loaded successfully!' });
        }, timeOut);
    });
};

// Solution 2: Using React's use() hook (React 19+)
const fetchAnalyticsData = heavyFetch(10*1000);

const AnalyticsWithSuspense = () => {
    // use() hook automatically works with Suspense
    const response = use(fetchAnalyticsData);

    return (
        <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Solution 2: With use() hook</h2>
            <p className="text-gray-600 dark:text-gray-300">
                {response.data}
            </p>
        </div>
    );
};


const AnalyticsPage = () => {
    return (
        <div>
            <h1 className={'px-10'}>welcome to analytics dashboard</h1>
            <Suspense fallback={<AnalyticsLoading/>}>
            <AnalyticsWithSuspense/>
                </Suspense>
        </div>
    )
}
export default AnalyticsPage;
