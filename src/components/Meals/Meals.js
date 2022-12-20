import React from "react";

import "./meals.css";

import { DummyData } from "../../assets/data/DummyData";
import SearchBar from "../UI/searchBar/SearchBar";

import MealItem from "./MealItem/MealItem";
import Sidebar from "../sidebar/Sidebar";

function Meals() {
  const meals = DummyData;
  let searchValue;
  const getSearchValue = (value) => {
    searchValue = value;
  };
  return (
    <div className="meals-container">
      <div className="meals-wrapper">
        <div className="search-bar-container">
          <SearchBar onGetSearchValue={getSearchValue} />
        </div>
        <div className="meals-menu">
          <div className="meals-sidebar">
            <Sidebar />
          </div>
          <div className="meals">
            <ul className="meal-lists">
              {meals.map((meal) => (
                <li className="meal-item" key={meal.id}>
                  <MealItem
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    category={meal.category}
                    image={meal.image}
                    description={meal.description}
                    price={meal.price}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meals;
