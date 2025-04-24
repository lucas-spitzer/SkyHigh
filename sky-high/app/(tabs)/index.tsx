import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CourseCard {
  id: string;
  title: string;
  image: any;
}

const courses: CourseCard[] = [
  {
    id: '1',
    title: 'ASTB-E',
    image: require('../../assets/images/ASTB-E.png'),
  },
  {
    id: '2',
    title: 'AFOQT',
    image: require('../../assets/images/AFOQT.png'),
  },
  {
    id: '3',
    title: 'FAA Guide',
    image: require('../../assets/images/FAA-Guide.png'),
  },
];

export default function LearnScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Courses</Text>
        <View style={styles.grid}>
          {courses.map((course) => (
            <Pressable
              key={course.id}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}>
              <Image
                source={course.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>{course.title}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontFamily: 'Fredoka_600SemiBold',
    fontSize: 32,
    color: '#0a3161',
    marginBottom: 24,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  card: {
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  cardImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#E5E7EB',
  },
  cardTitle: {
    fontFamily: 'Fredoka_500Medium',
    fontSize: 16,
    color: '#0a3161',
    padding: 12,
    textAlign: 'center',
  },
});