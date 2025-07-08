
const heavyFetch = (timeOut) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'Analytics data loaded successfully!' });
        }, timeOut);
    });
};

const Analytics = async () => {
    // This will cause the loading.jsx to show while waiting
    const response = await heavyFetch(10 * 1000);
    
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">
                {response.data}
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <h3 className="font-semibold">Total Users</h3>
                    <p className="text-2xl">1,234</p>
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                    <h3 className="font-semibold">Page Views</h3>
                    <p className="text-2xl">5,678</p>
                </div>
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <h3 className="font-semibold">Conversion Rate</h3>
                    <p className="text-2xl">12.5%</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
