import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from "@components/Button";
import {useState} from "react";

const CreateProductScreen = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    
    const resetFields = () => {
        setName('');
        setPrice('');
    };
    
    const validateInput = () => {
        if (!name) {
            setErrors('Name is required');
            return false;
        }
        
        if (!price) {
            setError('Price is required');
            return false;
        }
        
        if (isNaN(parseFloat(price))) {
            setError('Price is not a number');
            return false;
        }
        
        return true;
    };
    
    const onCreate = () => {
        if (!validateInput()) {
            return;
        }
        
        console.warn('Creating Product: ', name);
        
        // Save in the database
        
        resetFields();
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Input Name"
                style={styles.input}
            />
            
            <Text style={styles.label}>Price ($)</Text>
            <TextInput 
                value={price}
                onChangeText={setPrice}
                placeholder="9.99"
                style={styles.input}
                keyboardType="numeric"
            />
            
            <Text style={styles.error}>{errors}</Text>
            <Button onPress={onCreate} text='Create' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    
    label: {
        color: 'gray',
        fontSize: 16,
    },
    
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },
    
    error: {
        color: 'red',
    }
});

export default CreateProductScreen;