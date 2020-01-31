<p align="center">
	<img src="https://user-images.githubusercontent.com/30529572/72455010-fb38d400-37e7-11ea-9c1e-8cdeb5f5906e.png" />
	<h2 align="center"> Women Techies-Backend </h2>
	<h4 align="center"> This is the backend for the premier event of DSC called Women Techies, a women centric hackathon. It will be used in the app and the website for the women techies <h4>
</p>

---
[![DOCS](https://img.shields.io/badge/Documentation-see%20docs-green?style=flat-square&logo=appveyor)](INSERT_LINK_FOR_DOCS_HERE)
  [![UI ](https://img.shields.io/badge/User%20Interface-Link%20to%20UI-orange?style=flat-square&logo=appveyor)](INSERT_UI_LINK_HERE)


## Functionalities
- Standalone Script for parsing csv file, generating passwords and uploading it to database
- A login and registration route

<br>


## Instructions to run

* Pre-requisites:
	-  Node.js installed with npm enabled
	-  An active internet connection to connect to the cloud database
	-  All the npm packages mentioned in the package.json

* To setup the environment and install packages
```bash
npm init
npm install @hapi/joi bcryptjs body-parser csv-parser csv-writer dotenv express mongoose nodemon fs uuid4 jsonwebtoken
```

* To start the API

```bash
npm start
```
* To run the standalone script for the parsing and uploading of CSV files

```bash
cd standalone-script/
node parse.js
```

<br>

## Contributors

* [  Md Hishaam Akhtar  ]((https://github.com/mdhishaamakhtar))



<br>
<br>

<p align="center">
	Made with :heart: by DSC VIT
</p>
