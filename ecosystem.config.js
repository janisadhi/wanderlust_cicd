module.exports = {
  apps: [
    {
      name: "backend-server",
      script: "npm ", // Use npm to start the backend server
      args: "start", // Command to run the backend server
      cwd: "/backend", // Adjust to your backend directory
      watch: true, // Optional: Restart on file changes
      env: {
        NODE_ENV: "development", // Development environment
      },
      env_production: {
        NODE_ENV: "production", // Production environment
      },
    },
    {
      name: "frontend-server",
      script: "npm", // Use npm to start the frontend server
      args: "run dev -- --host", // Command to run the frontend server
      cwd: "/frontend", // Adjust to your frontend directory
      watch: true, // Optional: Restart on file changes
      env: {
        NODE_ENV: "development", // Development environment
      },
      env_production: {
        NODE_ENV: "production", // Production environment
      },
    },
  ],
};

