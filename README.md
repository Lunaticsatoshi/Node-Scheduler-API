# Node Scheduler API
A job scheduling api build using node js to schedule task at a specific date

### 🏗️ Built With

<div>

[<img src="https://img.shields.io/badge/-Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A">](https://nodejs.org/en/)

</div>

---

## 🧩 Getting Started

To get a local copy up and running follow these simple steps.

### Starting the development server with docker 🐳

#### Prerequisites

Make sure you have Docker and docker-compose installed on your machine.

#### Steps to start the server

1. Run the following command in the project directory itself.

      ```sh
      docker build -t node-scheduler-api:latest .
      ```
2. Start the docker container by running the following command in the project directory itself.

      ```sh
      docker run -p 8000:8000 --name=node-scheduler-api node-scheduler-api:latest
      ```

3. Open <http://localhost:8000> to view it in the browser.

### Starting the development server without docker 📡

#### Prerequisites

Make sure you have Node, Redis and TypeScript installed on your machine.

> **_NOTE:_**
>
>_The project was made with node version 14.17._

#### Steps to start the server 

1. Install all depenencies
      ```sh
      yarn install
      ```
1. Start the dev server
      ```sh
      yarn dev
      ```


## 🔐 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
