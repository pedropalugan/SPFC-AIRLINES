import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ImgMenor from '../../componentes/imgMenor/imgMenor';
import { useState } from 'react';


export default function BuyPassagem({ navigation }){

    const [numCard, setCard] = useState('');
    const [cvv, setCvv] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [warn, setWarn] = useState('')

    function verifyBuy(){
        if(numCard == '' || cvv == '' || date == '' || name == ''){
            setWarn('Favor inserir todos os dados corretamente')
        }
        else{
            navigation.navigate('AfterBuy')
            setWarn('')
        }
        setCard('')
        setCvv('')
        setDate('')
        setName('')
    }

    return(
        <View>
            <ImgMenor />
            <View style={styles.mainContent}>
                <View style={styles.dataContent}>
                    <Text style={styles.label}>Número do cartão: </Text>
                    <Text style={styles.label}>CVV: </Text>
                    <Text style={styles.label}>Data de vencimento: </Text>
                    <Text style={styles.label}>Nome do titular: </Text>
                </View>
                <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder="xxxx.xxxx.xxxx.xxxx"
                    onChangeText={numCard => setCard(numCard)}
                    value={numCard}
                    />
                <TextInput style={styles.input}
                    placeholder="xxx"
                    onChangeText={cvv => setCvv(cvv)}
                    value={cvv}
                    />
                <TextInput style={styles.input}
                    placeholder="12/12"
                    onChangeText={date => setDate(date)}
                    value={date}
                    />
                <TextInput style={styles.input}
                    placeholder="José Frederico"
                    onChangeText={name => setName(name)}
                    value={name}
                    />
                </View>
            </View>
    <Text style={styles.warn}>{warn}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")}><Text style={styles.btnTxt}>Home</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={verifyBuy} ><Text style={styles.btnTxt}>Comprar</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dataContent:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height:125,
        marginTop: 10,
    },
    mainContent:{
        marginTop: '10%',
        display:'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginLeft:'5%',
    },  
    input:{
        borderWidth: 0.25,
        borderColor:'black',
        borderRadius: 7,
        paddingLeft: 7,
        paddingBottom: 7,
        paddingTop: 7,
    },
    inputContainer:{
        height: 150,
        justifyContent: 'space-between',
    },
    label:{
        fontWeight:500,
        fontSize: 16,
    },
    btn:{
        backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 50,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        width: '40%',
        textAlign: 'center',
    },
    btnContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
    },
    btnTxt:{
        fontWeight: 600,
        fontSize: 20,
        color: '#FFF',
    },
    warn:{
        marginTop: 25,
        color: 'red', 
        textAlign: 'center',
    }
})