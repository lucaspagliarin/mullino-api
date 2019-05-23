**GET Bordas**
----
  Returns a json object of all bordas

* **URL**

  /bordas

* **Method:**

  `GET` 
  
*  **URL Params**

   No Params

* **Data Params**

  No Data Params

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** 
     ```json
     [
      {
        "addValue": 1.5,
        "_id": "5ce6e058c8ed50389884719b",
        "name": "Catupiry",
        "__v": 0
      },
      {
        "addValue": 10,
        "_id": "5ce6e073c8ed50389884719d",
        "name": "Doce de Leite",
        "__v": 0
      },
      {
        "addValue": 1.5,
        "_id": "5ce6e080c8ed50389884719e",
        "name": "Cheddar",
        "__v": 0
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Content:** `{ message : err.message }`

* **Sample Call:**
  
  `GET http://localhost:3001/bordas`

  or
  
  ```javascript
  async function getBordas() {
    try {
      const bordas = await fetch('http://localhost:3001/bordas')
      const data = await bordas.json()
      return data
    } catch (err) {
      console.error('error', err)
    }
  }
  ```
