# To-Do API

## Overview

To-Do is an api that allows you to implement a to-do list feature in your frontend. It manages User, Tasks, and Tags giving CRUD operations to the models and also includes authentication for most endpoints.

## Usage

Make HTTP requests to the endpoints given the correct information.

## Endpoints

### Authentication

Important information: JWT authentication is accessed through the header named `x-access-token`. No BEARER required. All endpoints excluding `/login` and `/register` require JWT authentication in the header.

### User

- #### Register / create user
  ```bash
  POST /api/user/register
  Protected : FALSE
  ```
  Creates / registers a user. Gives back user information and jwt token.
- #### Login
  ```bash
  POST /api/user/login
  Protected : FALSE
  ```
  Logs in a user. Gives back user information and jwt token.
- #### Get all users
  ```bash
  GET /api/user/
  Protected : TRUE
  ```
  Gets all users in the database.
- #### Get by user ID
  ```bash
  GET /api/user/:user_id
  Protected : TRUE
  ```
  Gets a user by the user ID in the params. Returns specific user info.
- #### Update user by user ID
  ```bash
  PUT /api/user/:user_id
  Protected : TRUE
  ```
  Updates a user by the user ID. Can update name and email. Returns updated user info.
- #### Delete user by user ID
  ```bash
  DELETE /api/user/:user_id
  Protected : TRUE
  ```
  Deletes the user by the given user ID from params. Returns deleted user info.

### Tasks

- #### Create a task for the user
  ```bash
  POST /api/tasks/user/:user_id
  Protected : TRUE
  ```
  Creates a task and links it to the specified user by the user ID. Returns the creates task info.
- #### Get a task given the task ID
  ```bash
  GET /api/tasks/:task_id
  Protected : TRUE
  ```
  Gets the task by the given task ID. Returns task info.
- #### Update a task given the task ID
  ```bash
  PUT /api/tasks/:task_id
  Protected : TRUE
  ```
  Updates the task given with the task ID. Returns the updated task info.
- #### Delete a task given the task ID
  ```bash
  DELETE /api/tasks/:task_id
  Protected : TRUE
  ```
  Deletes the task given with the task ID. Returns the deleted task info.
- #### Completes a task given the task ID
  ```bash
  PUT /api/tasks/:task_id/complete
  Protected : TRUE
  ```
  Updates the task to be complete. Sets `is_complete = TRUE` and sets the completed date to the current. Returns the completed task info.
- #### Get all incomplete tasks by the user ID
  ```bash
  GET /api/tasks/:user_id/incomplete
  Protected : TRUE
  ```
  Gets all tasks by user ID and and sorts all incomplete tasks. Returns all tasks where `is_completed = FALSE`
- #### Get all tasks by user ID
  ```bash
  GET /api/tasks/user/:user_id
  Protected : TRUE
  ```
  Gets all tasks linked to the user by the user ID. Returns all user tasks.
- #### Insert a tag into a task
  ```bash
  PUT /api/tasks/:task_id/tags/:tag_id
  Protected : TRUE
  ```
  Inserts a tag given by the tag ID and inserts it into the task given by the task ID. Returns the task with the updated tag inserted.
- #### Remove a tag from a task
  ```bash
  PUT /api/tasks/:task_id/tags/:tag_id/remove
  Protected : TRUE
  ```
  Removes the tag given by the tag ID in the task given by the task ID. Returns the updated task with the removed tag.
- #### Gets all tasks that include a tag by tag ID
  ```bash
  GET /api/tasks/user/:user_id/tags/:tag_id
  Protected : TRUE
  ```
  Gets all tasks where the tag by the tag ID is included.

### Tags

- #### Create a tag
  ```bash
  POST /api/tags/user/:user_id
  Protected : TRUE
  ```
  Creates a tag and links it to the user that created it by the user ID. Returns the created tag info.
- #### Get tag by the tag ID
  ```bash
  GET /api/tags/:tag_id
  Protected : TRUE
  ```
  Gets the tag by the given tag ID. Returns the tag info.
- #### Update a tag by the tag ID
  ```bash
  PUT /api/tags/:tag_id
  Protected : TRUE
  ```
  Updates the tag by the tag ID. Returns the updated tag info.
- #### Delete a tag by the tag ID
  ```bash
  DELETE /api/tags/:tag_id
  Protected : TRUE
  ```
  Deletes the tag by the tag ID. Returns the deleted tag info.
- #### Get all tags by user ID
  ```bash
  GET /api/tags/user/:user_id
  Protected : TRUE
  ```
  Gets all tags by the user ID. Returns all tags created by the user.

