<<<<<<< HEAD
# DataESLint-Test
Provides a demo on creating custom rules to check for the presence of data-testid attribute's availability in html tags in a directory/ file in a Next.js project.
=======

# Custom ESLint rules in Next.js

This is a mini-project focused on writing custom eslint rules to test for the presence of the property data-testid within the files of a particular directory in a next.js project.




## Installation


```bash
  npx create-next-app@latest
  npm install eslint-plugin-eslint-rules --save-dev
  cd datatest
```
Switch to master branch as it has the latest code
    
## Features

- eslint-rules - folder that contains the custom eslint rule defined and the common export file for all the rules
- check_data-testid.js - the custom eslint rule file
- index.js - common export file for all the rules
- .eslintrc.json - contains the file directories to be targeted and the rules to be operated on


## Screenshots

![App Screenshot](https://github.com/user-attachments/assets/1030be37-3c17-432b-a7ee-38982a879148)


### Purpose

This custom ESLint rule ensures that every JSX element in your code has a `data-testid` attribute. If a JSX element lacks the `data-testid` attribute, an error is reported, enforcing the use of this attribute for better test targeting.

### How It Works

- The rule checks each JSX opening tag (e.g., `<button>`, `<div>`) for the presence of the `data-testid` attribute.
- If the attribute is missing, it triggers an ESLint error with a message indicating the tag name.

>>>>>>> origin/master
