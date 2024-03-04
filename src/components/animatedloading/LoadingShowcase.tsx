import Loading from './Loading';
import Loaded from './Loaded';
import { useState, useEffect } from 'react';

export default function LoadingShowcase() {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000)
      
    return (
        <div>
         {loading ? <Loading /> : <Loaded />}   
        </div>
    )
}