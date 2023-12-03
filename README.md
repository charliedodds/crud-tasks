# Full Stack CRUD app

This is a full stack task CRUD app, built using the MERN stack.

## Getting started

Instructions for the client and server are in their respective folders but here is an overview:

`cd` into `server`, create and populate a `.env` file, `npm install` dependencies and `npm run dev` to start the project locally, then do the same for `client`.

## Tools/Libraries

The only "tutorial" used was each library's respective documentation where/if needed.

### API

Not many libraries as it is a small API, nodemon and mongoose for a better dev experience (in addition to typescript, express, cors and mongodb which are required) and dotenv to load `.env`

### Front end

I used redux's official [vite-typescript template generator](https://github.com/reduxjs/redux-templates/tree/master/packages/vite-template-redux).
I haven't used RTK/RTK Query much (compared to older redux versions) so wanted to give it a go. There was a small challenge where I didn't realise you had to invalidate the cache to update the UI but solved this reading the documentation quickly.

For styles I used [tailwindcss](https://tailwindcss.com/) as I am familiar with this and I like using it, I think it's a good way to use and keep of track of css in the component file.

For forms I used [react-hook-form](https://react-hook-form.com/) because I wanted a quick and easy way to control the form and it has a simple API.

## Improvements

If I had more time, I would add tests, auth, better form/error handling and more styles. These areas suffered due to time constraints.

## Using the API

It is a small simple API following RESTful practices.
There is only 1 endpoint `/tasks` which accepts the following methods: `GET`, `POST`, `PATCH`, `DELETE`.
`GET` supports an id paramater to get an individual task like `/tasks/:id`. This is required to `PATCH` or `DELETE`.

`POST` accepts the following request body in JSON format:

```
{
  "content": string
  "author": string
}
```

All fields are required

`PATCH` accepts the following request body in JSON format:

```
{
  "content"?: string
  "author"?: string
  "completed?: boolean
}
```

All fields are optional
