## Full-Stack Social Media App Tutorial with React 19 & Next.js 15 & MySql | React Next.js Full Course.

# helper migration to db sql server:

- Step 1:
  - Copy and run in terminal of project:

```bash
    npm install prisma --save-dev
    npm install @prisma/client
```

and here:

```bash
    npx prisma init
```

- Step 2:

  - Copy and paste to project in folder `prisma/schema.prisma`:

    ```python
        generator client {
            provider = "prisma-client-js"
        }

        datasource db {
            provider = "sqlserver"
            url = env("DATABASE_URL")
        }

        // Example model:
        model User {
            id    Int    @id @default(autoincrement())
            name  String
            email String @unique
        }
    ```

    - In file .env copy and paste:

    ```python
        DATABASE_URL="sqlserver://localhost:1433;initial catalog=namesampledb;user=<username>;password=<password>;encrypt=true;trustServerCertificate=true;"
    ```

- Step 3: migration to db sql server.

  - Copy and run in terminal of project:

  ```base
      npx prisma migrate dev --name init
  ```

## Bonus prisma open browser web:

- In terminal of project copy and run:

```base
    npx prisma studio
```
