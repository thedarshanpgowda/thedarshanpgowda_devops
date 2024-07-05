## Description of the EC2 User Data Script

This EC2 user data script installs the necessary dependencies (apache, docker), necessary node packages within the container, and then exposes them through a reverse proxy. This step helps us with the deployment step.

1. **Step 1:** Install Apache and Docker
    
    This step installs Apache web server and Docker on the EC2 instance. Apache will be used as a reverse proxy to forward requests to the Docker container.

1. **Step 2:** Configure Apache as a reverse proxy
    
    This step configures Apache to act as a reverse proxy by modifying the Apache configuration file. The reverse proxy will forward requests to the Docker container running the Node.js application.

1. **Step 3:** Build and run the Docker container
    
    This step builds a Docker image using the provided Dockerfile and runs a container based on that image. The Docker container will host the Node.js application and its dependencies.

1. **Step 4:** Install necessary Node packages
    
    This step installs the necessary Node packages within the Docker container. These packages are required for the Node.js application to run properly.

1. **Step 5:** Expose the Node.js application through the reverse proxy
    
    This step configures the reverse proxy to forward requests to the Docker container running the Node.js application. The Node.js application will be accessible through the public IP address of the EC2 instance.

**Note:** Make sure to replace any placeholder values in the script with actual values specific to your setup.

## EC2 User Data

```
#!/bin/bash

# Install Docker and Docker Compose
# Example commands to install Docker and Docker Compose
# Make sure to use the appropriate commands for your Ubuntu version and Docker setup
# Add Docker's official GPG key:
apt-get update
apt-get install -y ca-certificates curl
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update

apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Example: Download application code from Git repository
cd /home/ubuntu
git clone https://github.com/Guru227/mce_devops
cd mce_devops

# Adjust ownership to the ubuntu user
chown -R ubuntu:ubuntu /home/ubuntu/mce_devops

# docker permissions
groupadd docker
usermod -aG docker ubuntu
newgrp docker

# Install Apache HTTP Server for reverse proxy
sudo apt-get update
sudo apt-get install -y apache2

# Enable required Apache modules
sudo a2enmod proxy
sudo a2enmod proxy_http

# Create a new Apache configuration file for reverse proxy
sudo tee /etc/apache2/sites-available/reverse-proxy.conf > /dev/null <<EOF
<VirtualHost *:80>
    ServerName your_domain.com

    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
EOF

# Enable the Apache reverse proxy configuration
sudo rm -rf /etc/apache2/sites-enabled/000-default.conf
sudo ln -s /etc/apache2/sites-available/reverse-proxy.conf /etc/apache2/sites-enabled/

# Restart Apache to apply the changes
sudo systemctl restart apache2

echo "Apache reverse proxy configured successfully!"

# Run the docker container
cd /home/ubuntu/mce_devops/mini_project
docker compose up
```

## Resources:

1. https://stackoverflow.com/questions/48957195/how-to-fix-docker-got-permission-denied-issue
1. https://medium.com/awsblackbelt/how-to-make-s3-objects-publicly-available-28e977dc7f7e
1. https://stackoverflow.com/questions/63153521/run-docker-compose-in-ec2-user-data
