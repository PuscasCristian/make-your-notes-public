import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import Thought from './Thought';

const DisplayThoughts = () => {
    const [thoughts, setThoughts] = useState(null);
    useEffect(() => {
        db.collection('thoughts')
        .orderBy('timestamp', 'desc' )
        .onSnapshot(snapshot => {
          let thoughts = [];
          snapshot.forEach(doc => {
            thoughts.push({...doc.data(), id: doc.id});
          });
          setThoughts(thoughts);
        })
      }, []);

    return (
        <div className="thoughts-grid-wrapper">
            { thoughts && thoughts.map(thought => (
                <Thought key={thought.id} title={thought.title} note={thought.note} />
            ))}
        </div>
    )
}

export default DisplayThoughts
