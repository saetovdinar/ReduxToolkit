'use client'
import Link from 'next/link'
import {HeartIcon} from '@/svg/heart';
import { Input, Card, Button, Image } from 'antd';
import styles from "./page.module.scss";
import { RootState } from '../redux/store/store';
import { useSelector, useDispatch } from 'react-redux';
import {setFavorite} from '../redux/features/favorite/favoriteSlice';
import { setSearch, fetchSearch } from '../redux/features/search/searchSlice';
import {fetchMovieId } from '../redux/features/movies/movieSlice';
import Spinner from '@/spinner/Spinner';
export default function Home() {
  const search = useSelector((state: RootState) => state.search.value);
  const movies = useSelector((state: RootState) => state.search.movies);
  const loading = useSelector((state: RootState) => state.search.isLoading);

  const dispatch = useDispatch();
  
  const addToFavorite = (movie: any) => dispatch(setFavorite(movie));
  
    
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearch(e.target.value));
  const getMovies =  () => {
    try{
      dispatch(fetchSearch(search));
  
    } catch (error) {
      console.log(error)
    }
    
  }
  const getMovie = (id: string) => {
    try{
      dispatch(fetchMovieId(id));
  
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Spinner isLoading={loading}>
      <div className={styles.cont}>
        <Input 
      placeholder='Search movies' 
      onChange={changeHandler} 
      value={search} 
      className={styles.search}>

        </Input>
        <Button 
      onClick={getMovies} 
      type="primary" 
      className={styles.button}>
        Search
        </Button>
        <Link href={`/favorite`}>
        <Button className={styles.favorites_button}>Favorites</Button>
        </Link>
        <div className={styles.main_cont}>
        {
        movies?.map((movie, i) => (
          <div key={i}  className={styles.cards_cont}>
            <Link onClick={() => getMovie(movie.imdbID)} key={i} href={`/card`}>
              <Card
                
                hoverable
                style={{ width: 240, height: 350 }}
                cover={<Image 
                width={240} 
                height={300}
                preview={false}
                style={{objectFit: 'cover'}}
                alt="Movie img" 
                src={movie.Poster} />}
                title={movie.Title}
              >
              </Card>
            </Link>
            <HeartIcon 
              className={ styles.heart }
              onClick={() => addToFavorite(movie)}
            />
          </div>
         )
        )}
        
        </div>
        
      </div>
    </Spinner>
    
    
  

  )
}
