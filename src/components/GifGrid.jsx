import { CardGif } from './CardGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GifGrid = ({category}) => {
    const { images , isloading } = useFetchGifs(category)
  return (
    <>
        <hr />
        <p className='Titlegrid'> Resultados para la busqueda: <span>{category}</span></p>
        {
            isloading && (<h3>Cargando ....</h3>)
        }
        <div className='card-grid'>
            {images.map((el)=>{
                return(
                   <CardGif key={el.id} {...el}/>
                )
            })}
        </div>
    </>
  )
}
