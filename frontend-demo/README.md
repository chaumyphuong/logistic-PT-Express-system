# PTE Logistics Frontend Application

This repository contains the **Frontend Application** for the **PT Express (PTE) Logistics System**.  
The application is designed as a **mobile-first logistics management platform**, focusing on order creation, tracking, and financial visibility.

This project is part of a larger **Business Analysis & System Design portfolio**, demonstrating how business requirements are translated into a usable frontend interface.

---

## Project Purpose

The purpose of this frontend application is to:
- Visualize business workflows defined in the BRD & SRS
- Provide a user-friendly interface for logistics operations
- Support order management, tracking, and financial overview
- Serve as a UI prototype ready for backend API integration

> **Note:**  
> This frontend currently uses mock/static data and is not connected to a production backend API.

---

## Key Features

### Authentication & Account
- User registration, login, OTP verification, and password recovery
- Social login options (Google, Facebook)
- Account management: personal info, saved addresses, payment methods

---

### Home Dashboard
- Overview of:
  - Financial reports
  - Cash flow status
  - Orders requiring attention
- Quick access to core modules such as Orders, Recipients, and Account

---

### Order Management (Order Hub)
- Create shipment orders:
  - **Light Orders** (< 20KG)
  - **Heavy Orders** (> 20KG)
  - **Express Orders**
- View and manage:
  - Order list
  - Operational reports
  - Orders requiring attention
- Advanced functions:
  - Search & filter orders
  - Export data to Excel
  - Order detail view (Pickup / Delivery / Status timeline)
  - Map-based order tracking (UI-level)

---

### Financial & Cash Flow
- Revenue and profit overview
- Wallet balance tracking
- Monitoring:
  - Money in circulation
  - Service fees
  - Withdrawal amounts

---

### Recipient Management
- Manage frequently used recipient profiles
- Save delivery addresses for faster order creation

---

## Tech Stack

| Technology | Description |
|----------|-------------|
| **Framework** | React |
| **Language** | TypeScript |
| **Routing** | `react-router-dom` (using `HashRouter`) |
| **Styling** | Tailwind CSS (utility-first, mobile-first) |
| **Charts** | Recharts (financial data visualization) |
| **Icons** | Font Awesome |

---

## Deploy app

### Prerequisites
Ensure the following are installed:
- **Git**
- **Node.js** (LTS recommended)
- **npm** or **Yarn**

---

### Installation
**1. Install dependencies:**
   `npm install`
**2. Run the app:**
   `npm run dev`