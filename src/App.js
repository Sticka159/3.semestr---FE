import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingList from './ShoppingList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/shopping-list" element={<ShoppingList />} />
            </Routes>
        </Router>
    );
}

export default App;
