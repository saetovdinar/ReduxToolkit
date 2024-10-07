'use client';
import styles from './card.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import {  Card,Space, Image } from 'antd';
import Spinner from '@/spinner/Spinner';
export default function CardPage() {
  const movie = useSelector((state: RootState) => state.movie.selectedMovie);
  const loading = useSelector((state: RootState) => state.movie.isLoading);

  return (
    
    <Spinner isLoading={loading}>
      <Space className={styles.cont}>
      <Card
        className={styles.card}
        hoverable
        style={{ width: 250 }}
        cover={<Image className={styles.img} alt="Movie img" src={movie.Poster} />}
      >
      </Card>
      <Space direction="vertical" className={styles.description}>
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <h2>{movie.Genre}</h2>
        <h2>{movie.Runtime}</h2>
        <h2>Directors:</h2> <p>{movie.Director}</p>
        <h2>Actors:</h2> <p>{movie.Actors}</p>
        <h2>IMDB:</h2> <p>{movie.imdbRating}</p>
      </Space>
      </Space>
    </Spinner>
    
   
  );
}
