## Creating Docker Images

### Dockerfile
Introduce the Dockerfile and explain how it is used to create custom images.

### Commands
- `docker build`: Building images from a Dockerfile.
- `docker tag`: Tagging images.
- `docker push`: Pushing images to Docker Hub.

### Activity
Create a simple Dockerfile, build an image, tag it, and optionally push it to Docker Hub.

### Instructions
1. **Create a Dockerfile**
   - Create a file named `Dockerfile` with the following content:
     ```Dockerfile
     FROM alpine:latest
     RUN echo 'Hello, Docker!' > /hello.txt
     CMD cat /hello.txt
     ```

2. **Build the Image**
   - Build the Docker image from the Dockerfile:
     ```bash
     docker build -t hello-docker .
     ```

3. **List Local Images**
   - List all the images available on your local machine:
     ```bash
     docker images
     ```

4. **Run the Image**
   - Run a container from the newly built image:
     ```bash
     docker run hello-docker
     ```

5. **Tag the Image**
   - Tag the image for pushing to Docker Hub:
     ```bash
     docker tag hello-docker your_dockerhub_username/hello-docker
     ```

6. **Push the Image (Optional)**
   - Push the image to Docker Hub:
     ```bash
     docker push your_dockerhub_username/hello-docker
     ```

