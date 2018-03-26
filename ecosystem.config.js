/**
 * Application configuration section
 * http://pm2.keymetrics.io/docs/usage/application-declaration/
 * 
 * Deploy configuration section
 * http://pm2.keymetrics.io/docs/usage/deployment/
 */
const apps = [
    {
        name: "server-mock-hook",
        script: "index.js",
        cwd: "/home/ubuntu/server-mock-hook/current",
        out_file: "server-mock-hook-output.log",
        error_file: "server-mock-hook-error.log",
        combine_logs: false,
        env: {
            NODE_ENV: "production",
            PORT: 5000,
            HOST: "http://localhost:5000"
        }
    }
];

const deploy = {
    "production": {
        "user": "ubuntu",
        "key": "~/.ssh/beetech_rsa",
        "host": "185.136.234.35",
        "ref": "origin/feat-deploy",
        "repo": "git@bitbucket.org:beetech-engineers/server-mock-hook.git",
        "path": "/home/ubuntu/server-mock-hook/",
        "post-deploy": "npm install --progress=false && pm2 startOrRestart /home/ubuntu/server-mock-hook/source/ecosystem.config.js --only server-mock-hook"
    }
};

module.exports = { apps, deploy };