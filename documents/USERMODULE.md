# HRIS Users 

* [What contains in `HRIS Users`?](#what-is-hris-users)
* [User `Entity`](#entity-columns)
  * [`Entity` class definition](#entity-class-definition)
  * [`Entity` CRUD operation](#entity-crud-operation)
    * [`Entity POST`](#entity-post)
    * [`Entity GET`](#entity-get)
    * [`Entity DELETE`](#entity-delete)
    * [`Entity PUT`](#entity-put)

### What is HRIS Users?
[HRHIS](http://hrhis.moh.go.tz/login) User is the system user for the [HRHIS](http://hrhis.moh.go.tz/login) system. In the [HRHIS](http://hrhis.moh.go.tz/login) system there are four `Entities` associated with user operation:-

* User `Entity`
* User Role `Entity`
* User Authority `Entity`
* User Group `Entity`

### User `Entity`
* #### `Entity` class definition
```typescript
export class User extends UserCoreProps {
  static plural = 'users';

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  firstName: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  middleName: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  surname: string | null;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  phoneNumber: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  jobTitle: string | null;

  @Column({
    type: 'timestamp without time zone',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  lastLogin: Date | null;

  @Column({
    type: 'timestamp without time zone',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  expiryDate: Date | null;

  @Column({
    type: 'timestamp without time zone',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  deletedDate: Date | null;

  @Column({ type: 'boolean', nullable: true })
  enabled: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
    default: () => 'NULL::varchar',
  })
  token: string | null;
```

* #### `Entity` CRUD Operation
    `Local URL: localhost:3000/api/users/`

    `If you have a registered domain: http://www.example.com/api/users/`
    * `Entity POST`

        `URL: localhost:3000/api/users/`
        ```typescript
            {
                "firstName":    "John",
                "middleName":   "Bob",
                "surname":      "Doe",
                "username":     "John Bob Doe",
                "email":        "johnbobdoe@example.com",
            }
        ```

        * `Entity POST RESPONSE`

        ```typescript
            {
                "firstName": "John",
                "middleName": "Bob",
                "surname": "Doe",
                "username": "John Bob Doe",
                "email": "johnbobdoe@example.com",
                "created": "2019-10-03T13:03:53.403Z",
                "lastUpdated": "2019-10-03T13:03:53.403Z",
                "uid": "JaXlPhzMIiH",
                "token": "Sm9obiBCb2IgRG9lOnVuZGVmaW5lZA==",
                "enabled": true,
                "phoneNumber": null,
                "jobTitle": null,
                "lastLogin": null,
                "expiryDate": null,
                "deletedDate": null
            }
        ```
    * `Entity PUT`

        `URL: localhost:3000/api/users/JaXlPhzMIiH`
        ```typescript
            {
                "firstName":    "John",
                "middleName":   "Bob",
                "surname":      "Doe",
                "username":     "John Doe",
                "email":        "johnbobdoe@example.com",
                "uid": "JaXlPhzMIiH"
            }
        ```
        * `Entity UPDATE RESPONSE`

        ```typescript
            {
                "message": "Object with id JaXlPhzMIiH updated successfully."
            }
        ```
    * `Entity GET`
    
        `URL: localhost:3000/api/users/{INSERT ENTITY UID}`

        `Example::: localhost:3000/api/users/JaXlPhzMIiH`

        * `Entity GET RESPONSE`
        ```typescript
            {
                "created": "2019-10-03T13:03:53.403Z",
                "lastUpdated": "2019-10-03T13:03:53.403Z",
                "uid": "JaXlPhzMIiH",
                "username": "John Bob Doe",
                "firstName": "John",
                "middleName": "Bob",
                "surname": "Doe",
                "email": "johnbobdoe@example.com",
                "phoneNumber": null,
                "jobTitle": null,
                "lastLogin": null,
                "expiryDate": null,
                "deletedDate": null,
                "enabled": true,
                "token": "Sm9obiBCb2IgRG9lOnVuZGVmaW5lZA==",
                "userRoles": [

                ],
                "userGroups": [

                ],
                "dashboardCharts": [

                ],
                "messages": [

                ],
                "forms": [

                ],
                "organisationUnits": [

                ],
                "userSettings": null
            }
        ```
    * `Entity DELETE`
    
        `URL: localhost:3000/api/users/{INSERT ENTITY UID}`

        `Example::: localhost:3000/api/users/JaXlPhzMIiH`

        * `Entity DELETE RESPONSE`
        ```typescript
            {
                "message": "Object with id JaXlPhzMIiH deleted successfully"
            }
        ```
