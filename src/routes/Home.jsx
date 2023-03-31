import React, { useState, useCallback } from "react";
import Home from './Home';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // function to handle adding a new recipe
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      description,
      image
    };

    // pass the new recipe object to the parent component
    onAddRecipe(newRecipe);

    // clear the form fields
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>

      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        required
      />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);

  // define event handlers using useCallback
  const handleAddRecipe = useCallback((newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }, [recipes]);

  const handleDeleteRecipe = useCallback((id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }, [recipes]);

  const handleUpdateRecipe = useCallback((id, updatedRecipe) => {
    const index = recipes.findIndex((recipe) => recipe.id === id);
    const updated = { ...recipes[index], ...updatedRecipe };
    setRecipes([
      ...recipes.slice(0, index),
      updated,
      ...recipes.slice(index + 1)
    ]);
  }, [recipes]);

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div>
      <h1>Recipe App</h1>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <div className="recipe-card-buttons">
              <button onClick={() => handleDeleteRecipe(recipe.id)}>
                Delete
              </button>
              <button
                onClick={() =>
                  handleUpdateRecipe(recipe.id, { title: "New Title" })
                }
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Home onLogout={handleLogout}/>
    </div>
  );
};

export default RecipeApp;
