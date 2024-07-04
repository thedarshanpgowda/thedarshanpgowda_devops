## Running Docker Containers

### Commands
- `docker run`: Running containers.
- `docker ps`: Listing running containers.
- `docker stop`: Stopping running containers.
- `docker rm`: Removing containers.

### Activity
Run a container from an image (e.g., `nginx` or `alpine`), interact with it, and then stop and remove it.

### Instructions
1. **Run an NGINX Container**
   - Run an NGINX container:
     ```bash
     docker run --name mynginx -d -p 8080:80 nginx
     ```
   - This command runs an NGINX container in detached mode (`-d`), names it `mynginx`, and maps port 8080 on your local machine to port 80 in the container.

2. **List Running Containers**
   - List all running containers:
     ```bash
     docker ps
     ```
   - You should see the NGINX container running.

3. **Interact with the Container**
   - Open a browser and go to `http://localhost:8080`. You should see the NGINX welcome page.

4. **Stop the Container**
   - Stop the NGINX container:
     ```bash
     docker stop mynginx
     ```

5. **Remove the Container**
   - Remove the NGINX container:
     ```bash
     docker rm mynginx
     ```

6. **List All Containers**
   - To list all containers (running and stopped):
     ```bash
     docker ps -a
     ```

