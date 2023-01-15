import React from 'react';
import Form from './Form';
import Section from './Section';
import Contacts from './Contacts';
import Filter from './Filter';

function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export default App;
