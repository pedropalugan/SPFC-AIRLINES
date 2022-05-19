import { Image, StyleSheet, View, Text} from 'react-native';

export default function ImgMenor(){
    return(
        <View style={styles.optionContainer}>
        <Text style={styles.title}>São Paulo Arlines</Text>
        <Image source={require('../../assets/Escudo-São-Paulo.png')} style={styles.img} />
        </View>
        
    );
}

const styles = StyleSheet.create({
    img:{
        width: 150,
        height: 150,
        marginTop: 15,
        marginBottom: 10,
    },
    optionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#000',
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 700,
        marginTop: 75,
        marginLeft: 20,
    },
})