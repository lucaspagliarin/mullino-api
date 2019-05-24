[docs](../README.md#mullino-api) > [Pizza](PIZZASINFO.md#pizzas) > [Edges](EDGES.md#edges) > CREATE edge

**CREATE edge**
----

  Inserts a new edge into the database and returns the created json object

* **URL**

    /edges

* **Method:**
  
    `POST`
  
*  **URL Params**

    No Params

* **Data Params**

    ```json
    Content-Type: application/json

    {
        "name": "Teste",
        "addValue": 0
    }

    ```

* **Success Response:**
  
  * **Code:** 201 Created <br />
    **Content:** 
    ```json
    {
        "addValue": 0,
        "_id": "5ce815301b256a3bd84ecca7",
        "name": "Test input",
        "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ message: err.message }`

* **Sample Call:**

    ```re
    POST http://localhost:3001/edges
    Content-Type: application/json

    {
        "name": "Test input",
        "addValue": 0
    }
    ```

* **Notes:**