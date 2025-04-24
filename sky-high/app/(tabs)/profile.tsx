import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch } from 'react-native';
import { User } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Account</Text>
        
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <User size={48} color="#0a3161" />
          </View>
          <Text style={styles.levelText}>Level 10</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#A0AEC0"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          
          <Pressable style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </Pressable>
        </View>

        <Text style={[styles.title, styles.preferencesTitle]}>Preferences</Text>
        
        <View style={styles.section}>
          <View style={styles.preferenceRow}>
            <Text style={styles.preferenceLabel}>Notifications</Text>
            <Switch 
              trackColor={{ false: '#D1D5DB', true: '#0a3161' }}
              thumbColor={'#ffffff'}
              ios_backgroundColor="#D1D5DB"
            />
          </View>
          
          <View style={styles.preferenceRow}>
            <Text style={styles.preferenceLabel}>Email Updates</Text>
            <Switch 
              trackColor={{ false: '#D1D5DB', true: '#0a3161' }}
              thumbColor={'#ffffff'}
              ios_backgroundColor="#D1D5DB"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Fredoka_600SemiBold',
    color: '#0a3161',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  levelText: {
    fontSize: 18,
    color: '#0a3161',
    fontFamily: 'Fredoka_500Medium',
  },
  preferencesTitle: {
    marginTop: 32,
  },
  section: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 4,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Fredoka_500Medium',
    color: '#0a3161',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#0a3161',
    backgroundColor: '#ffffff',
    marginBottom: 16,
    fontFamily: 'Fredoka_400Regular',
  },
  resetButton: {
    backgroundColor: '#0a3161',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Fredoka_600SemiBold',
  },
  preferenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  preferenceLabel: {
    fontSize: 16,
    color: '#0a3161',
    fontFamily: 'Fredoka_500Medium',
  },
});