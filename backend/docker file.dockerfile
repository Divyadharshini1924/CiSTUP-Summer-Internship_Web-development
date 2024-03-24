# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the backend files to the working directory
COPY . .

# Install dependencies
RUN pip install --no-cache-dir flask

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the Flask application
CMD ["python", "backend/app.py"]