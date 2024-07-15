## Full-Stack Social Media App Tutorial with React 19 & Next.js 15 & MySql | React Next.js Full Course.

# helper migration to db sql server:

- Step 1:
  - Copy and run in terminal of project:

```typescript
    npm install prisma --save-dev
    npm install @prisma/client
```

and here:

```typescript
    npx prisma init
```

- Step 2:

  - Copy and paste to project in folder `prisma/schema.prisma`:

    ```typescript
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

    ```typescript
    DATABASE_URL =
      "sqlserver://localhost:1433;initial catalog=namesampledb;user=<username>;password=<password>;encrypt=true;trustServerCertificate=true;";
    ```

- Step 3: migration to db sql server.

  - Copy and run in terminal of project:

  ```typescript
      npx prisma migrate dev --name init
  ```
  
  - Refresh models prisma client:
    
  ```typescript
     npx prisma genergate
  ```

## Bonus prisma open browser web:

- In terminal of project copy and run:

```typescript
    npx prisma studio
```

# helper webhooks (create user; update user):

- Links:

* Docs: [go to](https://clerk.com/docs/integrations/webhooks/sync-data)

* Add endpoints url here: [go to](https://dashboard.clerk.com/apps/app_2iH0pYYsJE9uoWcLmpqNp5UMvO6/instances/ins_2iH0paD4r2mNV9rp8qP9D74Mz8M/webhooks)

# helper cloudinary:

- Links:

* Docs: [go to](https://console.cloudinary.com/settings)

* Guide next cloudinary dev: [go to](https://next.cloudinary.dev/clduploadwidget/basic-usage)
