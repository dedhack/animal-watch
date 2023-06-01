import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Chair from './tutorial/Chair';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Chair />
      </View>
    </SafeAreaView>
  );
}

export default App;
