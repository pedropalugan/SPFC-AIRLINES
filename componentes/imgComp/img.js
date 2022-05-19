import { Image, StyleSheet} from 'react-native';

export default function ImgMenor(){
    return(
        <Image source={require('../../assets/Escudo-São-Paulo.png')} style={styles.img} />
    );
}

const styles = StyleSheet.create({
    img:{
        width: 350,
        height: 350,
        marginTop: 50,
        marginBottom: 50,
    },
})