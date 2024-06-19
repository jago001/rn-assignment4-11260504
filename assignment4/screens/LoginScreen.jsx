import { View, Text,StyleSheet, TextInput, Pressable,Image } from 'react-native'
import React, {useState} from 'react'

export default function LoginScreen({navigation}) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const handleLogin = () =>{
        navigation.navigate('Home', {name,email})
    }

  return (
    <View>
        <View style={styles.login}>
            <Text style={styles.title}>Jobizz</Text>
            <View style={styles.welcome}>
                <Text style={styles.subTitle}>Welcome Back</Text>
                <Image source={require('../assets/images/waving.png')} style={styles.hello}/>
            </View>
            <Text style={styles.text}>Let’s log in. Apply to jobs!</Text>
        <View style={styles.form}>
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor={'#AFB0B6'}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={'#AFB0B6'}
        />
        </View>
        <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>
    </View>
    <View style={styles.alt}>
        <View style={styles.line}/>
        <Text style={styles.altText}>Or continue with</Text>
        <Text style={styles.line}/>
    </View>
    <View style={styles.altIcons}>
        <Pressable style={styles.btn}><Image source={require('../assets/images/apple.png')}style={styles.icons}/></Pressable>
        <Pressable style={styles.btn}><Image source={require('../assets/images/google.png')}style={styles.icons}/></Pressable>
        <Pressable style={styles.btn}><Image source={require('../assets/images/fb.png')}style={styles.icons}/></Pressable>
    </View>
    <Text style={styles.link}>Haven’t an account?<Text style={styles.register}> Register </Text></Text>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    login:{
        top:100,
    },
    title:{
        color:'#356899',
        fontSize:22,
        fontWeight:600,
        left:24,
    },
    welcome:{
        flexDirection:'row',
        gap:15,
    },
    subTitle:{
        top:5,
        fontSize:24,
        fontWeight:600,
        left:24,
        color:'#0D0D26',
    },
    hello:{
        width:26,
        height:26,
        marginLeft:15,
        top:4,
    },
    text:{
        top:5,
        fontSize:14,
        fontWeight:400,
        left:24,
        opacity:'40%',
        color:'#0D0D26',
    },
    form:{
        top:70,
        marginLeft:40,
    },
    input:{
        height:52,
        width:330,
        borderWidth:1,
        borderRadius:10,
        marginBottom:15,
        borderColor:'#AFB0B6',
        padding:12,
        fontSize:14,
        fontWeight:500,
        color:'#000000',
    },
    button:{
        backgroundColor:'#356899',
        height:52,
        width:330,
        borderRadius:5,
        alignItems:'center',
        marginTop:20,
    },
    buttonText:{
        fontSize:16,
        fontWeight:500,
        color:'#ffffff',
        top:15,
    },
    alt:{
        flexDirection:'row',
        top:150,
        left:24,
    },
    line:{
        height:0.5,
        backgroundColor:'#AFB0B6',
        width:100,
        marginLeft:10,
    },
    altText:{
        color:'#AFB0B6',
        marginTop:-10,
        paddingLeft:10,
        paddingRight:10,
    },
    altIcons:{
        flexDirection:'row',
        top:180,
        alignItems:'center',
        justifyContent:'center',
        gap:45,
    },
    btn:{
        padding:15,
        borderRadius:'50%',
        backgroundColor:'#ffffff',
    },
    icons:{
        height:26,
        width:26,
    },
    link:{
        //left:102,
        top:250,
        fontSize:14,
        fontWeight:400,
        color:'#AFB0B6',
        textAlign:'center',
    },
    register:{
        color:'#356899'
    },
})