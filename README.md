# gallery-CRUD_app
complete gallery CRUD application using react node express and mongoDB
- It is a pseudo `FullStack` Application which is made in `MERN Stack`.
- It shows and lists all the Pictures added to the 'Database`.
- It is a basic `CRUD App` (Create, Read, Update, Delete) with images.

## Database Model Parameters:
`[imgName, ImgURL, ImgDetails]`

## Specifications of Implementation:

- A `GET` request to the base URL list all galary images as `Cards` (3 card per row).
- A `GET` request lists details of the images . this will be on click of the above card.
- A `GET` request shows a `form` for adding new images.
  - the Form contains `Image Name, Image URL, Image details as mandatory fields`.
  - A `Post` request `Submit the above form and add it to the Database.
- A `GET` request to `Edit` shows a form which has a prefilled Image Name and it is possible to change/edit the details.
- A `POST` request submit the above form and change the appropriate details in the database.
- A `DELETE` request deletes a particular image from the database.
