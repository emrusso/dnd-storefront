import React, { useEffect, useState, FunctionComponent } from 'react';
import 'whatwg-fetch';

import { EquipmentCategory, EquipmentCategoryReference } from '../types';

const BASE_API_URL = 'https://www.dnd5eapi.co';

interface CategoryProps {
  categoryReference: EquipmentCategoryReference;
}

export const Category: FunctionComponent<CategoryProps> = ({ categoryReference }) => {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState<EquipmentCategory | undefined>(undefined);

  useEffect(() => {
    if (expanded && !details) {
      fetch(`${BASE_API_URL}${categoryReference.url}`, { method: 'GET', headers: {
        'Content-Type': 'application/json'
      } }).then((resp) => {
        resp.json().then((results) => {
          setDetails(results);
        })
      })
    }
  }, [categoryReference.url, details, expanded]);

  return (
    <div>
      <button className="equipment-category__show" onClick={(): void => setExpanded(!expanded)}>
        {categoryReference.name}
      </button>
      {expanded && !details && <div>TODO: loading state</div>}
      {expanded && details && details.equipment.map((equipment) => <p>{equipment.name}</p>)}
    </div>
  );
}
