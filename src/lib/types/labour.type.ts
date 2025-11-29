export interface Labour {
  name: string;
  phone: string;
  address: string;
  aadhar: string;
  salary: number;
  joiningDate: string;
  skill: string;
  city: string;
  price: number;

  // Optional additional fields
  status?: 'active' | 'inactive'; // default can be set in service
  createdAt?: Date;
  updatedAt?: Date;
}
