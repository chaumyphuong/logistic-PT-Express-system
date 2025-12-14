Xây dựng PT Express Mobile App

- [SRS document](./SRS%20PT%20Express%20.docx)
- [UI design](https://www.figma.com/design/nSOE9iS1kUN979aufvv3cp/App-PTE?node-id=0-1&t=t8rS5wCOKdjGGfrL-1)

# System Requirement Specification 
Project Name: PT Express Mobile Application (Module: Login & Order Management)
Author: Chau My Phuong
Date: 18/11/2024
----
# Introduction
PT Express, a leading company in the road transportation sector in Vietnam, offers a diverse and flexible range of delivery services nationwide. Aiming to provide fast, safe, and efficient transportation services, PT Express has established a robust brand in the delivery and logistics industry, catering to both large enterprises and individuals.

The company offers various services ranging from e-commerce delivery, express shipping, cost-effective shipping, to high-value goods transportation and Cash On Delivery (COD) services. The diversity of services enables PT Express to flexibly meet the needs of customers in the modern and competitive business environment.

Throughout its operation, PT Express has been adopting a management approach that combines traditional methods with digital technology. The company utilizes Google Sheets for managing order data, transportation planning, and customer information. However, despite its convenience, Google Sheets has not fully met the needs for automation and efficient data integration.

Additionally, the use of paper invoice books remains a part of PT Express's management system. This method, while familiar, presents several limitations in terms of efficiency and accuracy.

In the current context, our team, serving as IT business analysis experts, has been entrusted with the development of the order management module for the PT Express mobile app. Our goal is to create a comprehensive digital solution that not only improves the order management process but also enhances the user experience through the mobile application.

This module will integrate modern technology, including process automation, improved user-system interaction, and providing continuous updates on order status. This will not only optimize PT Express's work efficiency but also increase customer satisfaction.
  
## Purpose
The PT Express application is developed to bring various benefits to its customers:

- **Easy Order Management:** Customers can effortlessly create orders, update shipment information, and quickly check the status of their orders.
- **Shipment Tracking:** Customers have the ability to track their shipment's journey and update its current status, providing them with a comprehensive view of the transportation process.
- **Convenient Complaint Filing and Support:** Customers can file complaints related to transportation issues or seek assistance from the company, ensuring fast and effective resolution of any problems.
- **Management of Cash on Delivery, Balances, and Costs:** Customers can easily manage information related to cash on delivery, balances, and order-associated costs, ensuring accurate and straightforward financial oversight.

With the PT Express application, PT Express transportation company aims to address current issues related to shipping, order tracking, complaints, and cash on delivery. By completely replacing the manual management process using Google Sheets and physical records, PT Express creates an efficient order management environment that minimizes errors and ensures smooth and reliable shipping operations.

## Scope
The project scope encompasses the following elements:

- **Order Creation:** The application will allow customers to easily create new orders through a user-friendly interface.
- **Order Tracking and Status:** Customers will have the ability to track the journey of their orders and update real-time order statuses, providing them with information on the location and status of their orders.
- **Login, Sign Up:** Login and registration function by phone number, Facebook, email, Google

With these features, the scope of the PT Express project focuses on order management and related services, providing an efficient order management solution for both customers and retail shops. The expansion, integration with external systems, and features unrelated to order management will fall outside the scope of the PT Express application.

## Out of Scope
- **Comprehensive Personnel Management:** The PT Express application may provide features to manage employee accounts and assign permissions to stores. However, it does not encompass comprehensive personnel management, such as overseeing the recruitment process, maintaining employee records, or managing salaries and incentives.
- **Tax Management and Tax Reporting:** The application does not include features for tax management or tax reporting. The company is required to use separate financial systems or tax tools for these purposes.
- **Full Multilingual Support:** PT Express may support specific languages but does not include comprehensive multilingual support, such as individual user language translation or the management of various language versions.
- **Hardware and Network Maintenance:** The application does not encompass the management and maintenance of the company's hardware and network. This should be handled by IT experts or a separate network management department.
- **Development of External Applications:** The PT Express project will focus on developing the main application for order management and related features. It does not include the development of standalone applications or complex integration projects that require development and integration outside the core system.
- **Management of Special Integration Projects:** The PT Express project will not engage in the development or management of special integration projects, including projects that demand strong integration between multiple different systems and applications, are complex, and require advanced management and deployment.
- **Modification or Development of Applications Outside PT Express System:** PT Express will not engage in modifying or developing applications, projects, or systems that are not the primary focus of the order management application.
- **Features and Projects Unrelated to Order Management and Route Tracking:** The PT Express project will not include features or projects that are not directly related to order management, order status tracking, and the management of order-related information.
- **Development of Applications or Features That Do Not Meet the Current Needs of PT Express:** PT Express will not develop any applications or features that do not fulfill the current requirements of PT Express in the domain of order management and related services.

By clearly defining these items that are out of scope, the document ensures that the focus remains on the core objectives and requirements of the PT Express project.

1.4	System perspective
1.4.1	Assumptions
- Users are required to have basic technical knowledge to interact with the application.
- The application will require a continuous internet connection for real-time data synchronization.
1.4.2	Constraints
- The application needs to be developed within a specified timeframe to meet the expanding business needs.
- It must have the capability to scale to accommodate the growing complexity of operations and the increasing fleet of transport vehicles.
1.4.3	Risks
- Delays in development could impact the company's operational efficiency.
- Risks related to data privacy and security when handling sensitive customer information.
1.4.4	Issues
- Resistance from employees during the transition from manual work processes to a fully digital system.
- Ensuring data accuracy during the migration from Google Sheets and physical records to the new system.
