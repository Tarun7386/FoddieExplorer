import React, { useState } from "react";
import './sheetcss1/AddPlaces.css'

const AddPlaces = () => {
  const [image, setImage] = useState("");
  const [Place, setPlace] = useState("");
  const [FoodItem, setFoodItem] = useState("");
  const [Rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const placeData = {
      image,
      Place,
      FoodItem,
      Rating,
    };
    
    let missingFields = [];
    if (!image) missingFields.push("Image URL");
    if (!Place) missingFields.push("Place");
    if (!FoodItem) missingFields.push("Food Item");
    if (!Rating) missingFields.push("Rating");

    if (missingFields.length > 0) {
      alert(`Please fill the ${missingFields.join(", ")}`);
      return;
    }
    
    try {
      const response = await fetch(
        "https://foodie-explorer-deploy.vercel.app/addplaces/add_places",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(placeData),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Successfully submitted");
        window.location.reload();
      } else {
        alert("Submission failed: " + result.message);
      }

      setImage("");
      setPlace("");
      setFoodItem("");
      setRating("");
    } catch (error) {
      alert("Error submitting: " + error.message);
    }
  };

  return (
    <div className="place-card">
      
      <div className="inner-card1">
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="inner-card2">
        <label>Place:</label>
        <input
          type="text"
          value={Place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div className="inner-card3">
        <label>Food Item:</label>
        <input
          type="text"
          value={FoodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
      </div>
      <div className="inner-card4">
        <label>Rating:</label>
        <input
          type="number"
          value={Rating}
          onChange={(e) => {
            // Ensure the value stays between 1 and 5
            if (e.target.value >= 1 && e.target.value <= 5) {
              setRating(e.target.value);
            }
          }}
          min="0"  // Minimum allowed value
          max="5"  // Maximum allowed value
          step="1" // Step value for incrementing
        />
      </div>
      <button className="addplaces-btn" onClick={handleSubmit} type="button">
        Add Place
      </button>
    </div>
  );
};

export default AddPlaces;
