
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  featured?: boolean;
  inStock: boolean;
  rating?: number;
  reviews?: Review[];
  artisan?: Artisan;
  material?: string;
  dimensions?: string;
  weight?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Artisan {
  id: string;
  name: string;
  bio: string;
  location: string;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'customer';
  avatar?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phone: string;
}
