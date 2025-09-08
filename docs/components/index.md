# Components Overview

SageUI provides a comprehensive set of components organized into logical categories. Each component is designed with accessibility, customization, and developer experience in mind.

## Actions

Interactive elements that trigger actions or behaviors.

<div class="example-grid">
  <div class="example-card">
    <h3><a href="/components/button">Button</a></h3>
    <p>Clickable buttons in various styles and sizes</p>
    <div class="demo-section">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-outline">Outline</button>
    </div>
  </div>


  <div class="example-card">
    <h3><a href="/components/modal">Modal</a></h3>
    <p>Dialog overlays for important content and user interactions</p>
    <div class="demo-section">
      <button class="btn btn-primary" onclick="alert('Modal demo')">Open Modal</button>
    </div>
  </div>
</div>

## Data Input

Form elements for collecting user input.

<div class="example-grid">
  <div class="example-card">
    <h3><a href="/components/input">Text Input</a></h3>
    <p>Text input fields with various states and styles</p>
    <div class="demo-section">
      <div class="form-control">
        <input type="text" placeholder="Type here..." class="input" />
      </div>
      <div class="form-control">
        <input type="email" placeholder="Email..." class="input input-primary" />
      </div>
    </div>
  </div>

  <div class="example-card">
    <h3><a href="/components/checkbox">Checkbox</a></h3>
    <p>Checkboxes for boolean selections</p>
    <div class="demo-section">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Remember me</span>
          <input type="checkbox" class="checkbox" />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Subscribe</span>
          <input type="checkbox" class="checkbox checkbox-primary" checked />
        </label>
      </div>
    </div>
  </div>

  <div class="example-card">
    <h3><a href="/components/radio">Radio</a></h3>
    <p>Radio buttons for single selections from multiple options</p>
    <div class="demo-section">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Option A</span>
          <input type="radio" name="demo" class="radio radio-primary" checked />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Option B</span>
          <input type="radio" name="demo" class="radio radio-primary" />
        </label>
      </div>
    </div>
  </div>

  <div class="example-card">
    <h3><a href="/components/select">Select</a></h3>
    <p>Dropdown select menus for choosing from options</p>
    <div class="demo-section">
      <select class="select">
        <option>Choose option</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  </div>
</div>

## Data Display

Components for presenting information and data.

<div class="example-grid">
  <div class="example-card">
    <h3><a href="/components/card">Card</a></h3>
    <p>Flexible containers for grouping related content</p>
    <div class="demo-section">
      <div class="card" style="max-width: 300px;">
        <div class="card-body">
          <h4 class="card-title">Card Title</h4>
          <p class="card-text">Some example content for the card body.</p>
          <div class="card-actions">
            <button class="btn btn-primary btn-sm">Action</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="example-card">
    <h3><a href="/components/avatar">Avatar</a></h3>
    <p>User profile images and placeholder avatars</p>
    <div class="demo-section">
      <div class="flex items-center gap-3">
        <div class="avatar">
          <div class="avatar-image w-12 h-12">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face&auto=format&q=60" alt="Avatar" />
          </div>
        </div>
        <div class="avatar avatar-online">
          <div class="avatar-image w-12 h-12">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face&auto=format&q=60" alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="example-card">
    <h3><a href="/components/badge">Badge</a></h3>
    <p>Small status indicators and labels</p>
    <div class="demo-section">
      <span class="badge">Default</span>
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-warning">Warning</span>
    </div>
  </div>

  <div class="example-card">
    <h3><a href="/components/table">Table</a></h3>
    <p>Structured data tables with sorting and styling</p>
    <div class="demo-section">
      <div class="table-container">
        <table class="table table-striped" style="font-size: 0.75rem;">
          <thead>
            <tr>
              <th class="table-header">Name</th>
              <th class="table-header">Role</th>
              <th class="table-header">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-cell">John Doe</td>
              <td class="table-cell">Admin</td>
              <td class="table-cell"><span class="badge badge-success">Active</span></td>
            </tr>
            <tr>
              <td class="table-cell">Jane Smith</td>
              <td class="table-cell">User</td>
              <td class="table-cell"><span class="badge badge-warning">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

## Feedback

Components for providing user feedback and status information.

<div class="example-grid">
  <div class="example-card">
    <h3><a href="/components/alert">Alert</a></h3>
    <p>Contextual feedback messages for user actions</p>
    <div class="demo-section">
      <div class="alert alert-success">
        <span>✅</span>
        <span>Success! Changes saved.</span>
      </div>
      <div class="alert alert-warning">
        <span>⚠️</span>
        <span>Warning: Check your input.</span>
      </div>
    </div>
  </div>

  <div class="example-card">
    <h3><a href="/components/loading">Loading</a></h3>
    <p>Spinners and loading indicators</p>
    <div class="demo-section">
      <div class="flex items-center gap-3">
        <div class="spinner spinner-sm"></div>
        <div class="spinner"></div>
        <div class="spinner spinner-lg"></div>
      </div>
    </div>
  </div>

  <div class="example-card">
    <h3><a href="/components/tooltip">Tooltip</a></h3>
    <p>Contextual information on hover or focus</p>
    <div class="demo-section">
      <button class="btn tooltip" data-tooltip="This is a tooltip">Hover me</button>
    </div>
  </div>
</div>

## Getting Started

Ready to start using these components? Check out our [installation guide](/guide/installation) or dive into specific component documentation.

<div class="flex gap-4 mt-8">
  <a href="/guide/installation" class="btn btn-primary">Install SageUI</a>
  <a href="/components/button" class="btn btn-outline">Component Details</a>
</div>

---

## Component Status

| Component | Status | Accessibility | Documentation |
|-----------|--------|---------------|---------------|
| Button | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Card | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Alert | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Input | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Checkbox | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Radio | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Select | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Avatar | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Badge | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Table | ✅ Complete | ♿ WCAG AA | 📚 Full |
| Loading | ✅ Complete | ♿ WCAG AA | 📚 Full |
