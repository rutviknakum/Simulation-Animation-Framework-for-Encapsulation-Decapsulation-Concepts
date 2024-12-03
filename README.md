

# **Simulation/Animation Framework for Encapsulation/Decapsulation Concepts**

## **Overview**  
This project implements a simulation and animation framework to demonstrate the processes of **encapsulation** and **decapsulation** in the OSI model. The framework provides a visual and interactive representation of how data is transformed and transmitted across network layers, ensuring a deeper understanding of networking fundamentals.  

## **Features**  
- **Encapsulation**: Demonstrates how headers and trailers are added as data traverses the OSI layers, including physical, data link, network, transport, and application layers.
- **Decapsulation**: Illustrates how headers and trailers are removed at the receiving end, showing the reverse process across the OSI layers.
- **Visualization**: Dynamic animations to show data transformations in real-time, with clear representations of packet formation and dissection.
- **Interactive Interface**: Users can control the flow of data through the OSI layers, view each encapsulation/decapsulation step, and understand how the data is processed.
- **Educational Use**: Simplifies abstract concepts, making them more accessible to students and professionals, aiding in network design, troubleshooting, and optimization.

## **Technologies Used**  
- **Frontend**:  
  - **HTML5, CSS3, JavaScript**: Used to create an interactive and dynamic user interface with real-time visualizations.
  - **CSS Animations**: For smooth, visually appealing transitions and real-time data flow animations.

- **Backend**:  
  - **Node.js**: Handles the encapsulation and decapsulation logic, ensuring that the data transformation processes are accurate and can be easily modified or extended.
  - **Express**: To serve the application and manage HTTP requests related to data flow and simulation control.
  

## **Installation**  
Follow these steps to set up the project locally:

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/rutviknakum/Simulation-Animation-Framework-for-Encapsulation-Decapsulation-Concepts.git
   ```

2. **Navigate to the Project Directory**  
   After cloning the repository, navigate to the project folder:
   ```bash
   cd Simulation-Animation-Framework-for-Encapsulation-Decapsulation-Concepts
   ```

3. **Install Dependencies**  
   The project uses **Node.js** and **npm** to manage dependencies. Install all necessary dependencies with:
   ```bash
   npm install
   ```

4. **Start the Application**  
   After installing the dependencies, you can start the application with:
   ```bash
   npm start
   ```

5. **Open the Application**  
   Open your browser and go to the following URL:
   ```text
   http://localhost:3000
   ```



## **Future Enhancements**  
- **NS3 Integration**: To simulate network conditions such as delay, packet loss, and congestion during encapsulation and decapsulation.
- **Custom Protocols**: Allow users to select different network protocols (TCP/IP, UDP, etc.) and see how the encapsulation changes based on the protocol.
- **Multi-Device Simulation**: Enable the simulation of data transmission between multiple devices in a network, demonstrating how encapsulation and decapsulation occur across different nodes.

## **Contributing**  
We welcome contributions to improve this project! Here’s how you can get started:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch for your feature or bugfix.
4. Make changes and commit them with clear, descriptive messages.
5. Push your changes and create a pull request.

Please ensure that any code additions or modifications include tests and follow the project’s coding style.

## **License**  
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

