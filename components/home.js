import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, useWindowDimensions, ScrollView, Pressable, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Nu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Nu
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [name, setName] = useState('');
    const [nameModalVisible, setNameModalVisible] = useState(false);
    const [answerTitle, setAnswerTitle] = useState('Lorem Ipsum');
    const minHeightAnswer = 20; 
    const midHeightAnswer = 60;
    const maxHeightAnswer = 100;
    const [answerHeight, setAnswerHeight] = useState(minHeightAnswer);
    const [expandButton, setExpandButton] = useState(true);
    const windowHeight = useWindowDimensions().height;
    const date = new Date();
    const hour = date.getHours();

    const expandHandler = () => {
        if(answerHeight == maxHeightAnswer){
            for (let i = maxHeightAnswer; i > midHeightAnswer; i--) {
                setTimeout(() => {
                    setAnswerHeight((answerHeight) => answerHeight - 1);
                }, i * 5);
            }
            setExpandButton(true);
        }
        if(answerHeight == midHeightAnswer){
            for (let i = midHeightAnswer; i < maxHeightAnswer; i++) {
                setTimeout(() => {
                    setAnswerHeight((answerHeight) => answerHeight + 1);
                }, i * 5);
            }
            setExpandButton(true);
        }
        if(answerHeight == minHeight){
            for (let i = minHeight; i < midHeightAnswer; i++) {
                setTimeout(() => {
                    setAnswerHeight((answerHeight) => answerHeight + 1);
                }, i * 5);
            }
            setExpandButton(false);
        }
    };
    return (
        <View style={{height: windowHeight, backgroundColor: '#fff'}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={nameModalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={{position: "absolute", top: 10, right: 10}} onPress={() => setNameModalVisible(!nameModalVisible)}>
                              <FontAwesomeIcon icon={faClose} size={21} color={"black"} />
                            </TouchableOpacity>
                            <Text style={styles.modalText}>Fill in your last name!</Text>
                            <TextInput
                                style={{height: 40, marginBottom: 20, maxWidth: "80%", textAlign: 'center'}}
                                onChangeText={text => setName(text)}
                                value={name}
                                placeholder="Enter your Name..."
                                multiline={true}
                                textAlignVertical="top"
                                maxLength={80}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setNameModalVisible(!nameModalVisible)}>
                                <Text style={styles.textStyle}>Get Answer</Text>
                            </Pressable>
                        </View>
                        </View>
                    </View>
                </Modal>
            <Text style={styles.greet}>{hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good evening"}, Rohit JG!</Text>
            <View style={styles.questionContainer}>
                <Text style={styles.questionInputTitle}>Magic Begins Here!</Text>
                <TextInput
                    style={styles.questionInput}
                    onChangeText={text => setQuestion(text)}
                    value={question}
                    placeholder="Enter your Question"
                    multiline={true}
                    textAlignVertical="top"
                />
                <TouchableOpacity style={styles.askButton} onPress={() => setNameModalVisible(true)}>
                        <Text  style={{color: '#fff'}}>✨ Sprinkle Some Magic! ✨</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.answerContainer, {height: `${answerHeight}%`}]}>
                <Text style={styles.answerContainerTitle}>Your spell is casted here!</Text>
                <Text maxLength={18} style={styles.answerTitle}>{answerTitle}</Text>
                <ScrollView style={styles.answerScroll}>
                    <Text style={styles.answerText}>
                        {answer}
                    </Text>
                </ScrollView>
                <View style={{flex: 1, flexDirection: "row",width: "100%" , position: "absolute", bottom: 10, left: 10}}>
                    <TouchableOpacity style={styles.rateButton}>
                        <Text>👍</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rateButton}>
                        <Text>👎</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={expandHandler}
                    style={[styles.expandButton, {opacity: !expandButton ? 1 : 0.7}]}
                    disabled={expandButton}>
                        <FontAwesomeIcon icon={faExpandArrowsAlt} size={21} color={"white"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    greet: {
        textAlign: 'center',
        color: '#000',
        fontSize: 23,
        paddingTop: 10,
        fontFamily: 'sans-serif',
        letterSpacing: 1,
    },
    container: {
        height: "100%",
        backgroundColor: '#fff',
    },
    streamPicker: {
        height: 10,
        width: 150,
        fontSize: 24,
        backgroundColor: '#fff',
        color: '#000',
        alignSelf: 'center',
        marginTop: 0,
    },
    askButton:{
        height: 45,
        width: 200,
        backgroundColor: '#000',
        borderRadius: 10,
        marginTop: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        position: "absolute",
        bottom: 4,
    },
    questionContainer: {
        height: "30%",
        width: "80%",
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#000',
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        alignSelf: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8
    },
    questionInput:{
        height: "65%",
        width: "100%",
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 0,
    },
    questionInputTitle: {
        width: "100%", 
        fontFamily: 'sans-serif', 
        letterSpacing: 4, 
        textAlign: 'center',
        color: "#555",
    },
    answerContainer: {
        // height: "60%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        borderWidth: 0,
        borderColor: '#000',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingLeft: 10,
        paddingRight: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8
    },
    answerContainerTitle: {
        width: "100%",
        fontFamily: 'sans-serif',
        letterSpacing: 4,
        textAlign: 'center',
        color: "#555",
        marginTop: 10,
    },
    answerTitle: {
        width: "100%",
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: "#555",
        fontSize: 32,
    },
    answerText: {
        width: "100%",
        fontFamily: 'sans-serif',
        textAlign: 'left',
        color: "#555",
        fontSize: 18,
        marginTop: 20 
    },
    answerScroll:{
        maxHeightAnswer: "70%",
    },
    rateButton: {
        width: 35,
        height: 35,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 5,
        marginRight: 5
    },
    expandButton: {
        width: 35,
        height: 35,
        position: 'absolute',
        right: 0,
        backgroundColor: 'rgb(0,0,0)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 5,
        marginRight: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: 'black',
      },
      buttonClose: {
        backgroundColor: 'black',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});