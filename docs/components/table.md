# Table

Tables organize and display data in rows and columns, making it easy to scan, compare, and analyze information. SageUI provides flexible table components with various styling options.

## Basic Usage

<div class="demo-container">
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <tr>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <tr>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

```html
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <tr>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <tr>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Table Variants

### Zebra Striping

<div class="demo-container">
<div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td><div class="badge badge-success">Active</div></td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td><div class="badge badge-warning">Pending</div></td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>bob@example.com</td>
        <td><div class="badge badge-error">Inactive</div></td>
      </tr>
    </tbody>
  </table>
</div>
</div>

```html
<div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td><div class="badge badge-success">Active</div></td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td><div class="badge badge-warning">Pending</div></td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>bob@example.com</td>
        <td><div class="badge badge-error">Inactive</div></td>
      </tr>
    </tbody>
  </table>
</div>
```

### Compact Table
<div class="demo-container">
<div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>Alice Wilson</td>
        <td>alice@example.com</td>
        <td>Admin</td>
      </tr>
      <tr>
        <td>002</td>
        <td>Charlie Brown</td>
        <td>charlie@example.com</td>
        <td>User</td>
      </tr>
      <tr>
        <td>003</td>
        <td>Diana Prince</td>
        <td>diana@example.com</td>
        <td>Moderator</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

```html
<div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>Alice Wilson</td>
        <td>alice@example.com</td>
        <td>Admin</td>
      </tr>
      <tr>
        <td>002</td>
        <td>Charlie Brown</td>
        <td>charlie@example.com</td>
        <td>User</td>
      </tr>
      <tr>
        <td>003</td>
        <td>Diana Prince</td>
        <td>diana@example.com</td>
        <td>Moderator</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Interactive Tables

### Selectable Rows

<div class="demo-container">
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="w-12 h-12 rounded-full">
                <img src="/assets/avatar1.jpg" alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Desktop Support Technician
          <br/>
          <span class="badge badge-ghost badge-sm">Desktop Support</span>
        </td>
        <td>
          <button class="btn btn-ghost btn-xs">details</button>
        </td>
      </tr>
      <tr class="hover">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="w-12 h-12 rounded-full">
                <img src="/assets/avatar2.jpg" alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold">Brice Swyre</div>
              <div class="text-sm opacity-50">Canada</div>
            </div>
          </div>
        </td>
        <td>
          Tax Accountant
          <br/>
          <span class="badge badge-ghost badge-sm">Accounting</span>
        </td>
        <td>
          <button class="btn btn-ghost btn-xs">details</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</div>

```html
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="w-12 h-12 rounded-full">
                <img src="avatar1.jpg" alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Desktop Support Technician
          <br/>
          <span class="badge badge-ghost badge-sm">Desktop Support</span>
        </td>
        <td>
          <button class="btn btn-ghost btn-xs">details</button>
        </td>
      </tr>
      <tr class="hover">
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="w-12 h-12 rounded-full">
                <img src="avatar2.jpg" alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold">Brice Swyre</div>
              <div class="text-sm opacity-50">Canada</div>
            </div>
          </div>
        </td>
        <td>
          Tax Accountant
          <br/>
          <span class="badge badge-ghost badge-sm">Accounting</span>
        </td>
        <td>
          <button class="btn btn-ghost btn-xs">details</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Sortable Headers
<div class="demo-container">
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>
          <button class="flex items-center gap-1 font-semibold">
            Name
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </button>
        </th>
        <th>
          <button class="flex items-center gap-1 font-semibold">
            Date
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </button>
        </th>
        <th>
          <button class="flex items-center gap-1 font-semibold">
            Status
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Project Alpha</td>
        <td>2024-01-15</td>
        <td><div class="badge badge-success">Completed</div></td>
      </tr>
      <tr>
        <td>Project Beta</td>
        <td>2024-01-20</td>
        <td><div class="badge badge-warning">In Progress</div></td>
      </tr>
      <tr>
        <td>Project Gamma</td>
        <td>2024-01-25</td>
        <td><div class="badge badge-error">Pending</div></td>
      </tr>
    </tbody>
  </table>
</div>
</div>

```html
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>
          <button class="flex items-center gap-1 font-semibold">
            Name
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </button>
        </th>
        <th>
          <button class="flex items-center gap-1 font-semibold">
            Date
         <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </button>
        </th>
        <th>
          <button class="flex items-center gap-1 font-semibold">
            Status
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Project Alpha</td>
        <td>2024-01-15</td>
        <td><div class="badge badge-success">Completed</div></td>
      </tr>
      <tr>
        <td>Project Beta</td>
        <td>2024-01-20</td>
        <td><div class="badge badge-warning">In Progress</div></td>
      </tr>
      <tr>
        <td>Project Gamma</td>
        <td>2024-01-25</td>
        <td><div class="badge badge-error">Pending</div></td>
      </tr>
    </tbody>
  </table>
</div>
```

## Advanced Table Features

### With Pagination

<div class="demo-container">
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wireless Headphones</td>
        <td>Electronics</td>
        <td>$199.99</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Running Shoes</td>
        <td>Sports</td>
        <td>$129.99</td>
        <td>45</td>
      </tr>
      <tr>
        <td>Coffee Maker</td>
        <td>Appliances</td>
        <td>$89.99</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Pagination -->
<div class="flex justify-between items-center mt-4">
  <div class="text-sm text-base-content/70">
    Showing 1 to 3 of 150 entries
  </div>
  <div class="btn-group">
    <button class="btn btn-sm">«</button>
    <button class="btn btn-sm btn-active">1</button>
    <button class="btn btn-sm">2</button>
    <button class="btn btn-sm">3</button>
    <button class="btn btn-sm">...</button>
    <button class="btn btn-sm">50</button>
    <button class="btn btn-sm">»</button>
  </div>
</div>
</div>

```html
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wireless Headphones</td>
        <td>Electronics</td>
        <td>$199.99</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Running Shoes</td>
        <td>Sports</td>
        <td>$129.99</td>
        <td>45</td>
      </tr>
      <tr>
        <td>Coffee Maker</td>
        <td>Appliances</td>
        <td>$89.99</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Pagination -->
<div class="flex justify-between items-center mt-4">
  <div class="text-sm text-base-content/70">
    Showing 1 to 3 of 150 entries
  </div>
  <div class="btn-group">
    <button class="btn btn-sm">«</button>
    <button class="btn btn-sm btn-active">1</button>
    <button class="btn btn-sm">2</button>
    <button class="btn btn-sm">3</button>
    <button class="btn btn-sm">...</button>
    <button class="btn btn-sm">50</button>
    <button class="btn btn-sm">»</button>
  </div>
</div>
```

## Data Table with Filters

<div class="demo-container">
<!-- Filter Controls -->
<div class="flex flex-wrap gap-4 mb-4">
  <div class="form-control">
    <input type="text" class="input input-bordered input-sm" placeholder="Search..." id="table-search">
  </div>
  <select class="select select-bordered select-sm" id="status-filter">
    <option value="">All Statuses</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
    <option value="pending">Pending</option>
  </select>
  <select class="select select-bordered select-sm" id="role-filter">
    <option value="">All Roles</option>
    <option value="admin">Admin</option>
    <option value="user">User</option>
    <option value="moderator">Moderator</option>
  </select>
</div>

<!-- Table -->
<div class="overflow-x-auto">
  <table class="table table-zebra w-full" id="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr data-role="admin" data-status="active">
        <td>Alice Johnson</td>
        <td>alice@example.com</td>
        <td><div class="badge badge-primary">Admin</div></td>
        <td><div class="badge badge-success">Active</div></td>
        <td>
          <div class="flex gap-1">
            <button class="btn btn-ghost btn-xs">Edit</button>
            <button class="btn btn-ghost btn-xs text-error">Delete</button>
          </div>
        </td>
      </tr>
      <tr data-role="user" data-status="inactive">
        <td>Bob Smith</td>
        <td>bob@example.com</td>
        <td><div class="badge badge-secondary">User</div></td>
        <td><div class="badge badge-error">Inactive</div></td>
        <td>
          <div class="flex gap-1">
            <button class="btn btn-ghost btn-xs">Edit</button>
            <button class="btn btn-ghost btn-xs text-error">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>

```html
<!-- Filter Controls -->
<div class="flex flex-wrap gap-4 mb-4">
  <div class="form-control">
    <input type="text" class="input input-bordered input-sm" placeholder="Search..." id="table-search">
  </div>
  <select class="select select-bordered select-sm" id="status-filter">
    <option value="">All Statuses</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
    <option value="pending">Pending</option>
  </select>
  <select class="select select-bordered select-sm" id="role-filter">
    <option value="">All Roles</option>
    <option value="admin">Admin</option>
    <option value="user">User</option>
    <option value="moderator">Moderator</option>
  </select>
</div>

<!-- Table -->
<div class="overflow-x-auto">
  <table class="table table-zebra w-full" id="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr data-role="admin" data-status="active">
        <td>Alice Johnson</td>
        <td>alice@example.com</td>
        <td><div class="badge badge-primary">Admin</div></td>
        <td><div class="badge badge-success">Active</div></td>
        <td>
          <div class="flex gap-1">
            <button class="btn btn-ghost btn-xs">Edit</button>
            <button class="btn btn-ghost btn-xs text-error">Delete</button>
          </div>
        </td>
      </tr>
      <tr data-role="user" data-status="inactive">
        <td>Bob Smith</td>
        <td>bob@example.com</td>
        <td><div class="badge badge-secondary">User</div></td>
        <td><div class="badge badge-error">Inactive</div></td>
        <td>
          <div class="flex gap-1">
            <button class="btn btn-ghost btn-xs">Edit</button>
            <button class="btn btn-ghost btn-xs text-error">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## TypeScript Usage

```typescript
import { Table } from 'sageui';

// Create a table instance
const table = new Table({
  element: document.getElementById('my-table'),
  data: [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' }
  ],
  columns: [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { 
      key: 'role', 
      label: 'Role', 
      render: (value) => `<div class="badge badge-primary">${value}</div>`
    }
  ],
  sortable: true,
  selectable: true,
  pagination: {
    enabled: true,
    pageSize: 10,
    showInfo: true
  }
});

// Update data
table.setData([
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'moderator' }
]);

// Add row
table.addRow({ id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'user' });

// Remove row
table.removeRow(2);

// Sorting
table.sortBy('name', 'asc');

// Filtering
table.filter((row) => row.role === 'admin');

// Search
table.search('john');

// Selection
table.selectRow(1);
table.selectAll();
table.deselectAll();

// Event handling
table.onRowSelect((row, isSelected) => {
  console.log('Row selected:', row, isSelected);
});

table.onRowClick((row, event) => {
  console.log('Row clicked:', row);
});

table.onSort((column, direction) => {
  console.log('Sorted by:', column, direction);
});

// Export data
const csvData = table.exportCSV();
const jsonData = table.exportJSON();

// Pagination controls
table.goToPage(2);
table.nextPage();
table.previousPage();
table.setPageSize(25);
```

## Responsive Table
<div class="demo-container">
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th class="hidden sm:table-cell">Email</th>
        <th class="hidden md:table-cell">Department</th>
        <th class="hidden lg:table-cell">Joined</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div>
            <div class="font-semibold">John Doe</div>
            <div class="text-sm opacity-70 sm:hidden">john@example.com</div>
          </div>
        </td>
        <td class="hidden sm:table-cell">john@example.com</td>
        <td class="hidden md:table-cell">Engineering</td>
        <td class="hidden lg:table-cell">Jan 15, 2023</td>
        <td><div class="badge badge-success">Active</div></td>
        <td>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-xs">⋮</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
              <li><a>Edit</a></li>
              <li><a>Delete</a></li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>

```html
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th class="hidden sm:table-cell">Email</th>
        <th class="hidden md:table-cell">Department</th>
        <th class="hidden lg:table-cell">Joined</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div>
            <div class="font-semibold">John Doe</div>
            <div class="text-sm opacity-70 sm:hidden">john@example.com</div>
          </div>
        </td>
        <td class="hidden sm:table-cell">john@example.com</td>
        <td class="hidden md:table-cell">Engineering</td>
        <td class="hidden lg:table-cell">Jan 15, 2023</td>
        <td><div class="badge badge-success">Active</div></td>
        <td>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-xs">⋮</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
              <li><a>Edit</a></li>
              <li><a>Delete</a></li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Accessibility

- Use proper table semantics (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`)
- Provide table captions and summaries when needed
- Use `scope` attributes for complex tables
- Ensure keyboard navigation works for interactive elements
- Provide alternative text for images in cells
- Use ARIA labels for sortable headers
- Ensure sufficient color contrast

## CSS Classes

| Class | Description |
|-------|-------------|
| `table` | Base table styles |
| `table-zebra` | Alternating row colors |
| `table-compact` | Reduced padding |
| `table-pin-rows` | Pin header/footer rows |
| `table-pin-cols` | Pin first/last columns |

## Examples

### Dashboard Analytics Table

<div class="demo-container">
<div class="card w-full bg-base-100 shadow">
  <div class="card-body">
    <div class="flex justify-between items-center mb-4">
      <h2 class="card-title">Top Pages</h2>
      <div class="flex gap-2">
        <select class="select select-bordered select-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
        <button class="btn btn-ghost btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Page</th>
            <th class="text-right">Views</th>
            <th class="text-right">Unique</th>
            <th class="text-right">Bounce Rate</th>
            <th class="text-right">Avg. Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <div class="w-2 h-8 bg-primary rounded"></div>
                <div>
                  <div class="font-semibold">/dashboard</div>
                  <div class="text-sm opacity-70">/dashboard</div>
                </div>
              </div>
            </td>
            <td class="text-right font-semibold">24,563</td>
            <td class="text-right">18,291</td>
            <td class="text-right">
              <span class="text-success">32.5%</span>
            </td>
            <td class="text-right">4m 32s</td>
          </tr>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <div class="w-2 h-6 bg-secondary rounded"></div>
                <div>
                  <div class="font-semibold">/products</div>
                  <div class="text-sm opacity-70">/products</div>
                </div>
              </div>
            </td>
            <td class="text-right font-semibold">18,492</td>
            <td class="text-right">14,203</td>
            <td class="text-right">
              <span class="text-warning">45.2%</span>
            </td>
            <td class="text-right">3m 18s</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


</div>

```html
<div class="card w-full bg-base-100 shadow">
  <div class="card-body">
    <div class="flex justify-between items-center mb-4">
      <h2 class="card-title">Top Pages</h2>
      <div class="flex gap-2">
        <select class="select select-bordered select-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
        <button class="btn btn-ghost btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>
    </div>
    
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Page</th>
            <th class="text-right">Views</th>
            <th class="text-right">Unique</th>
            <th class="text-right">Bounce Rate</th>
            <th class="text-right">Avg. Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <div class="w-2 h-8 bg-primary rounded"></div>
                <div>
                  <div class="font-semibold">/dashboard</div>
                  <div class="text-sm opacity-70">/dashboard</div>
                </div>
              </div>
            </td>
            <td class="text-right font-semibold">24,563</td>
            <td class="text-right">18,291</td>
            <td class="text-right">
              <span class="text-success">32.5%</span>
            </td>
            <td class="text-right">4m 32s</td>
          </tr>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <div class="w-2 h-6 bg-secondary rounded"></div>
                <div>
                  <div class="font-semibold">/products</div>
                  <div class="text-sm opacity-70">/products</div>
                </div>
              </div>
            </td>
            <td class="text-right font-semibold">18,492</td>
            <td class="text-right">14,203</td>
            <td class="text-right">
              <span class="text-warning">45.2%</span>
            </td>
            <td class="text-right">3m 18s</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```
