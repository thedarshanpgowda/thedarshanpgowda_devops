## Docker Volumes

### Concepts
Explain what Docker volumes are and how they are used for persistent storage.

### Commands
- `docker volume ls`: Listing volumes.
- `docker volume create`: Creating volumes.
- `docker run -v`: Mounting volumes to containers.

### Activity
Create a volume and use it in a container.

### Instructions
1. **Create a Volume**
   - Create a Docker volume:
     ```bash
     docker volume create myvolume
     ```

2. **Run a Container with the Volume**
   - Run a container with the volume mounted:
     ```bash
     docker run -it --name mycontainer -v myvolume:/myvolume alpine /bin/sh
     ```

3. **Interact with the Volume**
   - Inside the container, create a file in the volume:
     ```sh
     echo "Hello, Volume!" > /myvolume/hello.txt
     ```

   - Exit the container by typing `exit`.

4. **Verify Volume Persistence**
   - Run another container with the same volume and verify the file exists:
     ```bash
     docker run -it --rm -v myvolume:/myvolume alpine /bin/sh
     cat /myvolume/hello.txt
     ```

   - You should see the message "Hello, Volume!" indicating the volume persists data.

5. **Cleanup**
   - Remove the volume:
     ```bash
     docker volume rm myvolume
     ```

