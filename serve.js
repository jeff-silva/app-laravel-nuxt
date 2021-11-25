require('dotenv').config();
const { exec } = require('child_process');
let back = new URL(process.env.APP_URL || 'http://localhost:3001');

[`php artisan serve --port=${back.port}`, 'npm run dev'].forEach(command => {
    console.log(command);
    exec(command).stdout.pipe(process.stdout);
});
