export interface DemoInventoryItem {
  id: string;
  name: string;
  category: string;
  sku: string;
  currentStock: number;
  unit: string;
  minStock: number;
  unitCost: number;
  status: string;
}

export const inventoryKpis = [
  { label: "Total Items", value: "42", subtext: "All Inventory Items" },
  { label: "Total Stock Value", value: "₹ 2,48,750", subtext: "Current inventory value" },
  { label: "Low Stock Items", value: "6", subtext: "Reorder required" },
  { label: "Out of Stock Items", value: "2", subtext: "Out of stock" },
  { label: "Stock in Hand", value: "18,950", subtext: "Total quantity" },
  { label: "Pending Requests", value: "8", subtext: "Awaiting approval" },
];

export const demoInventory: DemoInventoryItem[] = [
  {
    id: "inv_001",
    name: "Car Shampoo (5L)",
    category: "Cleaning",
    sku: "CS-SL-001",
    currentStock: 45,
    unit: "Pcs",
    minStock: 30,
    unitCost: 450,
    status: "In Stock",
  },
  {
    id: "inv_002",
    name: "Dashboard Polish",
    category: "Polish",
    sku: "DP-PL-002",
    currentStock: 18,
    unit: "Pcs",
    minStock: 25,
    unitCost: 280,
    status: "Low Stock",
  },
  {
    id: "inv_003",
    name: "Wheel Brush",
    category: "Accessories",
    sku: "WB-AC-003",
    currentStock: 0,
    unit: "Pcs",
    minStock: 10,
    unitCost: 150,
    status: "Out of Stock",
  },
];
