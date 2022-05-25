import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'

import ImgMenor from '../../componentes/imgMenor/imgMenor'


export default function Cadastro({ navigation }) {

    const [place, setPlace] = useState('')
    const [birth, setBirth] = useState('')
    const [cpf, setCpf] = useState('')
    const [address, setAddress] = useState('')
    const [warn, setWarn] = useState('')

    function verifyInput() {
        if(place == '' || birth == '' || cpf == '' || address == ''){
            setWarn('Favor inserir todos os campos corretamente')
        }
        else{
            navigation.navigate('Destino')
            setWarn('')
        }
        setAddress('')
        setBirth('')
        setCpf('')
        setPlace('')
    }


    return (
        <View>
            <ImgMenor />
            <View style={styles.inputClass}>
                <View style={styles.labelClass}>
                    <Text style={styles.txt}>Destino</Text>
                    <Text style={styles.txt}>Data de nascimento</Text>
                    <Text style={styles.txt}>Endereço</Text>
                    <Text style={styles.txt}>CPF</Text>
                </View>
                <View style={styles.textInputClass}>
                    <TextInput
                        placeholder='Jericoacoara - CE'
                        style={styles.input}
                        onChangeText={place => setPlace(place)}
                        value={place}
                    />
                    <TextInput
                        placeholder='12/12/12'
                        style={styles.input}
                        onChangeText={birth => setBirth(birth)}
                        value={birth}
                    />
                    <TextInput
                        placeholder='12345678910'
                        style={styles.input}
                        onChangeText={cpf => setCpf(cpf)}
                        value={cpf}
                    />
                    <TextInput
                        placeholder='Rua endereço verídico'
                        style={styles.input}
                        onChangeText={address => setAddress(address)}
                        value={address}
                    />
                </View>
            </View>
            <Text style={styles.warnTxt}>{warn}</Text>
            <View style={styles.btnClass}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}><Text style={styles.btnTxt}>Home</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={verifyInput}><Text style={styles.btnTxt}>Destino</Text></TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 150,
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
    },
    btnClass: {
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputClass: {
        width: 300,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 15,
    },
    input: {
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#000',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        marginLeft: 20,
    },
    txt: {
        marginTop: 5,
        fontWeight: 600,
    },
    labelClass:{
        flex: 1,
        height: 300,
        justifyContent: 'space-between',
    },
    textInputClass:{
        flex: 1,
        height: 300,
        justifyContent: 'space-between',
    },
    warnTxt:{
        color:'red',
        textAlign: 'center',
    },
})