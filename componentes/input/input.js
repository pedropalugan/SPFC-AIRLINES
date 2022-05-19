import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function Input(props){
    return(
    <View style={styles.inputClass}>
        <Text style={styles.txt}>{props.label}</Text>
        <TextInput 
        placeholder={props.place}
        style={styles.input}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    inputClass:{
        width: 300,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 15,
    },
    input:{
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#000',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        marginLeft: 20,
    },
    txt:{
        marginTop: 5,
        fontWeight: 600,
    }
})