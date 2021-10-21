import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    // this adds styles to the interior of the scroolview
    // setting padding bottom gives a space in the bottom for the
    // input if you scroll to the end of the list
    paddingTop: 135,
    paddingBottom: 184,
  },
});
