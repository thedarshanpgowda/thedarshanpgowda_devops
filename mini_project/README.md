# User data script for EC2

```
#!/bin/bash
# Update the system
yum update -y

# Install libcrypt library
yum install -y libxcrypt-compat

# Install Docker
yum install -y docker
service docker start
usermod -a -G docker ec2-user
chkconfig docker on

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# Verify Docker Compose installation
docker-compose --version

# Install Git
yum install -y git

# Clone the repository
cd /home/ec2-user
git clone https://github.com/Guru227/mce_devops
cd mce_devops

# Set ownership to ec2-user
chown -R ec2-user:ec2-user /home/ec2-user/mce_devops
```
