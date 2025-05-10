"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

// Mock user data for the MVP
const user = {
  id: "user123",
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  address: {
    street: "123 Wellness St",
    city: "Aromatherapy",
    state: "CA",
    zipCode: "90210",
    country: "United States",
  },
  phone: "+1 (555) 123-4567",
};

// Mock order data for the MVP
const orders = [
  {
    id: "ORD12345",
    date: "2025-05-01",
    total: 145.98,
    status: "Delivered",
    items: [
      {
        id: "1",
        name: "Lavender Essential Oil",
        price: 28.00,
        quantity: 2,
      },
      {
        id: "4",
        name: "Deep Blue Blend",
        price: 42.67,
        quantity: 1,
      },
      {
        id: "10",
        name: "Balance Grounding Blend",
        price: 26.67,
        quantity: 1,
      },
    ],
  },
  {
    id: "ORD12346",
    date: "2025-04-15",
    total: 95.33,
    status: "Delivered",
    items: [
      {
        id: "2",
        name: "Peppermint Essential Oil",
        price: 27.33,
        quantity: 1,
      },
      {
        id: "9",
        name: "AromaLite Diffuser",
        price: 68.00,
        quantity: 1,
      },
    ],
  },
];

// Mock downloads data for the MVP
const downloads = [
  {
    id: "DL001",
    name: "Essential Oil Beginner's Guide",
    type: "PDF E-book",
    downloadDate: "2025-05-03",
    size: "2.4 MB",
  },
  {
    id: "DL002",
    name: "Business Building Toolkit",
    type: "ZIP Archive",
    downloadDate: "2025-04-20",
    size: "15.6 MB",
  },
  {
    id: "DL003",
    name: "Essential Oils for Everyday Use",
    type: "PowerPoint Presentation",
    downloadDate: "2025-04-10",
    size: "8.2 MB",
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-center mb-4">
                <div className="h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                </div>
                <h2 className="font-semibold text-lg">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>Member since</span>
                <span>May 2025</span>
              </div>
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("account")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === "account" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-gray-100"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Account Information
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === "orders" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-gray-100"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Order History
              </button>
              <button
                onClick={() => setActiveTab("downloads")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === "downloads" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-gray-100"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Downloads
              </button>
              <button
                onClick={() => setActiveTab("address")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === "address" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-gray-100"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Shipping Address
              </button>
              <button
                onClick={() => {
                  // In a real app, this would handle logout
                  alert("Logout functionality would go here in a real implementation");
                }}
                className="w-full text-left px-4 py-3 rounded-lg flex items-center text-red-600 hover:bg-red-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Account Information */}
          {activeTab === "account" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Account Information</h1>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Personal Information</h2>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">First Name</h3>
                      <p>{user.firstName}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Last Name</h3>
                      <p>{user.lastName}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Email</h3>
                      <p>{user.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Phone</h3>
                      <p>{user.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Password</h2>
                    <Button variant="outline" size="sm">Change Password</Button>
                  </div>
                  
                  <p className="text-gray-600">
                    For security reasons, your password is hidden. Click the button to change your password.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Order History */}
          {activeTab === "orders" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Order History</h1>
              
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <Card key={order.id} className="overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                          <div>
                            <div className="text-sm text-gray-500">Order #{order.id}</div>
                            <div className="font-medium">
                              {new Date(order.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Order Total</div>
                              <div className="font-medium">${order.total.toFixed(2)}</div>
                            </div>
                            <div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium
                                ${order.status === "Delivered" 
                                  ? "bg-green-100 text-green-800" 
                                  : order.status === "Processing" 
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                                }
                              `}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-3">Order Items</h3>
                        <div className="space-y-3">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3">
                                  <span className="text-xs text-gray-400">{item.name.charAt(0)}</span>
                                </div>
                                <div>
                                  <div className="font-medium">{item.name}</div>
                                  <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                                </div>
                              </div>
                              <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between mt-6">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/order/${order.id}`}>View Order Details</Link>
                          </Button>
                          {order.status === "Delivered" && (
                            <Button variant="outline" size="sm">Reorder</Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                  <p className="text-gray-600 mb-6">
                    You haven't placed any orders yet. Browse our products to get started.
                  </p>
                  <Button asChild>
                    <Link href="/shop">Shop Now</Link>
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Downloads */}
          {activeTab === "downloads" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Downloads</h1>
              
              {downloads.length > 0 ? (
                <div className="space-y-4">
                  {downloads.map((download) => (
                    <Card key={download.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded bg-primary-100 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-medium">{download.name}</h3>
                              <div className="text-sm text-gray-500 mb-1">{download.type} • {download.size}</div>
                              <div className="text-xs text-gray-500">
                                Downloaded on {new Date(download.downloadDate).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">No downloads yet</h3>
                  <p className="text-gray-600 mb-6">
                    You haven't purchased any downloadable products yet.
                  </p>
                  <Button asChild>
                    <Link href="/resources">Browse Resources</Link>
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Shipping Address */}
          {activeTab === "address" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Shipping Address</h1>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Default Address</h2>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium">{user.firstName} {user.lastName}</p>
                    <p>{user.address.street}</p>
                    <p>{user.address.city}, {user.address.state} {user.address.zipCode}</p>
                    <p>{user.address.country}</p>
                    <p className="pt-2">{user.phone}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
