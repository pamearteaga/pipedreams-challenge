# Pipedreams challenge

## Running the project locally

### MacOS environment setup
#### Installing MongoDB
For this project, it is necessary to have a working DB so I recommend installing MongoDB in case you don't have it already:

1. Install Homebrew and update Homebrew:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew update
```

2. Install MongoDB:
```
brew tap mongodb/brew
brew install mongodb-community
```
#### Cloning
Since you're reading this you have probably already cloned the project's repository but anyway:
```
git clone https://github.com/pamearteaga/pipedreams-challenge
```

### Steps to run the project:

1. Open a new terminal and install the dependencies:
```
$npm install
```

2. Start the DB:
```
brew services start mongodb-community
```

3. Open a new terminal and run the server:
```
npm run server
```

4. Open a new terminal and start the proyect:
```
npm start
```

5. As well as the DB, the server and the project must be running at the same time. 
If everything was succesful you should be able to see the web in the browser:
```
http://localhost:3000/
```

### To run the tests:
```
npm test
```

### To turn off the DB:
```
brew services stop mongodb-community
```

