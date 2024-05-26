import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import TopBar from '../components/TopBar'
import Buttons from '../components/Buttons'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card';
import Stack from '@mui/material/Stack';

import './Home.css'

const Home = () => {
    const [data,setData]=useState([])
    const [orgdata,setOrgdata]=useState([])
    const [stauts,setStatus]=useState(false);
    const [statusMes,setStatusMes]=useState("");
    const [serverity,setServerity]=useState("");
    const navigate=useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(data.length / cardsPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
    useEffect(()=>{
        const fetchData=async()=>{
           try {
            const response=await fetch(`https://media-content.ccbp.in/website/react-assignment/resources.json`)
            let resData= await response.json();
            console.log(resData.length);
           if(resData.length>=1){
            setData(resData)
            setOrgdata(resData);
            // setServerity("success")
            // setStatusMes("");
           }else{
            setStatus(true)
            setServerity("warning")
            setStatusMes("There is no data to display");
           }
           } catch (error) {
            console.log(error)
            setStatus(true)
            setServerity("error")
            setStatusMes(error.message);



           }
           
           setTimeout(() => {
            setStatus(false)
        }, 3000);
        }
        fetchData();
    },[])
const goAhead=()=>{
    navigate('/newresource');
}
  return (
    <div>
      <div>
        <TopBar  goAhead={goAhead} buttonStatus={true}/>
      </div>
      <div>
        <Buttons data={orgdata}setData={setData}/>
        <div className='innerContainerHome'>
        <div className='search'>
        <SearchBar data={data} setData={setData}/>
       {stauts&&  <Stack sx={{ width: '20%' }} alignItems="right" spacing={2}>
        <Alert serverity={serverity}>{statusMes}</Alert>
        </Stack>}
        </div>
        
        <div className='inner'>
            
        {currentCards.map((item, index) => (
                    <Card
                        key={index}
                        logo={item.icon_url}
                        companyName={item.title}
                        service={item.category}
                        url={item.link}
                        description={item.description}
                    />
                ))}
        </div>
        <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
