import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native'
import socket from '../../socket'
import { TEACHERS } from '../../data/data';
import Message from '../../components/chat/Message';

const ChatScreen = props => {

    const teacherId = props.navigation.getParam('teacherId');

    const teacher = TEACHERS.find(item => item.id === teacherId)

    const [message, setMessage] = useState('');
    const [answer, setAnswer] = useState('')
    const [chat, setChat] = useState([])


    useEffect(() => {
        socket.emit('join', { user: { id: '01', name: 'Jose' }, teacher });
        socket.on('message', (answer) => {
            setAnswer(answer)

            setChat([...chat, { type: 'answer', answer }])

            console.log(chat)
        })


    }, [])

    const sendMessage = () => {
        setMessage(message)
        setChat([...chat, { type: 'message',message}])
        socket.emit('message', {teacher,message})
    }

    return (
        <View style={styles.chat}>
            <ScrollView style={styles.contChat}>



                {chat.map((item, i) =>
                    item.type === 'answer' ?
                        <View key={i} style={styles.answerLeft}>
                            <Message image={teacher.image} message={item.answer} />
                        </View>

                        :
                        <View key={i} style={styles.answerRight}>
                            <Message image={require('../../assets/images.png')} message={item.message} />
                        </View>

                )}


            </ScrollView>
            <View style={styles.actions}>
                <TextInput style={styles.messageInput} value={message} onChangeText={(text) => setMessage(text)} />
                <Button title="Enviar" onPress={() => sendMessage()} />

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    chat: {
        flexDirection: 'column',
        height: '100%'
    },
    contChat:{
       flexDirection:'column'
    },
    answerLeft:{
       alignSelf:'flex-start'
    },
    answerRight:{
        alignSelf:'flex-end'
    },
    actions: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        marginBottom: 5,
        borderRadius: 20
    },
    messageInput: {
        width: '80%',
        borderLeftWidth: 0.5,

    }

})

export default ChatScreen;