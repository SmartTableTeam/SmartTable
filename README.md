# SmartTable

## Run Front End
---
---
Live-reload
webpack-dev-server





## Database Setup Instructions
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

## Endpoint Documentation
---
---

*If you are running on your local machine, all of these requests are preceded by 'http://localhost:1701'*

### Login 
---
**POST  /api/auth/login**
**Description:** 
This endpoint checks provided credentials to log in a user

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

**Failure Response:**
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

**Failure Response:**
Thi endpoint will only fail on a server-side error
HTTP status 500


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
**Failure Response:**
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
"You need to login to view this resource"
```

