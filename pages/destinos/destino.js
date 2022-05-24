import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImgMenor from '../../componentes/imgMenor/imgMenor';


export default function Destino({ navigation }){
    return(
        <View style={styles.mainContent}>
            <ImgMenor />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Passagem')}>
                    <Text style={styles.btnTxt}>Fortaleza - CE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Passagem')}>
                    <Text style={styles.btnTxt}>Florianópolis - SC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Passagem')}>
                    <Text style={styles.btnTxt}>Porto Alegre - RS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Passagem')}>
                    <Text style={styles.btnTxt}>Salvador - BA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: 'red',
        width: "45%",
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius:40,
        marginBottom: "5%",
    },
    btnTxt:{
        fontWeight: 600,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    btnContainer:{
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})