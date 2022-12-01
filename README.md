# Development

### Link to Deployed Website
If you used the stencil code, this is `https://zanyzebra175.github.io/basketball-shop`

### Goal and Value of the Application

The goal of this application is for a user to be able to shop for a collection of basketball-related items, rangings from shoes to basketballs to arm sleeves. The user can select from multiple companies all in one place, and can sort by pricing (either low to high or high to low). This allows for the user to gain access to a well-rounded basketball marketplace as opposed to navigating different company sites. 

### Usability Principles Considered

In considering usability, it was important that the item cards were sorted out in a way that was easy to navigate for the user. The images have alternative text, and dropdown buttons are used to create an intuitive way to filter and sort through the available items. The buttons colors have been selected such that they are easily distinguishable from the rest of the platform. 

### Organization of Components

There are components for each basketball item card presented on the platform, as well as an aggregator component for the bottom of the page where the user can see the items they have added to the cart as well as the total price of the cart. There is also functionality to remove items from the cart through the aggregator component. Props are passed in to both component types, such as the cart, total, and functions to update the cart. State is used within the main app class for each of the component such that the state of each component is updated after user interaction. 

### How Data is Passed Down Through Components

The componenets are used as tags directly in the App return function, with the variables needed being passed in to the components as props. Since the components themselves have the necessary HTML for display, they can be used directly as inputs in the App class. 

### How the User Triggers State Changes

The user can trigger state changes by interacting with any button or dropdown on the platform, which will then prompt calls to change state dependent on which specific button or dropdown is pressed. For example, if a user chooses to order by price, a state change will be triggered that calls on a sorting function in the app class to re-order the basketball item components. 

Sources: 

https://bobbyhadz.com/blog/react-center-div#:~:text=js%2C%20set%20its%20display%20property,be%20horizontally%20and%20vertically%20centered.


https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/

https://getcssscan.com/css-buttons-examples


https://react-bootstrap.github.io/components/navbar/