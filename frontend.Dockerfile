# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the build output from the frontend directory to the Nginx public directory
COPY ./build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]