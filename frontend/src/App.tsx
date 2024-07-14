import { doc } from 'firebase/firestore/lite';
import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "BookFlix";
    navigate("/home");
  }, []);

  return (
    <>
      <div className="bg-primary">Hello</div>
    </>
  )
}

export default App
