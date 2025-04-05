// components/QuotePage.jsx
import React from 'react';
import QuoteForm from '../components/QuoteForm'; // Import the existing QuoteForm component
import { Container } from 'react-bootstrap';

const QuotePage = () => {
  return (
 <Container>
          <QuoteForm />
       </Container>
  );
};

export default QuotePage;
