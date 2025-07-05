'use client';
import { useEffect, useState } from 'react';

function CSRPage() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/2')
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            });
    }, []);
    
    return (
        <div className="bg-green-100 p-8 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-black">CSR Example</h1>
            <button onClick={()=>console.log('hello')} className='text-2xl text-black'>click me </button>
        </div>
    );
}

export default CSRPage;