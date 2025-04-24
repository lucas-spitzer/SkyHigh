import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trophy, Star, Clock } from 'lucide-react-native';

interface Quest {
  id: string;
  title: string;
  description: string;
  reward: string;
  type: 'daily' | 'weekly' | 'achievement';
  progress?: number;
  completed?: boolean;
}

const quests: Quest[] = [
  {
    id: '1',
    title: 'Daily Study Streak',
    description: 'Complete 3 study sessions today',
    reward: '50 XP',
    type: 'daily',
    progress: 1,
  },
  {
    id: '2',
    title: 'Weekly Champion',
    description: 'Complete all daily quests for 7 days',
    reward: '500 XP',
    type: 'weekly',
    progress: 3,
  },
  {
    id: '3',
    title: 'Perfect Score',
    description: 'Score 100% on any practice test',
    reward: '1000 XP',
    type: 'achievement',
    completed: false,
  },
];

export default function QuestsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quests</Text>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {quests.map((quest) => (
          <Pressable
            key={quest.id}
            style={({ pressed }) => [
              styles.questCard,
              pressed && styles.questCardPressed,
            ]}
          >
            <View style={styles.questHeader}>
              <View style={styles.questType}>
                {quest.type === 'daily' && <Clock size={20} color="#0a3161" />}
                {quest.type === 'weekly' && <Star size={20} color="#0a3161" />}
                {quest.type === 'achievement' && <Trophy size={20} color="#0a3161" />}
                <Text style={styles.questTypeText}>
                  {quest.type.charAt(0).toUpperCase() + quest.type.slice(1)}
                </Text>
              </View>
              <Text style={styles.questReward}>{quest.reward}</Text>
            </View>
            
            <Text style={styles.questTitle}>{quest.title}</Text>
            <Text style={styles.questDescription}>{quest.description}</Text>
            
            {quest.progress !== undefined && (
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill,
                      { width: `${(quest.progress / 3) * 100}%` }
                    ]} 
                  />
                </View>
                <Text style={styles.progressText}>{quest.progress}/3</Text>
              </View>
            )}
            
            {quest.completed !== undefined && (
              <View style={styles.completionStatus}>
                <Text style={[
                  styles.statusText,
                  quest.completed ? styles.completedText : styles.pendingText
                ]}>
                  {quest.completed ? 'Completed' : 'In Progress'}
                </Text>
              </View>
            )}
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Fredoka_600SemiBold',
    color: '#0a3161',
    paddingVertical: 16,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  questCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  questCardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  questHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  questType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  questTypeText: {
    color: '#0a3161',
    fontFamily: 'Fredoka_500Medium',
    fontSize: 14,
  },
  questReward: {
    color: '#87ceeb',
    fontFamily: 'Fredoka_600SemiBold',
    fontSize: 16,
  },
  questTitle: {
    fontSize: 18,
    fontFamily: 'Fredoka_600SemiBold',
    color: '#0a3161',
    marginBottom: 8,
  },
  questDescription: {
    fontSize: 14,
    fontFamily: 'Fredoka_400Regular',
    color: '#64748B',
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#87ceeb',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Fredoka_500Medium',
    color: '#0a3161',
  },
  completionStatus: {
    marginTop: 12,
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'Fredoka_500Medium',
  },
  completedText: {
    color: '#10B981',
  },
  pendingText: {
    color: '#F59E0B',
  },
});