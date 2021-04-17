import React, {useState, useEffect} from 'react'
import axios from 'axios';
function Home() {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        
        async function getdata() {
            try {
            const res= await axios.get('https://www.googleapis.com/books/v1/volumes?q=%22');
            setDetail(res.data);
            }
             catch (err){
                 console.log(err);
             }
         }
        getdata();
    },[]);
    console.log(detail.data);
    return (
        <div className="home">
            <div className ="book_detail">
                {detail.map((item) => {
                    return(
                        <div>
                        <ol>
                            <li>{item.id}</li>
                            <li>{item.description}</li>
                            <li>{item.title}</li>
                        </ol>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
