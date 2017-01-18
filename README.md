# SmartTable

# Run Front End
---
---
Live-reload
webpack-dev-server





# Database Setup Instructions
---
---
  1. Pull the latest changes from github
  2. Open pgAdmin and create a database named 'smart_table'
  3. Open a 'QueryTool' panel in pgAdmin for the smart_table database
  4. Copy the script in '/BACK_END/db_setup_scripts/initialize-database.sql' then paste and run it in pgAdmin
  5. Open '/BACK_END/demo_config.js' and follow the instructions in the file
    Make sure to **COPY** and **RENAME** demo_config.js, otherwise you risk accidentally pushing your postgres password to the repository.
  6. Open a terminal, and navigate to the BACK_END folder.
  7. Run 'npm install'
  8. Run 'nodemon'
  9. The back end should now be running and ready to receive requests! If not, I can help.
  To test this, go to 'http://localhost:1701' and you should see a simple page with some buttons. This is a page I use to test end points, and show what the response data looks like

# Endpoint Documentation
---
---

  *If you are running on your local machine, all of these requests are preceded by 'http://localhost:1701'*

## Authorization End points  =   =   =   =
---

### Login 
---
  **POST  /api/auth/login**
  **Description:** 
  This endpoint checks provided credentials to log in a user

  *NOTE: currently, only restaurants can log in. Customer login to be implemented*

  **Request Body:**
  ```javascript
  {
      email:'<USER EMAIL HERE>',
      password:'<USER PASSWORD HERE>'
  }
  ```

  **Success Response:**
  A json object of data for the logged in user
  HTTP status 200
  ```javascript
  {
      email: 'rest1@rest1.com',
      restaurant_id: 5,
      account_id: 1,
      name: 'Squat & Gobble',
      address: '1234 Main',
      city: 'Provo',
      state: 'Utah',
      phone_number: '801-555-1234'
  }
  ```

  **Failure Response(s):**
  A failure message
  HTTP status 422
  ```javascript
  "Incorrect email/password combination"
```

### Logout
---
  **POST /api/auth/logout**
  **Description:** 
  This endpoint logs the signed in user out of current session

  **Request Body:**
  No request body

  **Success Response:**
  HTTP status 200

  **Failure Response(s):**
  Thi endpoint will only fail on a server-side error
  HTTP status 500

## User Account End points  =   =   =   =   =
---

### Create Restaurant Account
---
  **POST /api/account/restaurant**
  **Description:**
  This end point creates a restaurant account, sets that account as the current user (logged in) and returns a restaurant JSON object.

  **Request Body:**
  A JSON object describing the restaurant to be created
  ```javascript
  {
      "email": "restaurant@example.com",
      "password":"qwerty",
      "name":"Waffle House",
      "address": "1234 Main",
      "city": "Beaverton",
      "state":"Oregon",
      "phone_number":"503-555-1234"
  }
  ```

  **Success Response:**
  A JSON object containing the newly created restaurant
  HTTP status 200

  **Failure Response(s):**
  * Internal Server Error
    HTTP status 500
  * Account already exists for entered email
    HTTP status 422
    ```javascript
    "Account already exists for that email address"
    ```

### Create Customer Account
---
  **POST /api/account/customer**
  **Description:**
  This end point creates a customer account, sets that account as the current user (logged in) and returns a customer JSON object.

  **Request Body:**
  A JSON object describing the customer to be created
  ```javascript
  {
      "email": "customer@example.com",
      "password":"qwerty",
      "first_name":"John",
      "last_name":"Doe"
  }
  ```

  **Success Response:**
  A JSON object containing the newly created customer
  HTTP status 200

  **Failure Response(s):**
  * Internal Server Error
    HTTP status 500
  * Account already exists for entered email
    HTTP status 422
    ```javascript
    "Account already exists for that email address"
    ```

## Menu End Points  =   =   =   =   =   =

### Create a Menu
---
  **POST /api/menu**
  **Description:**
  The endpoint will create a menu from a provided JSON object.
  Requires a restaurant to be logged in to use this resource.

  **Request Body:**
  ```javascript
  {
      "category":"Drinks",
      "description":"A list of tasty drinks",
      "banner_url":"url-to-a-picture-for-the-menu"
  }
  ```

  **Success Response:**
  A JSON Object containing the newly created menu, with it's id
  ```javascript
  {
      "id":1,
      "category":"Drinks",
      "description":"A list of tasty drinks",
      "banner_url":"url-to-a-picture-for-the-menu"
  } 
  ```

  **Failure Responses:**
  Server side error
  HTTP status 500
  An error object or message

  User not logged in
  HTTP status 401
  ```javascript
  "You must be logged in as a restaurant to use this resource"
  ```

### Get Menu by ID
---
  **GET /api/menu/:menu_id**
  **Description:** 
  The endpoint will retrieve a menu object, containing a list the menu's menu items.
  You must be logged in in order to use this end point. A non-logged in user will get a 401 error code
  If a user requests a menu that is not tied to their account, they will get an empty response

  **Request Params:**
  menu_id - the id of the menu to be retrieved.

  **Success Response:**
  A JSON object containing the requested menu and its menu items
  HTTP status 200
  ```javascript
    {
        id: 1,
        restaurant_id: 5,
        category: "Drinks",
        description: "Refreshing Drinks",
        sort_num: 2,
        banner_url: "NA",
        menu_items: [{
            id: 1,
            menu_id: 1,
            price: 159,
            name: "Soda",
            description: "Sprite, Coca-cola, Rootbeer, Dr. Pepper",
            notes: "Free Refills",
            allergy_warning: "NA",
            ingredients: "HFC, Flavoring",
            photo_url: "http://assets.nydailynews.com..."
        }, {
            id: 2,
            menu_id: 1,
            price: 599,
            name: "Beer",
            description: "Budweiser, Skol, Guinness",
            notes: ".50 Refills",
            allergy_warning: "NA",
            ingredients: "Contains Alcohol",
            photo_url: "https://www.guinness.com/media/1538/..."
        }]
    }
  ```
  **Failure Response(s):**
  Server side error
  HTTP status 500

  No menu found for the logged in user and menu_id
  HTTP status 200
  ```javascript
  {}
  ```

  User not logged in
  HTTP status 401
  ```javascript
  "You must be logged in as a restaurant to use this resource"
  ```

### Update a Menu
  ** PUT  /api/menu**
  **Description:**
  The endpoint will update a menu from a provided JSON object.
  Requires a restaurant to be logged in to use this resource.

  **Request Body:**
  A JSON object containing the menu to be updated.
  The id specifies which menu to update 
  ```javascript
  {
    "id":1,
    "category":"Drinks",
    "description":"A list of tasty drinks",
    "banner_url":"url-to-a-picture-for-the-menu"
  }
  ```
  
  **Success Response:**
  Menu updated
  HTTP status 200
  A JSON object containing the updated menu
  
  **Failure Responses:**
  Server side error
  HTTP status 500

  No menu found for the given ID
  HTTP status 422

  User not logged in
  HTTP status 401
  ```javascript
  "You must be logged in as a restaurant to use this resource"
  ```

### Delete a Menu
  **DELETE  /api/menu/:menu_id**
  **Description:**
  This end point deletes a menu

  **Request Params:**
  menu_id - The integer id of the menu to be deleted

  **Success Response:**
  Menu Deleted
  HTTP status 200
  A JSON object containing the deleted menu.


  **Failure Responses:**
  Server side error
  HTTP status 500

  No menu found for the given ID
  HTTP status 422

  User not logged in
  HTTP status 401
  ```javascript
  "You must be logged in as a restaurant to use this resource"
  ```

### Get detailed list of menus
  **GET  /api/menu/list/details**
  **Description:**
  Get a list of menus for the logged in restaurant. Does include menu items
  Must be logged in as a restaurant to use.

  **Request Params:**
  N/A

  **Success Response:**
  Menu list returned, with menu items.
  HTTP status 200
  An array of menu objects
  ```javascript
  [
    {
      "id": 1,
      "restaurant_id": 5,
      "category": "Drinks",
      "description": "Refreshing Drinks",
      "sort_num": 2,
      "banner_url": "NA"
    },
    {
      "id": 2,
      "restaurant_id": 5,
      "category": "Burgers",
      "description": "Fresh Cooked Meat",
      "sort_num": 1,
      "banner_url": "NA"
    }
  ]
  ```

  **Failure Responses:**
  Server side error
  HTTP status 500

  User not logged in
  HTTP status 401
  ```javascript
  "You must be logged in as a restaurant to use this resource"

### Get summary list of menus
  **GET  /api/menu/list/summary**
  **Description:**
  Get a list of menus for the logged in restaurant. Does not include menu items
  Must be logged in as a restaurant to use.

  **Request Params:**
  N/A

  **Success Response:**
  Menu list returned
  HTTP status 200
  An array of menu objects, each containing an array of menu item objects
  ```javascript
  [
      {
          "id": 1,
          "restaurant_id": 5,
          "category": "Drinks",
          "description": "Refreshing Drinks",
          "sort_num": 2,
          "banner_url": "NA",
          "menuItems": [
              {
                  "id": 1,
                  "menu_id": 1,
                  "price": 159,
                  "name": "Soda",
                  "description": "Sprite, Coca-cola, Rootbeer, Dr. Pepper",
                  "notes": "Free Refills",
                  "allergy_warning": "NA",
                  "ingredients": "HFC, Flavoring",
                  "photo_url": "http://assets.nydailynews.com/polopoly_fs/1.2124847.1424636064!/img/httpImage/image.jpg_gen/derivatives/article_750/soda23n-1-web.jpg"
              },
              {
                  "id": 2,
                  "menu_id": 1,
                  "price": 599,
                  "name": "Beer",
                  "description": "Budweiser, Skol, Guinness",
                  "notes": ".50 Refills",
                  "allergy_warning": "NA",
                  "ingredients": "Contains Alcohol",
                  "photo_url": "https://www.guinness.com/media/1538/guinness_draught_spritzr06bg1_resized_1600-h.jpg?anchor=center&mode=crop&quality=75&width=750"
              }
          ]
      },
      {
          "id": 2,
          "restaurant_id": 5,
          "category": "Burgers",
          "description": "Fresh Cooked Meat",
          "sort_num": 1,
          "banner_url": "NA",
          "menuItems": [
              {
                  "id": 3,
                  "menu_id": 2,
                  "price": 199,
                  "name": "Hamburger",
                  "description": "A Basic Hamburger",
                  "notes": "Uses our special sauce",
                  "allergy_warning": "Gluten, Peanuts",
                  "ingredients": "Bun, Beef, Lettuce, Tomato, Onions",
                  "photo_url": "http://assets.historyhole.com/wp-content/uploads/2016/07/05010901/hamburger-iStock_000008300965_Medium-1024x780_br5vtp.jpg"
              },
              {
                  "id": 4,
                  "menu_id": 2,
                  "price": 249,
                  "name": "Cheeseburger",
                  "description": "A Basic Cheeseburger",
                  "notes": "Uses our special sauce",
                  "allergy_warning": "Gluten, Peanuts",
                  "ingredients": "Bun, Beef, Lettuce, Tomato, Onions, Cheese",
                  "photo_url": "http://dolcecarini.com/wp-content/uploads/2014/07/Cheeseburger.jpg"
              }
          ]
      }
  ]
  ```

  **Failure Responses:**
  Server side error
  HTTP status 500

  User not logged in
  HTTP status 401
  ```javascript
  "You must be logged in as a restaurant to use this resource"

