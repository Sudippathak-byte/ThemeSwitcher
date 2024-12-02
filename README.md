React Theme Toggle with Product Card Example

This project demonstrates a simple React application that includes:

A theme toggle feature (light/dark mode).
A card component displaying product details like image, title, price, rating, and an action button.
Features
Theme Management:
Users can toggle between light and dark themes, managed via React Context.
Reusable Card Component:
The Card component dynamically renders product details.
Interactive UI:
Button actions trigger specific alerts based on the card clicked.





React Theme Toggle with Product Card Example
This project demonstrates a simple React application that includes:

A theme toggle feature (light/dark mode).
A card component displaying product details like image, title, price, rating, and an action button.
Features
Theme Management:
Users can toggle between light and dark themes, managed via React Context.
Reusable Card Component:
The Card component dynamically renders product details.
Interactive UI:
Button actions trigger specific alerts based on the card clicked.





Components Overview
1. contexts/theme.js
Exports a ThemeContext and useTheme hook to manage light/dark mode.
Provides methods (lightTheme, darkTheme) for switching themes.
2. components/Card.jsx
Props:
image: URL for the product image.
title: Name of the product.
price: Product price in USD.
rating: Product rating (out of 5 stars).
buttonText: Text for the button.
onButtonClick: Function triggered on button click.
Dynamic star rating based on the rating prop.
3. components/ThemeBtn.jsx
Uses the useTheme hook for theme management.
Displays a toggle switch for switching between light and dark themes.
4. App.jsx
Manages the application's theme state (light or dark) and propagates it through ThemeProvider.
Renders:
A ThemeBtn for theme toggling.
Three Card components with sample data.

![Screenshot_2024-12-02_04-10-15](https://github.com/user-attachments/assets/a76461b1-8958-4e25-a981-8fede835c550)
![Screenshot 2024-12-02 095556](https://github.com/user-attachments/assets/d8a6d479-80d3-442e-aefb-b7daf67b82de)
