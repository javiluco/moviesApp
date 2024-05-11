import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({ route }:Props) => {

  const { movieId } = route.params;
  const { isLoading, movie,} = useMovie(movieId);
  //const {movieId} = useRoute().paramas;

  if(isLoading){
    return( <Text>Cargando...</Text>)
  }

  console.log({ movieId });

  return (
    <View>
        {/* header */}
        <MovieHeader poster={movie!.poster} originalTitle={movie!.originalTitle} title={movie!.title} />
    </View>
  )
}
