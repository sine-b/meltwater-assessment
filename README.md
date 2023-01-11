**These apps were built using Node v17.9.1**

---

## Running the backend

Inside the `server/` directory, run `npm i` then `npm start`. If successful you should see the message:

```
Server is now listening on port: 8080
```

## Running the frontend

Inside the `client/` directory, run `npm i` then `npm start`. The React app should be hosted at `localhost:3000`.

There are test .txt files that can be uploaded in the app in the `/client/test-files/` directory. In the `client/src/components/UserInput/UserInput.jsx` file, there are 2 canned ban phrases and the default list to be used can be changed by swapping out the index of `banPhrases` on line 16.
