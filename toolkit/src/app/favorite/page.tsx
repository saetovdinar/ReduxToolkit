'use client'
import styles from './page.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store/store';
import {  Card, Image } from 'antd';
import {HeartIcon} from '@/svg/heart';
import {deleteFavorite} from '@/redux/features/favorite/favoriteSlice';
export default function FavoritePage() {
  const dispatch = useDispatch();
  const favorite = useSelector((state: RootState) => state.favorite.favotiteStore);
  const removeMovie = (id: string) => {
    dispatch(deleteFavorite(id))
  }
  return (
    <div className={styles.main_cont}>
       {
        favorite?.map((item, i) => (
          <div key={i}  className={styles.cards_cont}>
           
              <Card
                key={i} 
                hoverable
                style={{ width: 240, height: 350 }}
                cover={<Image 
                width={240} 
                height={300}
                preview={false}
                style={{objectFit: 'cover'}}
                alt="Movie img" 
                src={item.Poster} />}
                title={item.Title}
              >
              </Card>
          
            <HeartIcon 
              className={styles.heart}
              onClick={() => removeMovie(item.imdbID)}
           
            />
          </div>
         )
        

     
          
      

        )}
    </div>
  );
}
