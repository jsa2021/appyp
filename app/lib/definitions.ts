// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  persona: string;
  estado: string;
  creditos: number;
};

export type Chat = {
  user_id: string;
  tipo: string;
  content: string;
  image_url: string;
  date: string;
};

export type Objetivos = {
  id: string;
  user_id: string;
  amount: number;
  date: string;
  status: 'pendiente' | 'cumplido';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestObjetivos = {
  id: string;
  user_id: string;
  amount: number;
  date: string;
  status: 'pendiente' | 'cumplido';
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestObjetivosRaw = Omit<LatestObjetivos, 'amount'> & {
  amount: number;
};

export type LatestObjetivosTable = {
  id: string;
  user_id: string;
  amount: number;
  date: string;
  status: 'pendiente' | 'cumplido';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  user_id: string;
  amount: number;
  date: string;
  status: 'pendiente' | 'cumplido';
};
