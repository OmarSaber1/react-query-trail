import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import './App.css';
import Characters from './pages/Characters.jsx';
import React from 'react'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App container">
        <Characters/>
    </div>
     </QueryClientProvider>
  );
}

export default App;
