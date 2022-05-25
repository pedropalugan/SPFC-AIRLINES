import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import ImgMenor from '../../componentes/imgComp/img'

export default function AfterBuy({ navigation }){
    return(
        <View style={styles.imgComp}>
           <ImgMenor />
           <Text style={styles.txt}>Compra confirmada, agradecemos a confiança</Text>
           <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}><Text style={styles.btnTxt}>Voltar a tela inicial</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    imgComp:{
        flex: 1,
        marginLeft: '10%',
        textAlign: 'center',
    },
    btn:{
        backgroundColor: 'red',
        borderRadius: 40,
        marginTop: 50,
        marginRight: '10%',
        height: 45,
    },
    btnTxt:{
        fontWeight: 600,
        fontSize: 22,
        color: '#FFF',
        marginTop: 7,
    },
    txt:{
        marginRight: '10%',
        fontSize: 18,
        fontWeight: 500,
    }
})