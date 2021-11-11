import React, { FunctionComponent, useEffect, useState } from 'react';
import 'whatwg-fetch';

import { EquipmentCategoryReferenceList } from './types';
import { Category } from './components/Category';

import './App.css';

const BASE_API_URL = 'https://www.dnd5eapi.co';

const App: FunctionComponent = () => {
  const [categoryList, setCategoryList] = useState<EquipmentCategoryReferenceList | null>(null);

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/equipment-categories`, { method: 'GET', headers: {
      'Content-Type': 'application/json'
    } }).then((resp) => {
      resp.json().then((results) => setCategoryList(results));
    });
  }, []);

  return (
    <div className="App">
      {categoryList && (
        <div>
          {categoryList.results.map((category) => <Category categoryReference={category} />)}
        </div>
      )}
    </div>
  );
}

export default App;
