import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import CharactersGroup from './src/components/characters/CharactersGroup';
import Container from './src/components/Layout/Container';
import PageButton from './src/components/Pageniation/PageButton';
import useData from './src/hooks/useData';
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);

  const {handlePageChange, error, isLoading} = useData(
    setCharacters,
    setPageNumbers,
  );

  return (
    <Container>
      <ScrollView>
        {isLoading ? (
          <Text style={styles.loading}>Loading ...</Text>
        ) : (
          <CharactersGroup data={characters} />
        )}
        {error ? <Text>{error}</Text> : null}
      </ScrollView>
      <View style={styles.buttonHolder}>
        {Array.from({length: pageNumbers}, (_, i) => i + 1).map(item => {
          return (
            <PageButton
              number={item}
              key={item}
              handlePageChange={handlePageChange.bind(null, item)}
            />
          );
        })}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonHolder: {
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  loading: {
    color: '#fff',
    height: '100%',
  },
});

export default App;
