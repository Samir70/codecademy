# Environment variables

## making some environment variables

```bash
PROGRAM_NAME = "Codecademy Weather App"
ZIP_CODE = 91402
```

## using dotenv

```js
// Imports the npm package
import dotenv from "dotenv"; 
// Loads environment variables into process.env
dotenv.config(); 
console.log(process.env.ZIP_CODE); 
```