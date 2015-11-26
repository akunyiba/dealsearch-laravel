Dealsearch - Node.js + AngularJS App
=================

For the application **Node.js** and **MongoDB** are required.

#### Node.js installation
Download and install the latest version of Node.js from [official website](https://nodejs.org/en/).<br> 
Alternative installation [via package managers](https://nodejs.org/en/download/package-manager/).
> After installing Node.js, you will be available to use Node package manager - npm. You can check yourself for successful installation by typing the `npm` - this should display npm's help information.

#### MongoDB installation
MongoDB needs a folder for storing data, create such you can with the following:
```
sudo mkdir -p /data/db
```

Further instructions on the official website for [Windows](https://docs.mongodb.org/master/tutorial/install-mongodb-on-windows/), [Mac](https://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x/), [Linux](https://docs.mongodb.org/master/administration/install-on-linux/).

#### Download Dealsearch
To download the application enter the following in your console command:
```
git clone https://github.com/akunyiba/dealsearch-node.git
```
Navigate to the project folder::
```
cd dealsearch-node
```

#### Installing Packages

To install the application required packages type following:
```
npm install
```

#### Local server
After completing:
```
sudo mongod
```
in your console, you should see following: `[initandlisten] waiting for connections on port 27017`.
> After running this command, minimize the current window and open a new console - perform next commands in it, because MongoDB server must be running.

#### Database settings
Set up a database connection you can by editing file ** database.js **, which is in the path of the project folder `config / database`:

```javascript
module.exports = {
    url : 'mongodb://127.0.0.1:27017/dealsearch'
};
```
Where `127.0.0.1:27017` responsible for `host:post`, and `dealsearch` it's a name of the database. If the database does not exist - it will be created with the specified name.

#### Seed database with required data

Use following to run seed:
```
node seed
```
As a result, you will see an output: `Successfully created document [10] of City model`. Press `CTRL + C`.

#### Run application
Execute following:
```
node server
```
You will see the following: `App listening on port 8080`.
It means, the application is running. You can view it `http://localhost:8080`.
> By default 8080 is used as port. You can change it by editing file ** server.js **, which is placed in the root folder of the project.
```
var port = 8080;
```