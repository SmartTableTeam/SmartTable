// You need to set up this file in order for the app to be able to connect to the database properly
// Changes to 'config.js' ARE NOT commited, to protect passwords.

//STEP 1 - make a COPY of this file, and name it 'config.js' keep it in the same folder

//STEP 2 - Put your postgres password where indicated below.

module.exports = {
	sessionSecret: "A17AC62694142981AED411A5A7695",
	port: 1701,
	postgres: {
		password: '<PUT YOUR POSTGRESQL PASSWORD HERE>',
		db_name: 'smart_table'
	}
}
