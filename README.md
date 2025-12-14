# System Requirement Specification 

Project Name: PT Express Mobile Application

Author: Chau My Phuong

Date: 18/11/2024
----
## 1. Project Overview
The PT Express Mobile Application is a mobile application used for order management and user authentication for the PT Express shipping company in Vietnam.

The application was developed to replace manual processes (Google Sheets, paper ledgers) with a more digitized, automated, and efficient system.

The main scope of the project includes:

- User registration/login
- Shipping order management
- Order status tracking
- Revenue reporting and statistics
- Recipient information management

## 2. Business Context
PT Express currently manages delivery orders using:

- Google Sheets for order tracking
- Paper-based invoice books for shipment records
- Manual updates for order status and COD reconciliation

These methods cause inefficiencies, data inconsistencies, and limited visibility for both customers and internal staff. As order volume increases, the current approach cannot scale effectively.

The business requires a mobile-based solution to streamline operations, improve accuracy, and enhance customer experience.

## 3. Problem Statement
The current system faces several issues:

- High dependency on manual data entry
- Difficulty tracking real-time order status
- Risk of data loss or inconsistency
- Limited transparency for customers
- Time-consuming COD reconciliation

These challenges negatively impact operational efficiency and customer satisfaction.

## 4. Project Objectives
The project aims to:
- Digitize order management processes
- Enable real-time order tracking
- Reduce manual errors
- Improve customer experience
- Provide better visibility into COD and order status

## 5. Project Scope
### 5.1 In Scope
- User registration and login (phone number, email, Google, Facebook)
- Create and manage delivery orders
- Track order status in real time
- View order details and COD information

### 5.2 Out of Scope
- Human resource management
- Tax reporting and accounting
- Fleet and route optimization
- Hardware and network management
- Advanced system integrations

## 6. Stakeholders
| Stakeholder      | Role                  | 
| ---------------- | --------------------- | 
| Customers        | Create & track orders | 
| PT Express Staff | Manage order status   | 
| Business Owner   | Business requirements | 
| Development Team | System implementation | 

## 7. Assumptions, Constraints & Risks

### 7.1 Assumptions
- Users have basic knowledge of smartphone usage and mobile applications.
- Users have access to a stable internet connection for real-time data synchronization.
- Business stakeholders are available to clarify requirements during the analysis phase.

### 7.2 Constraints
- Limited project timeline for requirement analysis and documentation.
- Budget limitations restrict advanced system integrations in the initial phase.
- The system is designed as a mobile application only (no web version in scope).

### 7.3 Risks
- Resistance from staff when transitioning from manual processes to a digital system.
- Potential data inconsistencies during migration from Google Sheets and paper records.
- Security and privacy risks when handling sensitive customer and order data.

---

## 8. Functional Requirements

The system shall support the following core functionalities:

- **User Authentication**
  - User registration and login via phone number, email, Google, and Facebook.
- **Order Creation & Editing**
  - Users can create new delivery orders and update order information.
- **Order Tracking**
  - Users can view real-time order status and shipment progress.
- **COD Information Display**
  - The system displays COD amount and payment status per order.
- **Order History Management**
  - Users can view and manage historical delivery orders.

---

## 9. Non-Functional Requirements

The system shall meet the following quality attributes:

- **Security**
  - Secure authentication and protection of user data.
- **Performance**
  - Fast response time for key user actions.
- **Availability**
  - High system availability during normal business operations.
- **Usability**
  - User-friendly interface suitable for non-technical users.
- **Scalability**
  - Ability to handle increasing order volumes as the business grows.

---

## 10. User Flow / Process Overview

The high-level order management process is as follows:

1. User logs into the mobile application.
2. User creates a new delivery order by entering shipment information.
3. The system validates and stores order data.
4. User tracks the order status in real time.
5. The order is completed and COD information is finalized.

---

## 11. UI / UX Prototype

UI wireframes and prototypes are used to validate requirements and user flows with stakeholders.

🔗 **Figma Design:**  
https://www.figma.com/design/nSOE9iS1kUN979aufvv3cp/App-PTE

---

## 12. Documentation

The following Business Analysis artifacts are provided in this repository:

- **System Requirement Specification (SRS)**
- **User Stories & Acceptance Criteria**
- **UI Wireframes / Prototypes (Figma)**
