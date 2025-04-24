import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Send } from 'lucide-react-native';
import { useState } from 'react';

// Mock data structure for messages
interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! How can I help you today?',
    isUser: false,
    timestamp: new Date('2024-01-20T10:00:00'),
  },
  {
    id: '2',
    text: 'I need help with my studies.',
    isUser: true,
    timestamp: new Date('2024-01-20T10:01:00'),
  },
  {
    id: '3',
    text: 'I can help you with that! What subject would you like to focus on?',
    isUser: false,
    timestamp: new Date('2024-01-20T10:01:30'),
  },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Mock AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message. I\'m here to help!',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Chat</Text>
      
      <ScrollView 
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageWrapper,
              message.isUser ? styles.userMessageWrapper : styles.aiMessageWrapper,
            ]}
          >
            <View
              style={[
                styles.message,
                message.isUser ? styles.userMessage : styles.aiMessage,
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type your message..."
          placeholderTextColor="#666"
          multiline
          onSubmitEditing={sendMessage}
          selectionColor="#0a3161"
        />
        <Pressable 
          style={styles.sendButton} 
          onPress={sendMessage}
        >
          <Send size={24} color="#0a3161" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 32,
    color: '#0a3161',
    fontFamily: 'Fredoka_600SemiBold',
    paddingVertical: 16,
    textAlign: 'center',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messagesContent: {
    paddingTop: 16,
    gap: 16,
  },
  messageWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  userMessageWrapper: {
    justifyContent: 'flex-end',
  },
  aiMessageWrapper: {
    justifyContent: 'flex-start',
  },
  message: {
    maxWidth: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  userMessage: {
    backgroundColor: '#ECECEC',
  },
  aiMessage: {
    backgroundColor: '#87ceeb',
  },
  messageText: {
    fontSize: 16,
    color: '#0a3161',
    fontFamily: 'Fredoka_400Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#F3F4F6',
    gap: 12,
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    fontSize: 16,
    color: '#0a3161',
    fontFamily: 'Fredoka_400Regular',
  },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});