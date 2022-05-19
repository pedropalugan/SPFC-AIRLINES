import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ImgMenor from '../../componentes/imgMenor/imgMenor';
import { NavigationHelpersContext } from '@react-navigation/native';



export default function Options({ navigation }) {
    return (
        <View>
            <ImgMenor />
            <View>
                <Text style={styles.des}>Selecionar uma função</Text>
                <View style={styles.btnContent}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cadastro')}><Text style={styles.btnTxt}>Fazer Cadastro</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn}><Text style={styles.btnTxt}>Comprar passagem</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn}><Text style={styles.btnTxt}>Destinos Nacionais</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}><Text style={styles.btnTxt}>Home</Text></TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

    des: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 600,
        fontSize: 24,
        marginTop: 20,
    },
    btnContent: {
        display: "flex",
        flexDirection: 'column',
        height: 300,
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 50,
    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: "red",
        borderRadius: 5,
    },
    btnTxt: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 7.5,
    }
})