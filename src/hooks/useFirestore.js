import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const useStorage = (data) => {
    const [docs,setDocs] = useState([]);

    useEffect(() => {
        const unsub = db.collection(data).orderBy('createdAt','desc')
            .onSnapshot(snap => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id });
                });
                setDocs(documents);
                console.log(documents);
            });
        return () => unsub();
    }, [data]);

    return { docs };
}

export default useStorage;