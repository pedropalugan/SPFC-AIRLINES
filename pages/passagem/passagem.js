import { Text, View, StyleSheet, TextInput } from 'react-native';
import ImgMenor from '../../componentes/imgMenor/imgMenor';


export default function BuyPassagem(){
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
                    />
                <TextInput style={styles.input}
                    placeholder="xxx"
                    />
                <TextInput style={styles.input}
                    placeholder="12/12"
                    />
                <TextInput style={styles.input}
                    placeholder="José Frederico"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dataContent:{
        display: 'flex',
        flexDirection: 'column',
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
        borderRadius: 5,
    },

})