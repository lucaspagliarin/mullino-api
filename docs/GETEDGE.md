[docs](../README.md#mullino-api) > [Pizza](PIZZASINFO.md#pizzas) > [Edges](EDGES.md#edges) > GET one edge

**GET one edge**
----
  Returns a json object of the corresponding ID's edge

* **URL**

  /edges/:id

* **Method:**
  
  `GET`
  
*  **URL Params**

   * **Required:**
 
        `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "addValue": 0,
        "_id": "5ce8053a1416200988632c11",
        "name": "Catupiry",
        "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ message: "Cannot find the Edge" }`

* **Sample Call:**

    `GET http://localhost:3001/edges/5ce8053a1416200988632c11`

  or
  
  ```javascript
  async function getEdge() {
    try {
      const edge = await fetch('http://localhost:3001/edges/5ce8053a1416200988632c11')
      const data = await edge.json()
      return data
    } catch (err) {
      console.error('error', err)
    }
  }
  ```

* **Notes:**
