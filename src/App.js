import { useEffect,  useState} from "react";

import MessageBox from "./components/MessageBox";

import { api } from './services/api'


function App() {
  const [data, setData] = useState([])

    useEffect(() => {
        const loadComments = async () => {
            const response = await api.get('comments')

            setData(response.data)
        }

        loadComments()
    }, [])

  return (
    <div className="App">
      <ul>
      {data.map((item) => (
        <li key={item.id}>
          <MessageBox comment={item} />
        </li>
      ))}
      </ul>
      
    </div>
  );
}

export default App;
