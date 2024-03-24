
# School App with NestJS and GraphQL

This is a school management application built with NestJS and GraphQL. It allows administrators, teachers, and students to manage various aspects of a school, such as courses, classes, students, and grades.

## Features

- Authentication: Users can sign up and log in securely.
- Authorization: Different roles (admin, teacher, student) have different levels of access.
- CRUD Operations:
  - Admins can manage courses, classes, and students.
  - Teachers can manage classes they teach and enter grades for students.
  - Students can view their courses and grades.
- GraphQL API: Provides a flexible and efficient way to interact with the backend.

## Installation

Before running the application, make sure you have [Node.js](https://nodejs.org) and [NestJS CLI](https://docs.nestjs.com/cli/overview) installed on your machine.

1. Clone this repository:

   ```bash
   git clone https://github.com/iahmedelbayaa/School-graphql-nestjs
   ```

2. Navigate to the project directory:

   ```bash
   cd school-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and provide the necessary environment variables. Example:

   ```plaintext
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/school
   JWT_SECRET=your_secret_key
   ```

2. Configure the database connection according to your setup.

## Usage

To start the server, run:

```bash
npm start
```

The GraphQL playground will be available at `http://localhost:3000/graphql` by default.

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
