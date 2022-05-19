import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import ImgMenor from '../../componentes/imgMenor/imgMenor'
import Input from '../../componentes/input/input'

export default function Cadastro({ navigation }){
    return(
        <View>
        <ImgMenor />
        <View style={styles.inputClass}>
            <Input place='Jericoacoara - CE' label='Destino'/>
            <Input place='12/12/2022' label='Data de nascimento' />
            <Input place='12345678910' label='CPF' />
            <Input place='Rua endereço verídico' label='Endereço' />
            <View style={styles.btnClass}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}><Text style={styles.btnTxt}>Home</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Destino')}><Text style={styles.btnTxt}>Destino</Text></TouchableOpacity>
            </View>
        </View>
        <StatusBar style="auto" />
        </View> 
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 150,
        height: 25,
        backgroundColor: "red",
        borderRadius: 5,
    },
    btnTxt: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 7.5,
    },
    btnClass:{
        marginTop: 20,
        paddingLeft: 15, 
        paddingRight: 15,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})