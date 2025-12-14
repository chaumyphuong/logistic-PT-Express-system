# Software Requirements Specification (SRS)
## PT Express Mobile Application

---

## Revision History
| Date       | Version | Description              | Author           |
|------------|---------|--------------------------|------------------|
| 18/11/2024 | 1.0     | Initial SRS document     | Chau My Phuong  |

---

## Table of Contents
1. Introduction  
2. Overall Description  
3. System Features  
4. External Interface Requirements  
5. Non-Functional Requirements  
6. Other Requirements  

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) document describes the functional and non-functional requirements of the **PT Express Mobile Application**.

The document is intended for stakeholders including business owners, business analysts, designers, and future development teams to understand system requirements and constraints.

---

### 1.2 Scope
The PT Express Mobile Application is a mobile-based system designed to support order management and customer interaction for PT Express, a logistics company operating in Vietnam.

The system aims to replace manual processes such as Google Sheets and paper invoices with a digital solution that enables:
- User authentication
- Shipping order creation and management
- Real-time order tracking
- COD (Cash On Delivery) information management

---

### 1.3 Definitions, Acronyms, and Abbreviations
| Term | Description |
|-----|-------------|
| SRS | Software Requirements Specification |
| COD | Cash On Delivery |
| BA  | Business Analyst |
| UI | User Interface |
| UX | User Experience |

---

### 1.4 References
- UI Prototype (Figma):  
  https://www.figma.com/design/nSOE9iS1kUN979aufvv3cp/App-PTE
- Internal Business Requirements (PT Express)

---

## 2. Overall Description

### 2.1 Product Perspective
The PT Express Mobile Application is a standalone mobile system designed to support customers and internal staff in managing shipping orders.

The system replaces manual tools such as Google Sheets and paper invoice books and provides centralized access to order information.

---

### 2.2 Product Functions
High-level functions of the system include:
- User registration and authentication
- Delivery order creation and management
- Order status tracking
- COD information display
- Order history management

---

### 2.3 User Classes and Characteristics
| User Class | Description |
|-----------|-------------|
| Customer | Creates orders and tracks shipment status |
| Staff | Updates order status and shipment progress |
| Business Owner | Reviews business data and system usage |

---

### 2.4 Operating Environment
- Mobile application (Android / iOS)
- Internet-based system
- Cloud-hosted backend (future implementation)

---

### 2.5 Design and Implementation Constraints
- Limited project timeline
- Budget constraints for advanced integrations
- Mobile-only platform (no web version)

---

### 2.6 User Documentation
- User guide (future)
- System Requirement Specification
- UI Wireframes (Figma)

---

### 2.7 Assumptions and Dependencies
- Users have basic smartphone usage skills
- Stable internet connection is required
- Stakeholders are available for requirement clarification

---

## 3. System Features

### 3.1 User Authentication

#### Description
The system allows users to register and log in using multiple authentication methods.

#### Functional Requirements
- Users shall be able to register using phone number or email.
- Users shall be able to log in using Google or Facebook.
- The system shall validate user credentials before granting access.

---

### 3.2 Order Creation and Management

#### Description
Users can create, edit, and manage delivery orders through the application.

#### Functional Requirements
- Users shall be able to create a new delivery order.
- Users shall be able to update order information before shipment.
- The system shall store order details securely.

---

### 3.3 Order Tracking

#### Description
The system provides real-time visibility into order status.

#### Functional Requirements
- Users shall be able to view current order status.
- The system shall display shipment progress updates.

---

### 3.4 COD Information Management

#### Description
The system displays Cash On Delivery information for each order.

#### Functional Requirements
- The system shall display COD amount per order.
- The system shall update COD status upon order completion.

---

### 3.5 Order History

#### Description
Users can access historical order data.

#### Functional Requirements
- Users shall be able to view completed orders.
- The system shall allow filtering by order status or date.

---

## 4. External Interface Requirements

### 4.1 User Interfaces
- Mobile-friendly UI
- Simple and intuitive navigation
- Consistent design following UI/UX standards

---

### 4.2 Hardware Interfaces
- Smartphone devices (Android, iOS)

---

### 4.3 Software Interfaces
- Authentication services (Google, Facebook)
- Backend API (future implementation)

---

### 4.4 Communication Interfaces
- Internet connection (Wi-Fi, Mobile Data)

---

## 5. Non-Functional Requirements

### 5.1 Security Requirements
- Secure authentication mechanisms
- Protection of customer and order data

---

### 5.2 Performance Requirements
- Fast response time for login and order actions
- Efficient data retrieval for order tracking

---

### 5.3 Availability Requirements
- High system availability during business hours

---

### 5.4 Usability Requirements
- Easy-to-use interface for non-technical users
- Minimal learning curve

---

### 5.5 Scalability Requirements
- System shall support increasing order volumes

---

## 6. Other Requirements

### 6.1 Legal and Regulatory Requirements
- Compliance with data protection regulations
- Secure handling of customer personal information

---

### 6.2 Future Enhancements
- Integration with payment gateways
- Fleet and route optimization
- Admin dashboard and reporting features
