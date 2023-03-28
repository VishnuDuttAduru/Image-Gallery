import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';


const Images = ({search}) => {
    const [photoData, setPhotoData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchImageData = async (page = 1) => {
        try{
            const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${search ? search : '""'}&per_page=20&page=${page}&format=json&nojsoncallback=1`)
            setPhotoData(response.data)
            setTotalPages(response.data.photos.pages);
            console.log(response.data);
        } catch(error) {
            console.error("Error fetching the data:", error);
        }
    }

    useEffect(() => {
        fetchImageData();
    }, [search])

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      fetchImageData(pageNumber);
    }

    return (
        <>
        <div className='image-container'>
            {
                photoData?.photos?.photo?.map( ({farm,server,id,secret}) => {
                    return <div key={id}><img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}/></div>
                })
            }
            
        </div>
        <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
        </>
        
    )
}

export default Images
