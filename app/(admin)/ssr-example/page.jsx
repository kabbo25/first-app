// SSR Example - Server Component (default in App Router)
async function SSRPage() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await data.json();
    
    return (
        <div className="bg-blue-100 p-8 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-black">SSR Example</h1>
        </div>
    );
}

export default SSRPage;