# User Stories & Acceptance Criteria
## PT Express Mobile Application

---

## 1. Overview
This document defines the user stories for the PT Express Mobile Application.  
The user stories are derived from the Business Requirements Document (BRD) and System Requirements Specification (SRS).

They describe system functionality from the end-user perspective and serve as input for design, development, and testing.

---

## 2. User Personas

### 2.1 Customer
- Creates delivery orders
- Tracks shipment status
- Views COD and order history

### 2.2 PT Express Staff
- Updates order status
- Supports shipment operations

---

## 3. User Stories

---

### US-01: User Registration
**As a** customer  
**I want** to register using my phone number or email  
**So that** I can access the PT Express mobile application  

#### Acceptance Criteria
- **Given** the user is not registered  
  **When** valid registration information is submitted  
  **Then** the system creates a new account  

- **Given** invalid information is submitted  
  **When** the user submits the form  
  **Then** an error message is displayed  

---

### US-02: User Login
**As a** registered user  
**I want** to log in using phone number, email, Google, or Facebook  
**So that** I can manage my delivery orders  

#### Acceptance Criteria
- **Given** valid credentials  
  **When** the user logs in  
  **Then** access is granted  

- **Given** invalid credentials  
  **When** the user logs in  
  **Then** access is denied  

---

### US-03: Create Delivery Order
**As a** customer  
**I want** to create a delivery order  
**So that** I can request shipment services  

#### Acceptance Criteria
- **Given** the user is logged in  
  **When** required order information is submitted  
  **Then** a new delivery order is created  

- **Given** missing required fields  
  **When** the order is submitted  
  **Then** the system prompts for completion  

---

### US-04: Edit Delivery Order
**As a** customer  
**I want** to edit my delivery order before shipment  
**So that** I can update order details  

#### Acceptance Criteria
- **Given** the order has not been shipped  
  **When** updates are made  
  **Then** the system saves the changes  

- **Given** the order is shipped  
  **When** edit is attempted  
  **Then** editing is restricted  

---

### US-05: Track Order Status
**As a** customer  
**I want** to track my order status  
**So that** I know its current progress  

#### Acceptance Criteria
- **Given** an existing order  
  **When** the order details are viewed  
  **Then** the current status is displayed  

---

### US-06: View COD Information
**As a** customer  
**I want** to view COD amount and payment status  
**So that** I can track payment details  

#### Acceptance Criteria
- **Given** COD is enabled  
  **When** order details are viewed  
  **Then** COD information is displayed  

---

### US-07: View Order History
**As a** customer  
**I want** to view past orders  
**So that** I can reference previous shipments  

#### Acceptance Criteria
- **Given** completed orders exist  
  **When** viewing order history  
  **Then** past orders are displayed  

---

### US-08: Update Order Status (Staff)
**As a** staff member  
**I want** to update order status  
**So that** customers receive accurate updates  

#### Acceptance Criteria
- **Given** staff authorization  
  **When** status is updated  
  **Then** changes are reflected immediately  

---

## 4. Notes
This document is part of a Business Analyst portfolio project and focuses on requirement clarity rather than technical implementation.
