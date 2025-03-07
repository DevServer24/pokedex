import Navbar from "./components/ui/subcomponents/MainNavbar"
import useFetch from "./hooks/useFetch"


const App = () => {
  const ApiUrl = import.meta.env.API_1
  const {data,error,loading} = useFetch(ApiUrl);

  return (
    <div>
      <Navbar/>

      <div >

      </div>
    </div>
  )
}

export default App