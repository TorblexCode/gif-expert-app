import { useFetchGifs } from "../hooks"
import { GridItems } from "./GridItems"

export const GifGrid = ({ category }) => {
 const {images,isLoading} =useFetchGifs(category)

  return(
  <>
    { isLoading && <h2>Loading...</h2>}
    <h3>{category}</h3>
    <div className="card-grid">
    {images.map((img) =>(
     <GridItems key={img.id} {...img} />
    )
    )}
    </div> 
  </>
  )
}
