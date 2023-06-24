/*import { createContext ,useContext} from "react"


//creating an object
const moods = {
    happy: '😄',
    sad: '😢'
};

//sharing current moods across multiple disconnected components
//one part of he app might b happy so we use context provider to scope the happy mood
const MoodContext = createContext(moods);
export default function App(moods){
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
*/
 
import { createContext, useContext } from "react";

const moods = {
  happy: '😄',
  sad: '😢'
};

const MoodContext = createContext(moods);

export default function App() {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
    </MoodContext.Provider>
  );
}

function MoodEmoji() {
  const mood = useContext(MoodContext);
  return <p>{mood}</p>;
}
