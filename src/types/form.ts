export interface Form {
  name: string;
  address: string;
  phone: string;
  plan: string;
  billing: "monthly" | "yearly";
  addOn: string[];
}
