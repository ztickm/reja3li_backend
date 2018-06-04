# Reja3li Backend

[![Join the chat at https://gitter.im/reja3li_backend/Lobby](https://badges.gitter.im/reja3li_backend/Lobby.svg)](https://gitter.im/reja3li_backend/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Backend for Reja3li, an app to help you remember to whom you lent your stuff.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Setup
After cloning this repo on your local machine you will have to install the dependencies, you can do it using yarn or npm on your terminal:
```console
yarn install
```
or
```console
npm install
```
After that you should be able to startup the dev server using either
```console
yarn dev
``` 
or
```console
npm run dev
```
You will then be able to send HTTP requests at [localhost:6969](localhost:6969) using an HTTP client.  
If `6969` doesn't suit you as a port number you can edit it in `server.js`  
#### HTTP Clients
##### Insomnia
If you're using [Insomnia](htttps://www.insomnia.rest/) as your HTTP client, you can find an [export file](blob/master/Insomnia_HTTP_Requests.json) for the workspace containing the requests, so you don't have to write them all again.  
After importing the workspace, please read the description [Shift+ Ctrl + ,] for further instructions.
##### Other HTTP Clients
_No guides available yet. If you can add a short guide and/or export files please submit a pull request._

## Built With
* [NodeJS](https://nodejs.org/)
* [expressJS](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/) 
* [Yarn](https://yarnpkg.com/en/)
* [body-parser](https://www.npmjs.com/package/body-parser)

## Authors

* **Salim Mahboubi** - *Initial work* - [ztickm](https://github.com/ztickm)
* **Hanifi Yazid** - *Initial work* - [yazfield](https://github.com/yazfield)

See also the list of [contributors](https://github.com/ztickm/reja3li_backend/contributors) who participated in this project.

## License

This project is licensed under a modified MIT License - see the [LICENSE](LICENSE) file for details