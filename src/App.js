import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [bookmarks,setBookmark]=useState([])
  const [search,setSearch]=useState("")
  const [images,setImages]=useState([])
  const url="https://api.unsplash.com/photos/?client_id="
  const Access_key="Hyw3O6ipt1PO84ktmJdXDXpviDxkmcfpcQNybmtORmE"
  const secret_key="vCeinKh_wv8HmWBG_OGPxVHYWHIXp_bkmAPcUH0vSUI"
  const data=fetch(url+Access_key,{
    params:{
      query:"apple"
    }
  })
  useEffect(()=>{data.then((res)=>res.json()).then((result)=>{
    let arr=[]
    console.log(result)
    result.map((item)=>arr.push(item.urls.small_s3))
    setImages(arr)
    // console.log(arr)
  }).catch(err=>console.log(err))},[])
 console.log(bookmarks)
  return (
    <div className='main'>
      <header>
        <h1>React Photo Search</h1>
        <button className='bookmarks' onClick={()=>(setImages(bookmarks))}>Bookmarks</button>
      </header>
      <div className='search-container'>
        <input onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder='    Search free high Resolution Images'/>
        <button className='search'>Search</button>
      </div>
      <h5>Bookmarks icons on click will bookmark respective images</h5>
      <div className='img-container'>{
       images.map(item=><div><img  className='image' src={item}/> <div onClick={()=>{setBookmark([...bookmarks,item])}} className='bookmark'>🔖</div></div>)
      }</div>
    </div>
    )
}

export default App;
