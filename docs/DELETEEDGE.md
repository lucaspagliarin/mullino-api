[docs](../README.md#mullino-api) > [Edges](EDGES.md#edges) > DELETE edge

**DELETE egde**
----
  <_Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple)._>

  Delete an edge given its ID, and returns a message via json

* **URL**

    /edges/id
    
* **Method:**
  
  `DELETE` 
  
*  **URL Params**

    * **Required:**
            
        `id=[integer]`


* **Success Response:**

    **Content:** 
    
    `{ message: "edge deleted successfully" }`
 
* **Error Response:**

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:** `{ message: err.message }`

* **Sample Call:**

    ```re
    DELETE http://localhost:3001/edges/5ce815301b256a3bd84ecca7
    ```

* **Notes:**