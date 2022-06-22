# Project: Organizable

Keep track of all your projects and task with this revolutionary, never seen
before, application: `organizable`

![https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/bLuKz6eX/21244435-01f6-4956-bf83-707e145c68e4.png?source=viewer&v=86ff0d7a77d8254f1ac7a62f156399d7](https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/bLuKz6eX/21244435-01f6-4956-bf83-707e145c68e4.png?source=viewer&v=86ff0d7a77d8254f1ac7a62f156399d7)

## Resources

- Design: **[here](https://www.figma.com/file/YrRRF3WO0bgdgY6ZwB8QsO/Organizable-JS?node-id=3602%3A1292)**
- API repo: **[here](https://github.com/codeableorg/organizable-api)** (contains a insomnia json file with heroku endpoint)

## **User personas**

There's only one type of user for Organizable application, this will be referred
as "user"

## User **Stories:**

### **User can login**

As an Organizable's user, I am able to login into Organizable app, so that I can
start increasing my productivity with this amazing solution

- Given that I am on login page
- Then I see a form with two fields: username and password
- When I fill current fields and click in `Login` button
- If the credentials were valid
- Then I am redirected to `Main` page.
- And I can start navigating within the boards

### **User can sign up**

As a user, I want to be able to sign up into Organizable app, so that I can
start being part of an amazing community

- Given that I am on sign up page
- Then I see a form with five fields:username, password, email, first name and
  last name.
- When I fill current fields and click in `Sign Up` button
- Then I am redirected to `Main` page.
- And I can create my first boards.

### **User can log out**

As an Organizable's user, I want to be able to logout from Organizable app, so
that I can take a breath and disconnect for a moment.

- Given that I am at any page except Board's page
- Then I see a sidebar
- Then I see a `Logout` option.
- When I click the `Logout` option, then I am redirected to `Login` page.
- And I'm disconnected from the Organizable's app

### **User can edit they profile**

As a Organizable's user, I am able to see my profile, so that I can edit it.

- Given that I am on `Main` page
- Then I see a sidebar
- Then I see a `Profile` option.
- When I click the `Profile` option, then I see a form with my current
  information
- Then I update my information
- When I click the `Update Profile` option, then my info is updated

### **User can delete account**

As a Organizable's user, I am able to delete my account, so that I can stop
using the app.

- Given that I am on `Profile` page
- Then I see a form with my current information
- When I click the `Delete my Account` option, then my info is deleted
- And I'm redirected to `Login` page.

### **User can see Organizable's home**

As a user, I can see Organizable's home, so I can enjoy all the options offered
by the platform

- Given that I am on the main page
- Then I see a sidebar that contains My Boards, Closed Boards, My Profile and
  Log Out
- Then I see a main area that contains boards classified by
  `Starred Boards`and`Boards`
- Then I see a `Create Board`  button that allow user to create a new board.

### **User can create a new board**

As a user, I can create a new board, so that I can track new tasks in a new
environment.

- Given that I am on the main page
- Then I see a `Create board` button
- Then I see a `Board` modal
- Then I fill `Board` details like color and title
- When I click on `Create`
- Then I see a new board created on the main page

### **User can see a hover effect (optional)**

As a user, I can see a hover effect, so that I can see hidden options within
cards

- Given that I am on main page
- Then my pointer hovers any card
- I see `trash` and `star` buttons.

### **User can starred a board**

As a user, I want to be able to highlight relevant notes, so that I can
establish relevance between tasks.

- Given that I am on main page
- Then I see a list of boards
- When I click the "Star" button
- Then the board is positioned at the `Starred Board` group.

### **User can close a board**

As a user, I want to be able to close a board, so that I can delete irrelevant
tasks.

- Given that I am on main page
- Then I see a list of boards
- Then I hover a card
- Then I click a `trash` button
- Then the board is removed from `My Boards` and added to `Closed boards`.

### **User can delete permanently boards**

As a user, I want to be able to delete permanently a board, so that I can delete
non-relevant boards.

- Given that I am on `Closed board’s` page
- Then I see a list of deleted boards
- When I click the `Trash`  button
- Then, my current board will be deleted permanently

### **User can recover a closed board**

As a user, I want to be able to recover a deleted board.

- Given that I am on `Closed board's` page
- Then I see a list of deleted boards
- When I click the arrow up button
- Then current board will be recovered and added to My Boards

HAPPY CODING! 👨‍💻 👨‍💻
