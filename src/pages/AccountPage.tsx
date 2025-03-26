import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Package, User, Settings, CreditCard, ShoppingBag, Bell, LogOut } from "lucide-react";

const AccountPage = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "/placeholder.svg",
    joined: "January 2023",
  });

  const [orders] = useState([
    { id: "ORD-7291", date: "April 12, 2023", status: "Delivered", total: "$124.00", items: 3 },
    { id: "ORD-5318", date: "March 4, 2023", status: "Delivered", total: "$87.50", items: 2 },
    { id: "ORD-3912", date: "February 18, 2023", status: "Delivered", total: "$142.25", items: 4 },
  ]);

  return (
    <Layout>
      <div className="container py-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">My Account</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences</p>
            </div>
            <Button variant="outline" onClick={() => navigate("/")}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">Member since {user.joined}</p>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Orders
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payment Methods
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="profile">
                <TabsList className="mb-4">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Update your personal details and how we can reach you
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue="Jane" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue="Smith" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={user.email} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>
                        View and manage your previous orders
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {orders.length > 0 ? (
                        <div className="space-y-4">
                          {orders.map((order) => (
                            <div key={order.id} className="flex flex-col md:flex-row gap-4 items-start border rounded-lg p-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <Package className="h-5 w-5 text-muted-foreground" />
                                  <h3 className="font-semibold">{order.id}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Placed on {order.date} • {order.items} items
                                </p>
                                <div className="mt-2">
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                    {order.status}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">{order.total}</p>
                                <Button variant="ghost" size="sm" className="mt-2">
                                  View Order
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-10">
                          <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground" />
                          <h3 className="mt-4 text-lg font-medium">No orders yet</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            When you place an order, it will appear here.
                          </p>
                          <Button variant="outline" className="mt-4" onClick={() => navigate("/products")}>
                            Browse Products
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>
                        Decide which communications you'd like to receive
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="marketing">Marketing emails</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive emails about new products, features, and more.
                          </p>
                        </div>
                        <Switch id="marketing" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="order-updates">Order updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive order status updates via email.
                          </p>
                        </div>
                        <Switch id="order-updates" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="newsletter">Weekly newsletter</Label>
                          <p className="text-sm text-muted-foreground">
                            Get the latest news, articles, and resources.
                          </p>
                        </div>
                        <Switch id="newsletter" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save Preferences</Button>
                    </CardFooter>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Update your password to keep your account secure
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Update Password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;
