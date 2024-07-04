## Docker Networking

### Concepts
Explain how Docker handles networking, including bridge networks.

### Commands
- `docker network ls`: Listing networks.
- `docker network create`: Creating custom networks.
- `docker run --network`: Running a container on a custom network.

### Activity
Create a custom network and run containers that communicate with each other.

### Instructions
1. **Create a Custom Network**
   - Create a custom network:
     ```bash
     docker network create mynetwork
     ```

2. **Run Containers on the Custom Network**
   - Run two containers on the custom network:
     ```bash
     docker run -d --name alpine1 --network mynetwork alpine sleep 1000
     docker run -d --name alpine2 --network mynetwork alpine sleep 1000
     ```

3. **Verify Network Connectivity**
   - Enter the first container and ping the second container:
     ```bash
     docker exec -it alpine1 /bin/sh
     ping alpine2
     ```

   - You should see ping responses, indicating that the two containers can communicate over the custom network.

4. **Cleanup**
   - Stop and remove the containers:
     ```bash
     docker stop alpine1 alpine2
     docker rm alpine1 alpine2
     ```

   - Remove the custom network:
     ```bash
     docker network rm mynetwork
     ```

