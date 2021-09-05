import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';


export default function AddTodo({ setTodos }) {

    const [text, setText] = useState('')

    const handleChange = (value) => {
        setText(value);
    }

    const submitHandler = text => {

        if (text.length > 3) {

            setTodos(prevTodos => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos,
                ]
            })
            setText("")

        } else {
            Alert.alert('OOPS!', "Todos must be at least three charachters long", [

                { text: "UnderStood", onPress: () => console.log("alert closed") }
            ])
        }


    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={handleChange}
                value={text}
                onSubmitEditing={() => submitHandler(text)}

            />
            <Button onPress={() => submitHandler(text)} title="add todo" color="coral" />
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})