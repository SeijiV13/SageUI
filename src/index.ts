// SageUI - Main entry point
export * from './components';
export * from './utils';

// Export the Tailwind plugin (JavaScript file)
const plugin = require('./plugin.js');
export { plugin };

// Version
export const version = '1.0.0';
