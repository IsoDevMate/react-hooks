import { createContext ,useContext} from "react"
import React from 'react';

//reating an object
const moods = {
    happy: '😄',
    sad: '😢'
};

//sharing current moods across multiple disconnected components
//one part of he app might b happy so we use context provider to scope the happy mood
const MoodContext = createContext(moods);
function App(props){
    return (
<MoodContext.Provider values={moods.happy}>
  <MoodEmoji/>
</MoodContext.Provider>
    );
}
//useContext allows us to consume/access urrent value from the parent provider
function MoodEmoji(){
    const mood = useContext(MoodContext);
    //return <p>{mood.happy}</p>;
    return <MoodContext.Consumer>
         {mood => <p>{mood}</p>}
    </MoodContext.Consumer>
}