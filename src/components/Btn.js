import { StyleSheet,Button, Alert } from "react-native-web";

export default function Btn ({nameButton}){
    return (
        <Button
        style={styles.button}
        title={nameButton}
        onPress={() => Alert.alert('Botão login')}
     />
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        height: 40,
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
})