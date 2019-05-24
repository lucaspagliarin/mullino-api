[docs](../README.md#mullino-api) > [Pizza](PIZZASINFO.md#pizzas) > [Edges](EDGES.md#edges) > UPDATE edge

**UPDATE edge**
----

  Updates an edge given its ID, and returns the updated json object

* **URL**

    /edges/:id

* **Method:**
  
    `PATCH`
  
*  **URL Params**

    * **Required:**
        
        `id=[integer]`

* **Data Params**

    ```json
    Content-Type: application/json

    {
        "name": "Updated name"
    }

    ```

* **Success Response:**
  
  * **Code:** 200 Ok <br />
    **Content:** 
    ```json
    {
        "addValue": 0,
        "_id": "5ce815301b256a3bd84ecca7",
        "name": "Updated name",
        "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ message: err.message }`

* **Sample Call:**

    ```re
    PATCH http://localhost:3001/edges/5ce815301b256a3bd84ecca7
    Content-Type: application/json

    {
        "name": "Updated name"
    }
    ```

* **Notes:**
