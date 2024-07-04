## Working with Docker Images

### Concepts
Explain what Docker images are and the role they play in containers.

### Commands
- `docker pull`: Pulling images from Docker Hub.
- `docker images`: Listing local images.

### Activity
Pull a simple image (e.g., `hello-world`) and run it.

### Instructions
1. **Pull an Image**
   - Open a terminal or command prompt.
   - Pull the `hello-world` image from Docker Hub:
     ```bash
     docker pull hello-world
     ```

2. **List Local Images**
   - List all the images available on your local machine:
     ```bash
     docker images
     ```

3. **Run a Container**
   - Run a container using the `hello-world` image:
     ```bash
     docker run hello-world
     ```
   - You should see a message from Docker confirming that your installation appears to be working correctly.

4. **Explore the Image**
   - You can also pull and run other images like `alpine` to explore more:
     ```bash
     docker pull alpine
     docker run -it alpine /bin/sh
     ```
   - This will start a container with the `alpine` image and give you an interactive shell inside the container.

