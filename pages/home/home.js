import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Img from '../../componentes/imgComp/img';


function Home({ navigation }){
    return(
        <View style={styles.mainContent}>
            <Img />
            <Text style={styles.desc}>Bem vindo ao São Paulo Arlines</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Options')}><Text style={styles.btnTxt}>Clique para continuar</Text></TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({

    desc:{
        fontSize: 25,
        fontWeight: 700,
        marginBottom: 75,
    },
    mainContent:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },  
    button:{
        backgroundColor: 'red',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius: 10,
    },
    btnTxt:{
        color: "#FFF",
        fontSize: 20,
        fontWeight: 600,
    }
})